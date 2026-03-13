# doushen.github.io 个人主页规范

## 1. 项目概述

- **项目名称**: doushen.github.io
- **类型**: 静态个人网站 (GitHub Pages)
- **核心**: 展示个人简介、技能、项目
- **目标用户**: 潜在雇主、合作者、技术爱好者

---

## 2. Bio (个人简介)

```
🏢 20年全栈开发经验 | AIoT/前端创业中 | 嵌入式/Node.js/AI Agent
📍 北京 | 🎯 解决问题
```

字符数: 113 (≤150 ✓)

---

## 3. 置顶项目 (6个)

| # | 项目 | 描述 | 链接 |
|---|------|------|------|
| 1 | 🐝 frontbee-AI | 前端开发者 AI 效率工具套件 | https://github.com/doushen/frontbee-AI |
| 2 | 💬 CommentPulse | B站评论情绪分析浏览器插件 | https://github.com/doushen/CommentPulse |
| 3 | 🤖 claw-langgraph | AI Agent 自动化项目 | https://github.com/doushen/claw-langgraph-project |
| 4 | 📱 cordova-plugin-flutter | Cordova + Flutter 混合开发 | https://github.com/doushen/cordova-plugin-flutter |
| 5 | ⌨️ cordova-plugin-keyboard | Cordova 原生键盘插件 | https://github.com/doushen/cordova-plugin-open-keyboard |
| 6 | 📚 eStudy | 学习管理系统 | https://github.com/doushen/eStudy |

---

## 4. UI/UX 规范

### 布局结构

```
┌─────────────────────────────┐
│           Header            │
│     "Hi, I'm Lynn 👋"       │
│          [Bio]              │
│      [Nav: About|Projects] │
├─────────────────────────────┤
│           About             │
│       个人简介段落           │
├─────────────────────────────┤
│         Top Projects        │
│   [Card][Card][Card]        │
│   [Card][Card][Card]        │
├─────────────────────────────┤
│           Skills            │
│    [Tag][Tag][Tag][Tag]    │
├─────────────────────────────┤
│           Footer            │
│      © @doushen | Email    │
└─────────────────────────────┘
```

### 响应式断点

| 断点 | 宽度 | 布局 |
|------|------|------|
| Mobile | < 540px | 单列 |
| Desktop | ≥ 540px | 双列 |

### 色彩系统 (Rose & Slate)

```css
:root {
  --bg: #0c0c0c;           /* 背景: 近黑 */
  --surface: #181818;       /* 卡片: 深灰 */
  --text: #fafafa;         /* 主文字: 近白 */
  --text-muted: #a1a1aa;   /* 次要文字: 灰 */
  --primary: #f43f5e;       /* 主色: 玫瑰红 */
  --primary-dim: #f43f5e33; /* 主色透明 */
  --border: #27272a;       /* 边框: 暗灰 */
}
```

### 字体

- **标题**: Inter, 700, 2rem
- **正文**: Inter, 400, 0.95rem
- **标签**: Inter, 500, 0.8rem

### 间距

- 容器最大宽度: 720px
- 区块间距: 56px
- 卡片内边距: 18px
- 卡片间距: 12px

### 动效

- **页面加载**: fadeIn 1s ease-out
- **卡片悬停**: border-color 过渡 0.2s
- **链接悬停**: color 过渡 0.2s
- **滚动行为**: 平滑滚动 (scroll-behavior: smooth)

---

## 5. Skills 列表

```
TypeScript, React, Vue, Node.js, Flutter, ESP32, Arduino, AI Agent, Python, Cordova
```

---

## 6. 组件规范

### Header
- 标题: "Hi, I'm Lynn 👋"
- Bio: 三行简介
- 导航: About | Projects | GitHub

### ProjectCard
- 背景: var(--surface)
- 边框: 1px solid var(--border)
- 圆角: 12px
- 悬停: border-color → var(--primary)

### SkillTag
- 背景: var(--surface)
- 圆角: 6px
- 内边距: 8px 14px

### Footer
- 版权 + GitHub 链接 + Email

---

## 7. 验收标准

- [ ] Bio 显示正确 (≤150字符)
- [ ] 6 个置顶项目
- [ ] 移动端单列布局
- [ ] 桌面端双列布局
- [ ] 平滑滚动
- [ ] Card hover 边框高亮
- [ ] fadeIn 入场动画
- [ ] 外部链接正常跳转

---

## 8. 文件

- `index.html` - 主页
- `SPEC.md` - 本规范
