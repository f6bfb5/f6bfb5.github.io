---
title: "前端筆記 (4) Git"
date: 2019-07-18T07:11:59.000Z
published: 2019-07-18T07:11:59.000Z
author: f6bfb5
summary:
layout: blog
---

## 平台服務

- [GitHub](https://github.com/)
- [GitLab](https://gitlab.com/)
- [Heroku](https://dashboard.heroku.com/apps)

## 指令速見表

- [Git でよく使われるコマンドにイラストによる説明を加えて 1 枚のチートシートにまとめてみた](https://qiita.com/kozzy/items/b42ba59a8bac190a16ab)
- [Git Cheatsheet Cht](http://scars377.github.io/git-cheatsheet-cht/)

## Git 簡介

- Git 是由 Linus Torvalds 為了管理 Linux 原始碼所寫的分散式版控系統
- 有三種檔案區域，並透過指令將檔案移至不同的區域
  <br>│ 1. 「工作目錄（Working Directory）」
  <br>│ 2. 「暫存區（Staging Area）」
  <br>└ 3. 「儲存庫（Repository）」
- 有四種 File State 檔案狀態
  <br>│ 1. `Untracked` 新增檔案
  <br>│ 2. `New`: 加入暫存區後
  <br>│ 3. `Modified`: 修改後
  <br>└ 4. `Deleted`: 刪除後

## 工具安裝

- [Git Client](git-scm.com/downloads)
- [Mac](https://pepese.github.io/blog/mac-dev-environment/)
- [Git 使うのに便利な CLI ツール](https://qiita.com/ryuichi1208/items/45fd2cdd865097a7ad3d)
- [gitignore.io - Create Useful .gitignore Files For Your Project](https://www.gitignore.io/)

### VSCode 插件

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
- [Github Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore)
- [Git Project Manager](https://marketplace.visualstudio.com/items?itemName=felipecaputo.git-project-manager)

## 指令

### 初始

1. `git init`：建立 local repository，在該工作目錄建立 `.git` 資料夾，開始使用 Git 做版控
2. `git config`：建構 Git 相關設定
   <br>├ `--local` 參數套用於單獨 project 上時會優於 `--global`
   <br>├ `git config --global user.name ""`：設定使用者名稱
   <br>│ `git config --global user.email ""`：設定使用者帳號
   <br>└`git config --global -l`：查看目前的設定內容，亦可參照根目錄底下的 `.gitconfig` 檔
3. `git remote`：查看／註冊遠端數據庫 remote repository 的設定
   <br>├ `git remote -v`：顯示遠端 repo 連結
   <br>├ `git remote add [remote_name] [git_url]`：新增遠端 repo
   <br>│ ex. `git remote add origin http://github.com/f6bfb5/Sample.git`
   <br>│ `origin`、`upstream` 皆為常見的遠端數據庫名稱別名，亦可更改為其它遠端數據庫名稱
   <br>│ 即 `origin/master` 就是 Remote Repository 的 master 分支
   <br>├ `git remote set-url origin git://new.url.here`：修改 remote 位置
   <br>├ `git remote remove origin`：刪除 remote
   <br>├ `git push -u origin master`：更新資料至遠端 master 分支
   <br>└ `-u` 等同於 `--set-upstream`，意為將此遠端數據庫服務設為追蹤指定的遠端分支

### 設定

1. `git config`：建構 Git 相關設定
   <br>├ `git config --global http.proxy http://[FQDN]:[PORT]`：proxy 設定
   <br>│ `git config --global https.proxy http://proxy.example.com:8080`
   <br>│ `git config --global http.proxy http://[ID]:[Password]@[FQDN]:[PORT]`
   <br>│ `git config --global https.proxy http://[ID]:[Password]@[FQDN]:[PORT]`
   <br>│ `git config --global url."https://".insteadOf git://`
   <br>├ `git config --global core.autocrlf false`：將 Windows 環境的換行代碼轉換為 CR+LF
   <br>├ `git config --global alias.[alias_command] [git_command]`：設定指令快捷
   <br>│ ex: `git config --global alias.co checkout`
   <br>│ co=checkout, br=branch, ci=commit, st=status
   <br>│ 若想執行外部指令，而非 git 底下的指令時，需要在指令的開頭加上 `!` 字元
   <br>│ ex. `git config --global alias.visual '!gitk'`
   <br>├ [Git productivity with aliasing and multiple commands](https://bardoloi.com/blog/2015/10/29/git-aliases/)
   <br>└ [[git] gitconfig で会社用アカウントと個人用アカウントを楽に使い分けする](https://qiita.com/SugarShootingStar/items/64f239f89d25a3b9f520)

### 提交

1. `git add`：將 Working Repository 的檔案變更儲存至 Staging Area
   <br>├ `git add .`：將該目錄及其子目錄下所有異動放入暫存區
   <br>├ `git add --all`：將整個 Git 版控範圍異動放入暫存區
2. `git commit`：將檔案從 Staging Area（暫存區） commit 到 Local Repository（本地儲存庫）
   <br>│ 需要使用 `-m` 參數記述備註，並會分配一個 commit ID
   <br>│ `git commit -m "Commit 說明"`
   <br>├ `git commit --amend -m "修改後的 Commit 訊息"`：修改最後一次 Commit 訊息（實則是撤掉前一次 Commit 重發一次，SHA1 不同）
   <br>├ `git commit -am "commit message"`：commit 已跟蹤過的文件
3. `git push`：將 Local Repository 本地儲存庫的異動 commit 到 Remote Repository 遠端儲存庫
   <br>└ `git push origin master`
4. `git rm [filename] --cached`：將檔案轉為 untracked，即 stop tracking

### 狀態

1. `git status`：查看目前的變更狀態
   <br>├ `Untracked files:` 不存在 Local Repository 和 Staging Area，只存在 Working Directory 裡的檔案
   <br>├ `Changes not staged for commit:` 之前已存在於 Local Repository 和 Staging Area 裡的檔案
   <br>└ `Changes to be commited`
2. `git diff [file_name]`：比較 Staging Area 和 Local Repository 的檔案內容差異
   <br>│ `git diff [branch_name] [branch_name]`：比較兩者 branch 之間的差異
   <br>└ `git diff master origin/master`
3. `git log`：檢視提交歷史紀錄，從上至下由新到舊
   <br>│ `git log --all --decorate --oneline --graph`：圖形化展示歷史紀錄
   <br>└ `git config --global alias.dog log --all --decorate --oneline --graph`
4. `git reflog`：檢視詳細提交紀錄（查看 reset 歷程，找到被拆掉的 commit）
5. `git show [commit_id]`：檢視提交紀錄內容

### 分支

1. `git branch`：顯示分支一覽，當前分支的前方會有 `*`
   <br>│ `git branch [branch_name]`：建立新的分支
   <br>├ `git branch -d [branch_name]`：刪除本地端的分支
   <br>├ `git branch -r`：查看遠端 repo 的分支
   <br>├ `git branch -a`：查看所有分支
   <br>└ `git branch [branch_name]/[revision]`：切換至指定分支的特定版本
2. `git push origin :[branch_name]`：刪除遠端的分支
   <br>└ ※在欲刪除的遠端分支名稱前有個 `:`、所使用的是 `push`
3. `git checkout [branch_name]`：切換至指定的分支
   <br>├ Working Directory 也會變更成指定的分支狀態
   <br>├ `git checkout -b [branch_name]`：建立新的分支，並切換至該分支
   <br>├ `git checkout [branch_name] .`：將當前分支的所有檔案複製至指定分支
   <br>└ ※在最後方有一個 `.`
4. `git stash [save ['message]]`：暫時儲存目前變更的內容，但不進行 commit
   <br>├ 預設省略 `save`，亦可加上以註記 `stash` 的內容為何
   <br>│ 通常用於需跳至其他 branch 時
   <br>├ `git stash apply [stash@{n}]`
   <br>├ `git stash pop [stash@{n}]`：復原保存於 `stash` 的作業內容
   <br>│ 可於參數指定想回復何次的 `stash`，省略時預設為最新的 `stash@{0}`
   <br>│ `apply` 復原後不會取消 `stash`，`pop` 復原後會取消 `stash`
   <br>├ `git stash show [stash@{n}]`：顯示指定的 `stash` 內容
   <br>├ `git stash list`：顯示目前儲存的 `stash` 一覽
   <br>├ `git stash drop [stash@{n}]`：刪除指定的 `stash`
   <br>└ `git stash clear`：刪除所有 `stash`

### 合併

1. `git clone [git_url]`：複製 `遠端 repo` 至本地端
   <br>├ `git clone --mirror`
   <br>├ `cd C:\Git\GitHub`
   <br>└ `git clone https://github.com/f6bfb5/Sample.git`：clone 遠端工作目錄至本地端
2. `git fetch`：將 `遠端 repo` 的最新變更加入至 `本地 repo`
3. `git merge [branch_name]`：將 `指定分支` 的檔案修改合併至 `當前分支`
   <br>├ 合併兩個分支操作，紀錄兩者之間的實際操作
   <br>├ 預設時使用 `fast-forward` 方式合併，不會產生新的 commit
   <br>│ `git merge [branch] --no-ff`：合併時產生新的 commit，用以確保主要分支線圖乾淨
   <br>│ `git merge [branch] --squash`：合併後僅保留一次 commit 紀錄
   <br>├ `git merge [remote_resository]/[branch_name]`
   <br>│ 將從 `git fetch` 取得的 Remote Repository 的變更
   <br>└ 反應至 Local Repository 裡目前的 branch
4. `git rebase [target_branch]`
   <br>├ 複製當前分支做的修改，到目標分支的最後一次提交上面
   <br>│ 會將指定分支的歷史紀錄併進 master 的線圖上，用以確保整體分支線圖乾淨
   <br>├ 即把當前 branch 的 HEAD 修改為指定 branch 的（無參數的情況下）最後一個 commit
   <br>└ 由於這個動作過程會再做一次 commit，也會改變目標分支的 commit id，需謹慎使用
   - [git merge 與 rebase 的觀念與實務應用](https://www.slideshare.net/WillHuangTW/git-merge-rebase)
   - [rebase をちゃんと理解して使えるようになろう！ - Qiita](https://qiita.com/shira-shun/items/29c7f36179117022cb6d)
5. `git cherry-pick [commit_id]`
   <br>└ 任意挑選一個或多個 commit 套用到目前 branch 的最新版本上
6. `git pull`
   <br>├ 取得來自 Remote Repository 的變更
   <br>└ 等同 `git fetch` + `git merge origin/master`

#### 衝突

- `git mergetool`：開啟編輯工具，介面左邊為當前分支，右邊為目標分支，中間為原始檔案

### 撤銷

1. `git clean`
2. `git rm [file_name]`
3. `git commit --amend -m "commit message"`：撤掉前一次 commit 重發一次，SHA1 會不同
   <br>└ `git commit --amend --no-edit`：沿用原 commit 訊息
4. `git reset [commit_id]`：完全撤銷修改至某次 commit
   <br>│ 若省略 `[commit_id]` 則會自動指定為 `HEAD`
   <br>├ `git reset --hard HEAD^`：還原至前個版本
   <br>│ `^` 代表前一個版本，`~5` 則代表 5 個之前的版本
   <br>│ `--soft`：保留暫存區和工作區的檔案
   <br>│ `--mixed`：捨棄所有暫存區的檔案，但不影響工作區的檔案
   <br>└ `--hard`：捨棄暫存區和工作區的檔案
5. `git revert [commit_id]`：撤銷某次 commit，但保留此次之前和之後的 commit 與紀錄
   <br>└ 並且此次撤銷會作為一次最新的 commit

## 不想版控的項目

建立／編輯 `.gitignore` 檔案列舉排除不要納入版控的路徑（支援萬用字元 `*`）

```.gitignore
# 不加入副檔名為 .exe 的檔案
*.exe
# 不加入 .settings 資料夾與其中的檔案
.settings/
# 不加入 Bin/bin 資料夾與其中的檔案
[Bb]in/
# 不加入特定資料夾裡的特定副檔名檔案
out/*.log

*.sh
```

在修改 .gitignore 前就加入的項目可用 `git rm --cached` 清除，
或用 `git clean -fx` 一口氣清理所有應忽略的檔案

## Pull Request（PR）

- 和 `fork` 同樣是 Github／Bitbucket 上的整合功能
  <br>├ 不同於 `clone` 是將 `遠端repo` 複製至本地端
  <br>├ `fork` 指的是將 `他人的遠端repo` 複製至 `自己的遠端repo`
  <br>└ 以便做出個人版本的內容修改
- 指發出請求他人 `merge` 自己 `fork` 後做的相關修改內容
- 過程為：
  <br>├ 1. `fork` 專案到自己帳號
  <br>├ 2. `clone` 到本地修改
  <br>├ 3. `push` 回自己帳號專案
  <br>├ 4. 發出 PR 給原作者
  <br>└ 5. 原作者收下 PR
- [與其它開發者的互動 - 使用 Pull Request（PR） - 為你自己學 Git | 高見龍](https://gitbook.tw/chapters/github/pull-request.html)

## 使用 SSH 登入

1. `ssh-keygen -t rsa -C "[email]"`／`ssh-keygen -t rsa -b 4096 -c "[email]"`：產生 SSH key
2. `eval "$(ssh-agent -s)"`：在後台開啟 SSH agent
3. `ssh-add -K ~/.ssh/id_rsa`
4. `cat /Users/[user_name]/.ssh/id_rsa.pub`：檢視公鑰
5. 以 GitHub 為例，至 [SSH and GPG keys](https://github.com/settings/keys) 點擊 `New SSH key`，將方才的公鑰貼上

## Branch Model

### git-flow

- 由 Driessen 所[發表](http://keijinsonyaban.blogspot.com/2010/10/a-successful-git-branching-model.html)的一種 git 開發手法，亦或指遵循這套手法所開發的工具
- 將專案分為 5 種分支：`master`、`develop`、`release`、`feature`、`hotfix`
- 主要分支：`master`、`develop`
  <br>├ `master` 分支：品質穩定保證可上線的產品主線，多會加上版號 `release/1.0`
  <br>│ 從 `release` 分支 merge 而來，不可於此分支直接進行作業或 commit
  <br>├ `develop` 分支：最新進度的開發主線
  <br>└ 自 `master` 分支而來，`feature` 由此分支出去，改好再 merge 進來
- 輔助分支：`feature`、`release`、`hotfix`
  <br>├ `release` 分支：開發進度成熟時，分支到 `release` 做上線前的最後測試
  <br>│ 測試沒問題後 merge 至 `master` 及 `develop`，merge 完畢後會刪除該 `release` 分支
  <br>├ `feature` 分支：進行功能追加或修正作業用的分支，自 `develop` 分支而來，
  <br>│ 通常會將實作功能寫在 `feature/` 的後方明確化內容，例如 `feature/news_feed`
  <br>│ 作業完成後再 merge（可再加上 [`--no-ff`](https://medium.com/@fcamel/%E4%BD%95%E6%99%82%E8%A9%B2%E7%94%A8-git-merge-no-ff-d765c3a6bef5) option 明確化結構）回 `develop` 分支
  <br>└ `Hotfix` 分支：緊急修正內容用，從 `master` 分支出來，改完合併回 `master` 及 `develop`

#### 相關文章

- [Git Workflows and Tutorials](https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md)
- [Git 怎麼這麼難用？Git Flow + 好習慣 = 不再苦惱](https://medium.com/kuma%E8%80%81%E5%B8%AB%E7%9A%84%E8%BB%9F%E9%AB%94%E5%B7%A5%E7%A8%8B%E6%95%99%E5%AE%A4/%E5%9F%BA%E7%A4%8E-git-flow-%E5%B7%A5%E4%BD%9C%E6%B3%95-fa50b1dddc4f)
- [git flow 實戰經驗談 part1 - 別再讓 gitflow 拖累團隊的開發速度](https://blog.hellojcc.tw/2017/12/14/the-flaw-of-git-flow/)
- [git-flow 図解 - Qiita](https://qiita.com/ohnaka0410/items/7c7fa20710dfd72b7d7a)

### GitHub Flow

- 簡略化過後的 Branch Model
- 將專案分為 2 種分支：`master`、`topic`
- `master` 分支：品質穩定保證可上線的產品主線，等同於 git-flow 中的 `master` + `develop`
  <br>└ 不可於此分支直接進行作業或 commit
- `topic` 分支：進行功能追加或修正作業用的分支，自 `master` 唯一分支出來的 branch
  <br>├ 等同於 git-flow 中的 `feature` + `hotfix`
  <br>└ merge 回 `master` 後會刪除該 `topic` 分支

## commit message

- 風格：Markup syntax、wrap margins、文法、大寫習慣、符號慣例
- 內容：**需要**的資訊
- Metadata：可參照的 issue tracking IDs、pull request 號碼

### 七條規則

1. 用一行空白分隔標題與內容
2. 限制標題最多只有 50 字元
3. 標題開頭要大寫
4. 標題不以句點結尾
5. 以祈使句撰寫標題
6. 內文每行最多 72 字
7. 用內文解釋 what 以及 why vs. how

### template

```
Header: <type>(<scope>): <subject>
 - type: 代表 commit 的類別：feat, fix, docs, style, refactor, test, chore，必要欄位
 - scope 代表 commit 影響的範圍，例如資料庫、控制層、模板層等等，視專案不同決定，可選欄位
 - subject 代表此 commit 的簡短描述，不要超過 50 個字元，結尾不要加句號，必要欄位

Body: 72-character wrapped. This should answer:
 - Body 部份是對本次 Commit 的詳細描述，可以分成多行，每一行不要超過 72 個字元
 - 說明程式碼變動的項目與原因，還有與先前行為的對比

Footer:
 - 填寫任務編號（如果有的話）.
 - BREAKING CHANGE（可忽略），記錄不兼容的變動，
   以 BREAKING CHANGE: 開頭，後面是對變動的描述、以及變動原因和遷移方法
```

#### type

- Feat: 新增／修改功能（feature）
- Fix: 修補 bug（bug fix）
- Docs: 文件（documentation）
- Style: 格式（不影響程式碼運行的變動 white-space, formatting, missing semt colons, etc）
- Refactor: 重構（非新增功能，亦不是修補 bug 的程式碼變動）
- Perf: 改善效能（A code change that improves performance）
- Test: 增加測試（Adding missing tests or correcting existing tests）
- chore: 程式建構或輔助工具變動（maintain）
- revert: 撤銷回覆先前的 commit，例如：`revert: type(scope): subject (回覆版本:xxxx)`

### 工具

- [commitizen/cz-cli: The commitizen command line utility.](https://github.com/commitizen/cz-cli)
- `yarn global add commitizen` or `npm install -g commitizen`

### 文章

- [Write your commit messages in the right way - Kai Hao - Medium](https://medium.com/@kevin940726/write-your-commit-messages-in-the-right-way-65c8e1dfc8a3)
- [如何寫一個 Git Commit Message](https://blog.louie.lu/2017/03/21/%E5%A6%82%E4%BD%95%E5%AF%AB%E4%B8%80%E5%80%8B-git-commit-message/)
- [Git Commit Message 這樣寫會更好，替專案引入規範與範例](https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html)
- [撰寫有效的 Git Commit Message](http://blog.fourdesire.com/2018/07/03/%E6%92%B0%E5%AF%AB%E6%9C%89%E6%95%88%E7%9A%84-git-commit-message/)
- [レビュー前に直して欲しい日本語の問題点８つ](https://qiita.com/tonluqclml/items/bc63c294dda6010b63e9)
- [Git のコミットメッセージの書き方](https://qiita.com/itosho/items/9565c6ad2ffc24c09364)

## 推送指定資料夾到 gh-pages 分支

1. `npm i gh-pages --save-dev`
1. 編輯 `package.json`，新增：

```json
{
  // ...
  "scripts": {
    "predeploy": "[使用建置服務] build",
    "deploy": "gh-pages -d dist"
    ...
  }
  ...
}
```

## 自動部署 master branch 到 gh-pages 分支

1. Go to GitHub > Settings > Developer Settings > Personal access tokens > Generate new token
2. check `repo:status` and `public_repo` > Generate token > Copy it!
3. Go to repo > Settings > Secrets > Add a new secret
4. Name it something like `DEPLOY_PRI`, paste token to Value
5. Go to Actions > add Actions yml file

```yml
name: deploy to gh-pages branch
on:
  push:
    branches:
      - master
jobs:
  build:
    runs-on: ubuntu-latest

    name: Build and deploy to gh-pages
    env:
      DEPLOY_PRI: ${{secrets.DEPLOY_PRI}}
      USER_NAME: USER_NAME
      USER_EMAIL: USER_EMAIL
      PUBLISH_DIR: ./dist

    strategy:
      matrix:
        node-version: [10.x]

    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: npm install
        run: |
          npm install
      - name: npm run build
        run: |
          npm run build
      - name: Commit files
        run: |
          cd $PUBLISH_DIR
          git init
          git config --local user.name $USER_NAME
          git config --local user.email $USER_EMAIL
          git status
          git remote add origin https://$DEPLOY_PRI@github.com/$GITHUB_REPOSITORY.git
          git checkout -b gh-pages
          git add --all
          git commit -m "deploy to Github pages"
          git push origin gh-pages -f
          echo 🤘 deploy gh-pages complete.
```

## 參考文章

- [Git でやりたいこと、ここで見つかる - Qiita](https://qiita.com/shimotaroo/items/b73d896ace10894fd290)
- [Git 入門](https://pepese.github.io/blog/git-basics/)
- [Git コマンド整理](https://pepese.github.io/blog/git-commands/)
- [zlargon - Git](https://zlargon.gitbooks.io/git-tutorial/content/)
- [30 天精通 Git 版本控管](https://github.com/doggy8088/Learn-Git-in-30-days/tree/master/zh-tw)
- [我的 Git 指令小抄](https://blog.darkthread.net/blog/my-git-cheatsheet/)
- [[筆記]learning-Git-2019](https://medium.com/ashes-note/%E3%84%85-learning-git-2019-cd0a71e061ff)
- [いまさらだけど Git を基本から分かりやすくまとめてみた](https://qiita.com/gold-kou/items/7f6a3b46e2781b0dd4a0)
- [新人ではないが Git 初心者であるエンジニアが「このリポジトリをフォークしてローカルで開発できるようにしておいて！」と言われた時にやること](https://qiita.com/sky0621/items/8b6e88f4327b42ade5d7)
- [入門書を終えた人に捧げる、社会人のための Git 中級編 - Qiita](https://qiita.com/yamamoto7/items/fe15a1e7e360b4015fae)
- [実務でどんな git コマンドを使っているか振り返ってみる](https://qiita.com/west-hiroaki/items/74cccbc22b2cc7a4aacb)
- [Git でやらかした時に使える 19 個の奥義](https://qiita.com/muran001/items/dea2bbbaea1260098051)
- [【狀況題】怎麼刪除遠端的分支？](https://gitbook.tw/chapters/github/delete-remote-branch.html)
- [【狀況題】剛才的 Commit 後悔了，想要拆掉重做…](https://gitbook.tw/chapters/using-git/reset-commit.html)
- [git 操作は GUI ツール派な自分も CUI に乗り換えた便利 git 拡張まとめ](https://qiita.com/yukiarrr/items/9c21d97f6c8ac31de157)
- [GitHub でセキュリティ脆弱性のアラートが来てビビりながら対応した話](https://qiita.com/Nash-BETA/items/0d4e876cf9460778b985)
