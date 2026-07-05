# MemoWork beginner install guide

This guide is for Windows and macOS users who want to try MemoWork without learning terminal commands first.

MemoWork is a desktop version of the MiMo-Code agent experience. It helps you work with files on your computer through an AI chat window. It can read a folder you choose, explain what is inside, draft text, and suggest edits. You should still review important output before using it.

> MemoWork is an independent community fork. It is not an official Xiaomi product, and this guide does not promise Xiaomi support, pricing, or service availability.

## 1. Download MemoWork

Use the project release page when a release is available:

- <https://github.com/NeoFantom/mimowork/releases>

Choose the file for your computer:

| Your computer | File to choose | Notes |
| --- | --- | --- |
| Windows 10/11 | `.exe` installer | Use the normal installer. If Windows asks whether to allow changes, choose yes only if you trust the downloaded file. |
| macOS | `.dmg` or `.zip` | Open the download, then move MemoWork into Applications if prompted. |

If there is no release yet, MemoWork is not ready for beginner installation. Wait for a published release instead of building from source.

## 2. Install location

Use the default location unless you have a reason to change it.

| System | Recommended install path |
| --- | --- |
| Windows | Keep the installer default. It normally installs for your user account and may let you choose another folder. |
| macOS | Put `MemoWork.app` in the `Applications` folder. |

MemoWork also keeps app data, login state, logs, and local settings in your user account. Do not manually edit those files unless a troubleshooting step asks you to.

## 3. First run

1. Open MemoWork from the Start menu on Windows or Applications on macOS.
2. If your system shows a security warning, confirm only if the app came from the project release page.
3. Choose or open the folder you want MemoWork to help with.
4. Follow the setup screen for model access.
5. Ask a small first question, such as: “Summarize the files in this folder.”

Start with a test folder that does not contain sensitive information. After you understand the permission prompts, move to real work folders.

## 4. Xiaomi/MiMo model path

For the beginner path, choose the built-in Xiaomi/MiMo option when MemoWork offers it. Depending on the build and service state, the setup screen may mention MiMo, Xiaomi, MiMo Auto, login, or a similar built-in provider option.

Important notes:

- MemoWork preserves the MiMo-Code Xiaomi/MiMo provider path; it does not create a new model service.
- You may need to sign in or accept service terms from the provider shown in the app.
- Free access, quotas, model names, and availability can change.
- MemoWork being able to connect to a Xiaomi/MiMo path does not make MemoWork an official Xiaomi product.

If you do not have access to that path, check whether the app offers a custom provider option. Beginners should ask a technical helper before entering API keys.

## 5. Safe first task

Try this workflow first:

1. Create a new folder named `MemoWork test`.
2. Put one harmless document or note inside it.
3. Open that folder in MemoWork.
4. Ask MemoWork to summarize it.
5. Ask MemoWork to draft a short checklist based on it.
6. Review the answer yourself before copying it anywhere important.

Avoid your finance, HR, medical, legal, or confidential work folders until you know your organization's data rules.

## Troubleshooting

### Windows says the app is unknown

This can happen with new apps or unsigned pre-release builds. Check that you downloaded it from the project release page. If you are unsure, stop and ask a technical helper.

### macOS says the app cannot be opened

Check that the app came from the project release page. If macOS blocks it, open System Settings, go to Privacy & Security, and look for an option to allow the blocked app. Only allow it if you trust the download.

### MemoWork stays on a loading screen

Close the app and open it again. If that does not help, restart the computer. If it still fails, save a screenshot and include your operating system, MemoWork version, and what you clicked before the issue happened.

### The model login or Xiaomi/MiMo option fails

Check your network first. If you are on a workplace network, a proxy, firewall, or login page may block the connection. Try again later or ask your IT contact. Service availability may also change outside MemoWork.

### MemoWork cannot read or change files

Make sure you opened the correct folder. If the app asks for permission, read the message before approving. On macOS, you may need to grant file access in System Settings. On Windows, protected folders may require extra permission.

### Text looks garbled on Windows

If Chinese, Japanese, or Korean text looks broken, update Windows and try a modern terminal or system language setting. If the problem happens inside MemoWork, report the MemoWork version and a screenshot.

### I entered the wrong account or want to reset setup

Sign out if the app offers a sign-out option. If not, ask a technical helper before deleting app data manually; deleting the wrong folder can remove settings or local history.

## Report a problem

Open an issue at:

- <https://github.com/NeoFantom/mimowork/issues>

Include:

- Windows or macOS version;
- MemoWork version;
- which installer file you used;
- what you expected;
- what happened instead;
- screenshots if they do not show private information.

## Acknowledgements

MemoWork is built from [XiaomiMiMo/MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code), which itself builds on [OpenCode](https://github.com/anomalyco/opencode). MemoWork keeps upstream MIT license notices and does not claim ownership of Xiaomi, MiMo, OpenCode, or related trademarks.
