# 高效的 Git 工作流实践

一个好的 Git 工作流能让团队协作事半功倍。

## 分支管理

```
main
  └── develop
       ├── feature/user-auth
       ├── feature/payment
       └── fix/login-bug
```

## 常用分支类型

- **main**：生产环境代码，只接受来自 develop 的合并
- **develop**：开发主分支
- **feature/xxx**：功能分支，从 develop 切出
- **hotfix/xxx**：紧急修复，从 main 切出

## 提交规范

遵循 Conventional Commits：

```bash
feat: 添加用户登录功能
fix: 修复导航栏样式错乱
docs: 更新 API 文档
refactor: 重构数据获取逻辑
```

## 实用命令

```bash
# 交互式暂存
git add -p

# 查看简洁日志
git log --oneline --graph --all

# 暂存当前工作
git stash push -m "WIP: working on login"

# 合并多个 commit
git rebase -i HEAD~3
```

---

规范的 Git 工作流不仅能提高效率，还能让代码历史**清晰可追溯**。
