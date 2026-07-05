# MemoWork

MemoWork is a beginner-friendly desktop app for using an AI agent on your own computer. You can ask it to read files in a folder, explain them, draft text, help organize work, and make changes after you approve the action.

MemoWork is aimed at Windows and macOS users who do not want to start with command-line setup. It packages the MiMo-Code agent experience as a desktop-first workflow.

> MemoWork is an independent community fork. It is not presented as an official Xiaomi product.

## Start here

Read the beginner guide first:

- [Install and first-run guide](docs/memowork/beginner-install.md)

The guide explains:

- what to download;
- where to install the app on Windows and macOS;
- what to expect on first launch;
- how to choose the built-in Xiaomi/MiMo model path when it is available;
- common fixes for sign-in, network, permissions, and security warnings.

## What MemoWork can help with

MemoWork works best on computer-based tasks, for example:

- summarize or rewrite documents;
- compare notes, reports, or meeting materials;
- draft emails and checklists;
- organize project folders;
- inspect code or text files for people who are comfortable letting an AI assistant read a chosen folder.

You stay in control. Treat MemoWork like a powerful assistant: review what it says, approve sensitive actions carefully, and do not paste passwords, private keys, or confidential data unless your organization allows it.

## Model connection

MemoWork keeps the MiMo-Code model/provider path instead of replacing it with a new agent engine. On first run, use the built-in Xiaomi/MiMo option if the app offers it. Availability, login requirements, pricing, and service terms may change outside this repository.

Advanced users may also connect other compatible model providers if the app exposes that option, but the beginner path is the built-in Xiaomi/MiMo route.

## Project status

This repository is the public MemoWork fork at:

- <https://github.com/NeoFantom/mimowork>

The current goal is a simple installable desktop app for macOS and Windows 10/11. Some pre-release builds may still contain inherited MiMo-Code or OpenCode wording while the desktop packaging is being renamed.

## Upstream acknowledgements

MemoWork stands on existing open-source work:

- [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code) provides the MiMo-Code agent experience and Xiaomi/MiMo provider integration that MemoWork packages for beginners.
- [OpenCode](https://github.com/anomalyco/opencode) is the upstream project that MiMo-Code was built from.

MemoWork retains the upstream MIT license notices. See [LICENSE](LICENSE) for this repository's license text. Xiaomi, MiMo, OpenCode, and related names or trademarks belong to their respective owners.
