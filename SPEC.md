# doushen.github.io 重构规范

## 1. 项目概述

- **项目名称**: doushen.github.io 个人主页
- **项目类型**: 静态个人网站
- **核心功能**: 展示个人简介、技能、项目作品集
- **目标用户**: 潜在雇主、合作者、技术爱好者

## 2. UI/UX 规范

### 布局结构

- **Header**: 固定顶部导航（可选）
- **Hero**: 全屏欢迎区，标题 + 副标题 + 导航链接
- **About**: 个人简介区块
- **Projects**: 项目作品网格展示
- **Skills**: 技能标签展示
- **Footer**: 版权信息 + 社交链接

### 响应式断点

- Mobile: < 640px（单列布局）
- Tablet: 640px - 1024px（双列布局）
- Desktop: > 1024px（三列布局）

### 视觉设计

#### 色彩系统

```css
--bg: #0a0a0f;           /* 深色背景 */
--surface: #12121a;      /* 卡片背景 */
--surface-hover: #1a1a25;
--text: #e4e4e7;         /* 主文字 */
--text-secondary: #a1a1aa;
--primary: #60a5fa;      /* 主色调-蓝 */
--accent: #f472b6;       /* 强调色-粉 */
--border: #27272a;
```

#### 字体

- 标题: Inter, 700-800 weight
- 正文: Inter, 400-500 weight
- 字号: 2.5rem (h1), 1.2rem (tagline), 1rem (body)

#### 动效

- fadeInUp 入场动画
- Card hover 上浮 + 边框高亮
- 渐变背景光晕效果

### 组件

1. **Nav**: 导航链接，hover 时变色
2. **HeroSection**: 标题 + 副标题
3. **ProjectCard**: 项目卡片，hover 动效
4. **SkillTag**: 技能标签
5. **SocialLink**: 社交链接按钮

## 3. 功能规范

### 核心功能

1. **导航跳转**: 点击导航平滑滚动到对应区块
2. **项目展示**: 展示 GitHub 代表性项目，带链接
3. **外部链接**: GitHub、B站等社交链接
4. **响应式适配**: 移动端/桌面端自适应

### 用户交互

- Hover 反馈（卡片、链接）
- 平滑滚动
- 页面加载动画

## 4. 技术栈

- 纯 HTML + CSS（无框架）
- 原生 JavaScript（可选）
- GitHub Pages 部署

## 5. 验收标准

- [x] 页面在移动端/桌面端正常显示 (响应式 grid + mobile breakpoint)
- [x] 导航点击可平滑滚动到对应区块 (html scroll-behavior: smooth)
- [x] 项目卡片 hover 有动效 (transform + border-color)
- [x] 页面加载有入场动画 (fadeInUp keyframes)
- [x] 所有外部链接可正常跳转
- [x] Skills 区块已添加
