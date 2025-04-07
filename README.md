
⸻

# AI Chatbot 前端项目

这是一个基于 **React + Vite + Tailwind CSS + shadcn/ui** 的前端项目，构建一个 AI 聊天机器人系统的用户交互界面，目前包含登录页面、输入交互等功能。

---

## 🛠️ 技术栈

- ⚛️ React 18
- ⚡ Vite 4
- 🎨 Tailwind CSS
- 💅 shadcn/ui（基于 Radix UI 的现代组件库）
- 🧩 PostCSS / Autoprefixer

---

## 🚀 初始化步骤

### 1. 创建项目（Vite + React 模板）

```bash
npm create vite@latest ai-chatbot-frontend -- --template react
cd ai-chatbot-frontend

或使用 Yarn：

yarn create vite ai-chatbot-frontend --template react
cd ai-chatbot-frontend

2. 安装依赖

yarn



⸻

🎨 配置 Tailwind CSS

安装 Tailwind 所需依赖

yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

修改 tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

修改 src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}



⸻

🧩 添加路径别名支持（可选但推荐）

创建 jsconfig.json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

修改 vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})



⸻

🧪 安装 shadcn/ui 组件库

npx shadcn@latest init

完成初始化后添加组件：

npx shadcn@latest add button input card



⸻

💻 启动项目

yarn dev

默认会在 http://localhost:5173 打开开发服务器。

⸻

✅ 页面预览（登录页）
	•	居中布局
	•	用户名 / 手机号登录切换
	•	Tailwind 美化
	•	shadcn 按钮、输入框组件
	•	响应式适配良好

⸻

📁 项目结构

src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   └── LoginForm.jsx
│   └── ui/   ← shadcn 生成的组件
├── lib/
│   └── utils.js ← shadcn 自动生成



⸻

✨ TODO（后续可拓展）
	•	接入聊天对话功能
	•	接后端登录 API
	•	用户注册/找回密码功能
	•	主题切换（深色/浅色）

⸻

👨‍💻 作者

本项目由 Sunqichao 团队开发。欢迎贡献！

---
