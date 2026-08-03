import { defineConfig, devices } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Load APP_* credentials from sibling ui-explorer-agent/.env when present.
const envPath = path.resolve(__dirname, '../ui-explorer-agent/.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) continue;
    if (!process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, '');
    }
  }
}

const baseURL =
  process.env.BASE_URL ||
  process.env.PLAYWRIGHT_BASE_URL ||
  'https://opencart.abstracta.us/';

/**
 * Phase 2 batch runner — frozen locators from ui-explorer-agent codegen.
 * No Groq / MCP / LLM. Explore once, then `npx playwright test`.
 */
export default defineConfig({
  testDir: './generated',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    locale: 'en-IN',
  },
  projects: [
    {
      // Refreshes .auth/<site>.json; OpenCart sessions die long before a
      // Phase 1 exploration run is replayed.
      name: 'setup',
      testDir: '.',
      testMatch: /auth\.setup\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium',
      testDir: './generated',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        // Auth-gated specs set storageState per-test in generated/*.spec.ts.
        // Do not apply .auth globally — TC001 must login from a logged-out session.
      },
    },
  ],
});
