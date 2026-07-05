# Runtime boundaries preserved in MemoWork

MemoWork renames the desktop wrapper, not the MiMo-Code engine.

## Preserved internal contracts

Do not rename these in the v0 desktop fork:

- `virtual:opencode-server` import paths.
- `OPENCODE_SERVER_USERNAME` and `OPENCODE_SERVER_PASSWORD` environment variables.
- local server username `opencode` and health-check Basic auth format.
- `opencode://` deep link scheme.
- `opencode.global.dat` / `opencode.settings` store names.
- MiMo provider/auth code such as `MimoAuthPlugin`, `xiaomi`, `mimo-auto`, auth metadata, and Xiaomi request headers.

These names are internal compatibility contracts inherited from MiMo-Code/OpenCode. Renaming them for branding would increase breakage risk without helping beginners install the app.

## MemoWork-owned profile

MemoWork does set `MIMOCODE_HOME` to Electron's `app.getPath("userData")` before starting the embedded server. This gives MemoWork its own local profile for MiMo-Code data/config/cache/state and avoids silently mutating a user's existing MiMoCode CLI profile.
