# Generated Playwright specs

These `*.spec.ts` files are produced by:

```bash
cd ../ui-explorer-agent
python main.py --phase generate
```

## Opening the files

Open them **inside Cursor / VS Code** (File → Open, or click in the explorer).

On Windows, double-clicking a `.ts` file often launches **Windows Media Player**
(`.ts` is registered as an MPEG transport stream). That player shows nothing —
the files are not empty. Use an editor, not Explorer double-click.

## Running

```bash
cd ..
npx playwright test
npx playwright show-report
```
