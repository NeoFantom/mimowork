# MemoWork acceptance criteria

MemoWork is a beginner-friendly desktop distribution of the MiMo-Code agent experience. The first release optimizes for a nontechnical user who wants to install a desktop app and start using the built-in MiMo/Xiaomi model path without learning terminal setup first.

## Non-negotiable goals

1. **Preserve MiMo runtime behavior.** Do not remove or rewrite `MimoAuthPlugin`, the `xiaomi` provider, `mimo-auto`, OAuth/auth metadata handling, or Xiaomi request header logic.
2. **Installable desktop app.** Provide build paths for macOS and Windows 10/11 desktop artifacts.
3. **Beginner-friendly wrapper.** Product name, installer names, first-run documentation, and troubleshooting language should say MemoWork and explain what to do in ordinary language.
4. **No secrets in code.** The repository must not contain API keys, tokens, private auth files, or hard-coded user credentials.
5. **Clear attribution.** Retain upstream MIT license notices and acknowledge XiaomiMiMo/MiMo-Code and OpenCode heritage. Do not imply MemoWork is an official Xiaomi product.

## First release pass criteria

- Public GitHub repository: `https://github.com/NeoFantom/mimowork`.
- Desktop packaging metadata uses `MemoWork` / `memowork` for visible product and artifact names.
- Windows packaging uses NSIS or an equivalent installer path already supported by Electron Builder.
- macOS packaging produces a dmg/zip target through Electron Builder.
- A GitHub Actions workflow builds Windows and macOS desktop artifacts, or records an exact blocker.
- README includes a plain-language installation path and a troubleshooting section for ordinary users.
- A technical note records the Windows shell decision: native Windows default vs WSL default, with rationale.

## Verification evidence required before claiming usable

- `git status --short` is clean after committed changes.
- Packaging configuration can be inspected locally without syntax errors.
- At least one local static/package metadata check is run.
- CI workflow syntax is present and committed.
- If remote CI is triggered, record the run URL and current result.

## Deferred unless proven cheap

- Full OpenWork-style sidecar rewrite.
- Mandatory WSL default on Windows.
- Code-signing/notarization credentials.
- New visual identity/icon system beyond safe placeholder renaming.
