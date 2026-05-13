# CSS Grid 布局完全指南

CSS Grid 是目前最强大的 CSS 布局系统，让我们深入了解一下。

## 基本概念

Grid 布局由**容器**和**项目**两部分组成：

```
┌─────────────────────┐
│  Grid Container     │
│  ┌─────┐ ┌─────┐   │
│  │Item1│ │Item2│   │
│  └─────┘ └─────┘   │
│  ┌─────┐ ┌─────┐   │
│  │Item3│ │Item4│   │
│  └─────┘ └─────┘   │
└─────────────────────┘
```

## 创建网格容器

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}
```

## 常用属性速查表

| 属性 | 作用 | 示例 |
|------|------|------|
| `grid-template-columns` | 定义列 | `1fr 2fr 1fr` |
| `grid-template-rows` | 定义行 | `auto 200px` |
| `gap` | 间距 | `16px` |
| `grid-column` | 项目跨列 | `1 / 3` |
| `grid-row` | 项目跨行 | `span 2` |

## 实战：响应式卡片布局

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
```

这一行代码就能实现自动换行的响应式卡片布局，**非常强大**！

## Flexbox vs Grid

- **Flexbox**：一维布局，适合行或列方向排列
- **Grid**：二维布局，适合同时控制行和列

两者的关系不是对立的，而是互补的。实际项目中常常结合使用。
