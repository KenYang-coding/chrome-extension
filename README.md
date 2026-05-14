# gptbots-chrome-extension
English | [中文](./README-zh.md)

An AI customer service assistant based on browser extension technology.
Based on the LINE WEB backend, it provides features such as automatic replies to user messages and notifications for manual service requests. Support for more platforms like Telegram and WhatsApp will be gradually introduced in the future.

<img src="./gptbots-assistant-en.png" width="300" />

## Setup
Rsbuild project

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Development
1. First, import the extension into your browser by loading the chrome folder directly
2. Configure the GPTBots API KEY in the extension settings, using the integration API for the corresponding environment (you can use staging or production integration API)
3. Build the project: `pnpm run build:prod`
4. Open the extension to view the corresponding page on the official account

## Extension Packaging
After executing the build command:

In a `bash` environment, run `npm run zip:chrome` in terminal to create a `zip` file, generating something like: `gptbots-assistant-06171839.zip` for testing
> Or manually compress the `chrome` folder into a `zip` file

- Development packaging
```
npm run build:dev
```

- Production environment packaging
```
npm run build:prod
```
## Extension Storage
Uses `chrome.storage.local` for data storage
