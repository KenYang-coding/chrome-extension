# gptbots-chrome-extension
[English](./README.md) | 中文

一个基于浏览器插件技术的AI客服助手。
基于LINE WEB后台可提供自动回复用户消息，接收人工服务请求提醒等功能。后续将陆续支持Telegram、WhatsApp等更多平台。

<img src="./gptbots-assistant-zh.png" width="300" />

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

## 开发
1. 需要先在浏览器先把插件导入到浏览器中，直接导这个chrome文件夹
2. 需要先在插件的设置里先设置集成的GPTBots API KEY，对应环境下的集成api（可以直接使用stg或者生产的集成API）
3. 其次直接构建项目 pnpm run build:prod
4. 打开插件，即可以在对应的官方账号上查看对应页面

## 插件打包
执行构建命令后，

在`bash`环境下，终端执行`npm run zip:chrome`创建`zip`压缩文件，生成如：`gptbots-assistant-06171839.zip`，给到测试
> 或者手动把`chrome`文件夹压缩成`zip`

- 开发打包
```
npm run build:dev
```

- 生产环境打包
```
npm run build:prod
```

## 插件存储
使用`chrome.storage.local`存储数据
