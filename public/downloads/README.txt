扎一扎 / Pin a Wish — macOS 源码试用包 v0.2.0
================================================

中文
这是可运行的本机试用包，尚未签名/公证，也不包含 Node.js 或 Chrome。
要求：macOS、Node.js 22.13+、Google Chrome、首次安装时可联网。
本轮仅在开发者的 Apple Silicon Mac 上验证。工具界面目前为中文。

1. 将 ZIP 解压到可写目录；整个文件夹一起保留。
2. 安装 Node.js：https://nodejs.org/en/download 和 Google Chrome。
3. 双击 Start.command。首次会运行 npm ci 安装固定版本依赖，再打开 localhost:4317。
   若 macOS 阻止打开，请先查看脚本内容，按系统界面允许该文件；不要全局关闭安全检查。
   或在终端进入文件夹后运行：zsh Start.command
4. 在“首次使用引导”中设置目的地、手动登录两端、选择收藏夹、读取小批量。
5. 自动图文识别需将 .env.example 复制为 .env，再填写自己的 OPENAI_API_KEY；会按 API 用量收费。
   未配置也可手动录入地点。修改后用 Stop.command 停止，再运行 Start.command。
6. 核对原文、图片和地图名称/地址/分店，再确认位置。勾选并批准后才会保存到 Google Maps。
7. 不确定的地点留到“稍后核对”；保存未知结果不要反复点击。保存后工具会重新加载复核。
8. 停止服务：确认后台空闲、没有正在保存任务后，双击 Stop.command。电脑重启后需再启动。

数据存放在本目录 data/，API 密钥在 .env；不要分享它们或浏览器 profiles。
网站不会接收这些数据。自动识别将所选笔记正文与图片发送给 API 服务。
工具仅监听本机，不支持直接用手机访问控制台；同账号手机可查看 Google Maps 收藏。
网页自动化会受平台页面变化、验证、网络和休眠影响。持续多日和新用户安装尚待验证。
不需要把正在使用的工具目录替换掉；新目录使用自己的 data/，同时只运行一个实例。
反馈：ruoyang.zhang@yale.edu

English
This is a runnable local source preview, not a signed or notarized desktop installer.
Requirements: macOS, Node.js 22.13+, Google Chrome, and internet for the first dependency install.
Validated on the developer's Apple Silicon Mac only. The tool's UI is currently in Chinese.

1. Unzip into a writable folder and keep the whole folder together.
2. Install Node.js from https://nodejs.org/en/download and Google Chrome.
3. Open Start.command. The first run installs pinned dependencies with npm ci, then opens localhost:4317.
   If macOS blocks the script, inspect it and use the system's per-file controls. Do not disable security globally.
   Alternatively, open Terminal in this folder and run: zsh Start.command
4. Use onboarding to choose a destination, sign in manually, select a collection, and read a small batch.
5. For image/text extraction, copy .env.example to .env and set your own OPENAI_API_KEY. API usage is billed
   by the provider. Manual place entry works without an API key. Stop and restart after configuration changes.
6. Compare the source text/image with the map name, address and branch. Confirm, then select places to save.
7. Leave uncertain places for later review. Do not repeatedly click Save when the outcome is unknown.
8. When the queue is idle, use Stop.command to stop the local service. Start it again after rebooting.

Local records and browser sessions live in data/; API keys live in .env. Never share these files.
The website does not receive your notes or sessions. Extraction sends selected text/images to the API provider.
The tool listens on localhost only. Phone access to the console is not supported; Google Maps lists are viewable
on a phone signed in to the same Google account. Keep the computer awake during operations.
Long-running stability and installation by new users remain to be validated. Run only one instance at a time.
Feedback: ruoyang.zhang@yale.edu
