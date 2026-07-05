# Windows shell decision for MemoWork v0

## Decision

MemoWork v0 should use the native Windows desktop/runtime path by default. WSL stays available as an optional advanced setting, but it is **not enabled by default**.

## Why

MemoWork is for beginners first. For Windows 10/11 users, the clearest mental model is:

- install one app;
- choose a normal Windows folder such as Desktop or Documents;
- let the app work inside that folder.

Defaulting to WSL would force beginners to understand two file systems, Linux paths, WSL installation state, Windows Store availability, virtualization settings, and network differences before they see the agent work. That is exactly the friction MemoWork is supposed to remove.

## Source evidence

The current codebase is Windows-native by default and already contains an optional WSL bridge:

- `packages/opencode/src/shell/shell.ts` chooses `pwsh.exe` / `powershell.exe`, Git Bash, or `cmd.exe` on Windows.
- `packages/opencode/src/tool/bash.ts` and `packages/opencode/src/util/process.ts` keep Windows-native shell/process handling.
- `packages/opencode/src/worktree/index.ts` uses `cmd /c` for Windows startup commands and `bash -lc` elsewhere.
- `packages/desktop/src/main/server.ts` stores `wslEnabled` through `getWslConfig` / `setWslConfig`.
- `packages/desktop/src/main/apps.ts` exposes `wslPath(...)` for Windows path conversion.
- `packages/desktop/src/renderer/index.tsx` checks `platform.getWslEnabled()` and converts picker paths when WSL is enabled.

The default remains false:

```ts
return { enabled: typeof value === "boolean" ? value : false }
```

The same server startup code also treats Windows specially:

```ts
const shell = process.platform === "win32" ? null : getUserShell()
```

So making WSL the default is not a one-line setting. It would require a wider design for shell environment, file picker UX, installation checks, WSL distro choice, and error recovery.

## v0 behavior

- Default: native Windows.
- Optional: user can enable WSL if the UI exposes that setting and they already understand WSL.
- Documentation: beginner docs should not ask users to install WSL before trying MemoWork.

## Later WSL lane

A later WSL-focused release can be useful for code-heavy users if it adds all of these together:

1. WSL installed/distro health check.
2. Clear explanation of Windows path vs Linux path.
3. Workspace picker that shows where files really live.
4. Recovery messages for virtualization, Microsoft Store, proxy, and offline failures.
5. Tests on Windows 10 and Windows 11.

Until then, WSL should remain opt-in rather than a default.
