# Git 工作流程 / Git Workflow

## 当前状态

✅ Git 仓库已初始化
✅ 主分支: `main`
✅ 初始提交已完成 (dadd08d)
✅ 工作目录干净

---

## 基本 Git 命令

### 查看状态
```bash
git status              # 查看当前状态
git log --oneline       # 查看提交历史
git log --graph --all   # 查看分支图
```

### 提交更改
```bash
# 1. 查看修改
git status
git diff

# 2. 暂存文件
git add .               # 添加所有文件
git add <file>          # 添加特定文件

# 3. 提交
git commit -m "描述信息"

# 4. 查看提交结果
git log --oneline -1
```

### 推荐的提交信息格式
```
简短描述（50字符内）

详细说明：
- 更改的内容
- 原因
- 影响范围

测试状态：
✓ TypeScript 检查通过
✓ ESLint 检查通过
✓ 构建成功
```

---

## 标准工作流程

### 开发新功能

```bash
# 1. 创建新分支
git checkout -b feature/feature-name

# 2. 进行开发工作
# ... 编辑文件 ...

# 3. 测试
npm run type-check
npm run lint
npm run build

# 4. 提交（测试通过后）
git add .
git commit -m "feat: 添加新功能描述"

# 5. 切回主分支
git checkout main

# 6. 合并功能分支
git merge feature/feature-name

# 7. 删除功能分支（可选）
git branch -d feature/feature-name
```

### 修复 Bug

```bash
# 1. 创建修复分支
git checkout -b fix/bug-description

# 2. 修复问题
# ... 编辑文件 ...

# 3. 测试
npm run type-check
npm run lint
npm run build

# 4. 提交
git add .
git commit -m "fix: 修复问题描述"

# 5. 合并回主分支
git checkout main
git merge fix/bug-description

# 6. 删除修复分支
git branch -d fix/bug-description
```

### 日常更新

```bash
# 每次修改后
git add .
npm run type-check && npm run lint && npm run build && git commit -m "描述更改内容"
```

---

## 提交类型约定

使用约定式提交（Conventional Commits）：

- `feat:` - 新功能
- `fix:` - Bug 修复
- `docs:` - 文档更新
- `style:` - 代码格式（不影响功能）
- `refactor:` - 代码重构
- `perf:` - 性能优化
- `test:` - 测试相关
- `chore:` - 构建/工具相关

示例：
```bash
git commit -m "feat: 添加用户登录功能"
git commit -m "fix: 修复导航栏在移动端的显示问题"
git commit -m "docs: 更新 README 部署说明"
git commit -m "style: 统一代码缩进格式"
```

---

## 远程仓库操作

### 连接到 GitHub/GitLab

```bash
# 添加远程仓库
git remote add origin <repository-url>

# 查看远程仓库
git remote -v

# 首次推送
git push -u origin main

# 后续推送
git push
```

### 从远程拉取

```bash
# 拉取并合并
git pull

# 仅拉取（不合并）
git fetch
```

---

## 分支管理

### 查看分支

```bash
git branch              # 本地分支
git branch -a           # 所有分支
git branch -r           # 远程分支
```

### 创建和切换分支

```bash
git branch <branch-name>        # 创建分支
git checkout <branch-name>      # 切换分支
git checkout -b <branch-name>   # 创建并切换
```

### 删除分支

```bash
git branch -d <branch-name>     # 删除已合并的分支
git branch -D <branch-name>     # 强制删除分支
```

---

## 撤销操作

### 撤销未暂存的修改

```bash
git checkout -- <file>          # 撤销单个文件
git checkout -- .               # 撤销所有文件
```

### 撤销已暂存的修改

```bash
git reset HEAD <file>           # 取消暂存单个文件
git reset HEAD .                # 取消暂存所有文件
```

### 撤销提交

```bash
# 撤销最后一次提交（保留更改）
git reset --soft HEAD~1

# 撤销最后一次提交（丢弃更改）
git reset --hard HEAD~1

# 修改最后一次提交
git commit --amend
```

---

## 自动化工作流

### 提交前检查脚本

创建 `pre-commit.sh`:
```bash
#!/bin/bash
echo "Running pre-commit checks..."
npm run type-check && npm run lint && npm run build
if [ $? -eq 0 ]; then
    echo "✓ All checks passed"
    exit 0
else
    echo "✗ Checks failed. Please fix errors before committing."
    exit 1
fi
```

### 一键提交命令

```bash
# 创建别名
git config --global alias.quick '!f() { git add . && npm run type-check && npm run lint && npm run build && git commit -m "$1"; }; f'

# 使用
git quick "feat: 添加新功能"
```

---

## 最佳实践

### ✅ 推荐做法

1. **频繁提交**: 小步快跑，每完成一个小功能就提交
2. **有意义的提交信息**: 清晰描述做了什么改动
3. **测试后再提交**: 确保 type-check、lint、build 都通过
4. **使用分支**: 开发新功能时创建独立分支
5. **保持主分支稳定**: main 分支应该始终可部署

### ❌ 避免的做法

1. ~~不要提交 node_modules~~
2. ~~不要提交 .env 文件~~
3. ~~不要提交未测试的代码~~
4. ~~不要用 "update" 之类的模糊提交信息~~
5. ~~不要在 main 分支上直接开发大功能~~

---

## Git 忽略文件

已配置的 `.gitignore`:
```
# Dependencies
/node_modules

# Next.js
/.next/
/out/

# Production
/build

# Local env files
.env*.local

# Debug logs
npm-debug.log*
yarn-debug.log*

# Misc
.DS_Store
*.pem
```

---

## 常见问题

### Q: 如何查看某个文件的修改历史？
```bash
git log --follow <file>
git log -p <file>
```

### Q: 如何恢复误删的文件？
```bash
git checkout HEAD <file>
```

### Q: 如何比较两个提交的差异？
```bash
git diff <commit1> <commit2>
```

### Q: 如何查看某次提交的详细信息？
```bash
git show <commit-hash>
```

---

## 紧急情况处理

### 误提交了敏感信息

```bash
# 1. 立即从历史中移除
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch <file>" \
  --prune-empty --tag-name-filter cat -- --all

# 2. 强制推送（如果已推送到远程）
git push origin --force --all
```

### 合并冲突

```bash
# 1. 查看冲突文件
git status

# 2. 手动解决冲突
# 编辑文件，移除冲突标记

# 3. 标记为已解决
git add <file>

# 4. 完成合并
git commit
```

---

## 项目特定建议

### 本项目的提交流程

```bash
# 完整的提交流程
git status                      # 检查状态
git diff                        # 查看修改
git add .                       # 暂存所有更改
npm run type-check              # TypeScript 检查
npm run lint                    # ESLint 检查
npm run build                   # 构建测试
git commit -m "类型: 描述"      # 提交
git log --oneline -1            # 确认提交
```

### 部署前检查清单

- [ ] 所有测试通过
- [ ] 代码已提交到 git
- [ ] 提交信息清晰
- [ ] 没有未暂存的更改
- [ ] main 分支是最新的
- [ ] 环境变量已配置

---

*最后更新: 2024-10-10*
