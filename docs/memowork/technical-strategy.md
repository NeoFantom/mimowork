# MemoWork technical strategy

## First-principles decision

The valuable thing is not a new agent engine. The valuable thing is a smoother entrance to MiMo-Code for ordinary people. Therefore the first MemoWork version should keep MiMo-Code's desktop/server/provider stack intact and change the user-facing wrapper first.

## Chosen route

Use `packages/desktop` from MiMo-Code as the base and make a minimal productized desktop fork:

1. rename desktop product metadata to MemoWork;
2. preserve the embedded MiMo server and provider/auth code paths;
3. add cross-platform build workflow for macOS and Windows;
4. add beginner-facing install/troubleshooting docs;
5. evaluate WSL as an optional later Windows execution mode instead of changing defaults before source-level proof.

## Why not port OpenWork first

OpenWork is useful as a reference for runtime diagnostics and sidecar management, but a full retarget would duplicate a lot of OpenCode-specific assumptions and risks breaking MiMo/Xiaomi provider behavior. MemoWork should borrow OpenWork ideas only after the MiMo desktop fork builds and launches.
