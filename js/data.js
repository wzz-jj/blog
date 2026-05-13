// Embedded posts metadata and markdown content
// No fetch() needed — works with file:// protocol
const POSTS_DATA = [
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
