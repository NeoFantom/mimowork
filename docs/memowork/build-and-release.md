# MemoWork build and release

MemoWork uses the existing MiMo-Code Electron desktop package under `packages/desktop`. This build slice intentionally assumes no signing, notarization, publishing token, or release secret.

## Package manager and scripts

The repository uses Bun workspaces (`packageManager: bun@1.3.14`). The desktop package exposes these relevant scripts:

- `bun run build` — runs the desktop prebuild step and `electron-vite build`.
- `bun run package:mac` — runs `electron-builder --mac --config electron-builder.config.ts`.
- `bun run package:win` — runs `electron-builder --win --config electron-builder.config.ts`.

The CI workflow keeps build and packaging as separate steps so failures identify whether compilation or installer packaging broke.

## GitHub Actions workflow

`.github/workflows/memowork-desktop.yml` runs on pushes to `main` and `dev`, tags matching `memowork-v*`, pull requests to `main` and `dev`, plus manual `workflow_dispatch` runs.

It builds two jobs:

- `macos-latest`: `bun run build`, then `bun run package:mac -- --publish never -c.mac.identity=null -c.mac.notarize=false -c.dmg.sign=false`.
- `windows-latest`: `bun run build`, then `bun run package:win -- --publish never`.

Each job uploads installer artifacts from `packages/desktop/dist`:

- `memowork-desktop-macos` includes `.dmg`, `.zip`, `.blockmap`, and `latest*.yml/json` files.
- `memowork-desktop-windows` includes the NSIS `.exe` installer, `.blockmap`, and `latest*.yml/json` files.

## Signing and secrets stance

The workflow uses only `contents: read` permissions and does not publish releases. `--publish never` prevents Electron Builder release publishing. `CSC_IDENTITY_AUTO_DISCOVERY=false`, `MEMOWORK_UNSIGNED=1`, and the macOS `-c.*` overrides keep macOS packaging unsigned and unnotarized for CI artifacts.

Windows signing is optional in the existing `script/sign-windows.ps1`: when Azure Trusted Signing variables are absent, the script prints a skip message and exits successfully. The workflow does not provide those variables.

## Local smoke path

From a prepared checkout with dependencies installed:

```sh
bun install --frozen-lockfile
bun --cwd packages/desktop run build
```

Platform packaging should be run on the matching OS:

```sh
bun --cwd packages/desktop run package:mac -- --publish never -c.mac.identity=null -c.mac.notarize=false -c.dmg.sign=false
bun --cwd packages/desktop run package:win -- --publish never
```

## Current release boundary

This workflow proves that GitHub-hosted macOS and Windows runners can attempt MemoWork desktop packaging and retain the resulting artifacts. It does not make the artifacts signed, notarized, auto-updating, or published to a GitHub Release.
