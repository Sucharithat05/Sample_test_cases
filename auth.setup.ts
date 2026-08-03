import { test as setup, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * Refreshes .auth/<site>.json before the batch runs.
 *
 * OpenCart sessions expire quickly, so a storageState captured during Phase 1
 * exploration is usually dead by the time Phase 2 runs. Auth-gated specs
 * consume the file this writes.
 */
const site = process.env.AUTH_SITE || 'opencart';
const authFile = process.env.STORAGE_STATE || path.join('.auth', `${site}.json`);
const loginUrl =
  process.env.LOGIN_URL ||
  'https://opencart.abstracta.us/index.php?route=account/login';

setup('authenticate', async ({ page }) => {
  const username = process.env.APP_USERNAME || '';
  const password = process.env.APP_PASSWORD || '';

  if (!username || !password) {
    setup.skip(true, 'APP_USERNAME / APP_PASSWORD not set - reusing existing .auth state');
    return;
  }

  await page.goto(loginUrl);
  await page.locator('#input-email').fill(username);
  await page.locator('#input-password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect.poll(() => page.url()).toContain('route=account/account');
  await expect(page.locator('body')).toContainText('Edit Account');

  fs.mkdirSync(path.dirname(authFile), { recursive: true });
  await page.context().storageState({ path: authFile });
});
