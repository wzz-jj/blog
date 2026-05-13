// Embedded posts metadata and markdown content
// No fetch() needed — works with file:// protocol
const POSTS_DATA = [
  {
    "id": "free-blog-guide",
    "title": "零基础搭建免费个人博客 — GitHub Pages 全攻略",
    "date": "2026-05-13",
    "category": "教程",
    "tags": ["GitHub", "博客", "教程", "新手"],
    "summary": "手把手教你用 GitHub Pages 搭建免费个人博客，无需服务器，无需域名，30 分钟上线。",
    "content": `# 零基础搭建免费个人博客 — GitHub Pages 全攻略

想拥有一个自己的博客，但不想花钱买服务器？这篇文章教你**完全免费**搭建一个可被搜索引擎收录的个人博客。

## 为什么选 GitHub Pages？

| 对比 | GitHub Pages | 传统方式 |
|------|-------------|----------|
| 费用 | 免费 | 服务器每月 30-100 元 |
| 域名 | 免费 xxx.github.io | 域名每年 50-100 元 |
| 维护 | 无需运维 | 需要维护服务器 |
| HTTPS | 自动提供 | 需要手动配置 |
| 速度 | 全球 CDN | 看服务器配置 |

## 第 1 步：准备一个静态博客

你需要一套 HTML/CSS/JS 文件。可以手写，也可以用现成的静态博客生成器：

- **手写**：最灵活，想怎么改就怎么改
- **Hexo / Hugo**：成熟的博客框架，主题丰富
- **纯 HTML**：零依赖，拖拽式开发

\`\`\`html
<!DOCTYPE html>
<html>
<head><title>我的博客</title></head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
\`\`\`

## 第 2 步：注册 GitHub 账号

打开 https://github.com 注册，记住用户名和密码就行。

## 第 3 步：创建仓库

1. 点击右上角 + → **New repository**
2. 仓库名填 \`blog\`（或你的用户名.github.io）
3. **必须选 Public**（公开，否则无法启用 Pages）
4. 点 Create

## 第 4 步：推送代码

\`\`\`bash
cd 你的博客文件夹
git init
git add -A
git commit -m "first commit"
git remote add origin https://github.com/你的用户名/blog.git
git push -u origin main
\`\`\`

## 第 5 步：开启 Pages

进入仓库 → **Settings** → **Pages** → Branch 选 \`main\` → Save。

**1-2 分钟后**，访问 \`https://你的用户名.github.io/blog/\` 就上线了！

## 第 6 步：让搜索引擎收录

创建两个文件：

**sitemap.xml** — 告诉搜索引擎你有哪些页面
**robots.txt** — 允许搜索引擎抓取

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://你的用户名.github.io/blog/</loc>
  </url>
</urlset>
\`\`\`

然后到 [Google Search Console](https://search.google.com/search-console) 提交你的站点。

## 以后怎么更新？

写完新文章 → 编辑数据文件 → 再 push 一次：

\`\`\`bash
git add -A
git commit -m "新文章"
git push
\`\`\`

一句话总结：**本地写 → git push → 自动更新**。

## 写在最后

这套方案的核心优势是：

> 完全免费 + 自动 HTTPS + 全球 CDN + 搜索可收录

无论你是学生、开发者还是只是想记录一些东西，这都是一个很棒的起点。现在就动手搭建你的第一个博客吧！`
  },
  {
    "id": "hello-world",
    "title": "Hello World — 我的第一篇博客",
    "date": "2026-05-10",
    "category": "随笔",
    "tags": ["生活", "博客"],
    "summary": "这是我的第一篇博客文章，记录开始写作的初心。",
    "content": `# Hello World — 我的第一篇博客

嗨，欢迎来到我的博客！

## 为什么开始写博客？

一直想有一个属于自己的空间来记录学习和思考。在这个信息爆炸的时代，**写作是最有效的思考方式之一**。

> 写作即思考。写得清楚，才能想得清楚。

## 我会写些什么？

- 🛠 **技术笔记**：前端开发、工具使用、踩坑记录
- 📚 **读书笔记**：技术书籍和非技术书籍的读后感
- 💡 **随笔思考**：关于生活和工作的零碎想法

## 关于我

一个热爱编程的开发者，专注于前端技术。喜欢简洁优雅的代码，追求极致的用户体验。

\`\`\`
console.log('Hello, World! 🌍');
\`\`\`

希望这个博客能持续更新下去。我们下篇文章见！`
  },
  {
    "id": "js-tips",
    "title": "10 个实用的 JavaScript 技巧",
    "date": "2026-05-12",
    "category": "技术",
    "tags": ["JavaScript", "前端"],
    "summary": "分享 10 个日常开发中非常实用的 JavaScript 技巧，让你的代码更简洁优雅。",
    "content": `# 10 个实用的 JavaScript 技巧

分享一些日常开发中非常实用的 JavaScript 技巧。

## 1. 解构赋值简化代码

\`\`\`javascript
// Before
const name = user.name;
const age = user.age;

// After
const { name, age } = user;
\`\`\`

## 2. 模板字符串

\`\`\`javascript
const msg = \`Hello, \${name}! You have \${count} new messages.\`;
\`\`\`

## 3. 可选链操作符

\`\`\`javascript
// 安全访问深层嵌套属性
const city = user?.address?.city ?? 'Unknown';
\`\`\`

## 4. 数组去重

\`\`\`javascript
const unique = [...new Set([1, 2, 2, 3, 3, 4])];
// [1, 2, 3, 4]
\`\`\`

## 5. 短路求值

\`\`\`javascript
// 设置默认值
const name = input || 'Anonymous';

// 条件执行
isReady && doSomething();
\`\`\`

## 6. 对象简写

\`\`\`javascript
const name = 'Alice', age = 25;
const user = { name, age }; // { name: 'Alice', age: 25 }
\`\`\`

## 7. Promise.all 并发请求

\`\`\`javascript
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json())
]);
\`\`\`

## 8. 数组方法链式调用

\`\`\`javascript
const total = items
  .filter(item => item.active)
  .map(item => item.price)
  .reduce((sum, price) => sum + price, 0);
\`\`\`

## 9. 动态属性名

\`\`\`javascript
const key = 'status';
const obj = { [key]: 'active' }; // { status: 'active' }
\`\`\`

## 10. Nullish 合并运算符

\`\`\`javascript
// ?? 只对 null/undefined 生效，区别于 ||
const count = data.count ?? 0;
\`\`\`

---

掌握这些小技巧，可以让你的代码更加**简洁优雅**。记得在合适的场景使用它们！`
  },
  {
    "id": "css-grid",
    "title": "CSS Grid 布局完全指南",
    "date": "2026-05-13",
    "category": "技术",
    "tags": ["CSS", "前端", "布局"],
    "summary": "深入理解 CSS Grid 布局，从基础概念到实战案例，掌握现代网页布局。",
    "content": `# CSS Grid 布局完全指南

CSS Grid 是目前最强大的 CSS 布局系统，让我们深入了解一下。

## 基本概念

Grid 布局由**容器**和**项目**两部分组成：

\`\`\`
┌─────────────────────┐
│  Grid Container     │
│  ┌─────┐ ┌─────┐   │
│  │Item1│ │Item2│   │
│  └─────┘ └─────┘   │
│  ┌─────┐ ┌─────┐   │
│  │Item3│ │Item4│   │
│  └─────┘ └─────┘   │
└─────────────────────┘
\`\`\`

## 创建网格容器

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}
\`\`\`

## 常用属性速查表

| 属性 | 作用 | 示例 |
|------|------|------|
| \`grid-template-columns\` | 定义列 | \`1fr 2fr 1fr\` |
| \`grid-template-rows\` | 定义行 | \`auto 200px\` |
| \`gap\` | 间距 | \`16px\` |
| \`grid-column\` | 项目跨列 | \`1 / 3\` |
| \`grid-row\` | 项目跨行 | \`span 2\` |

## 实战：响应式卡片布局

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
\`\`\`

这一行代码就能实现自动换行的响应式卡片布局，**非常强大**！

## Flexbox vs Grid

- **Flexbox**：一维布局，适合行或列方向排列
- **Grid**：二维布局，适合同时控制行和列

两者的关系不是对立的，而是互补的。实际项目中常常结合使用。`
  },
  {
    "id": "git-workflow",
    "title": "高效的 Git 工作流实践",
    "date": "2026-04-28",
    "category": "工具",
    "tags": ["Git", "效率", "协作"],
    "summary": "介绍团队协作中常用的 Git 工作流，帮助你高效管理代码版本。",
    "content": `# 高效的 Git 工作流实践

一个好的 Git 工作流能让团队协作事半功倍。

## 分支管理

\`\`\`
main
  └── develop
       ├── feature/user-auth
       ├── feature/payment
       └── fix/login-bug
\`\`\`

## 常用分支类型

- **main**：生产环境代码，只接受来自 develop 的合并
- **develop**：开发主分支
- **feature/xxx**：功能分支，从 develop 切出
- **hotfix/xxx**：紧急修复，从 main 切出

## 提交规范

遵循 Conventional Commits：

\`\`\`bash
feat: 添加用户登录功能
fix: 修复导航栏样式错乱
docs: 更新 API 文档
refactor: 重构数据获取逻辑
\`\`\`

## 实用命令

\`\`\`bash
# 交互式暂存
git add -p

# 查看简洁日志
git log --oneline --graph --all

# 暂存当前工作
git stash push -m "WIP: working on login"

# 合并多个 commit
git rebase -i HEAD~3
\`\`\`

---

规范的 Git 工作流不仅能提高效率，还能让代码历史**清晰可追溯**。`
  }
];
