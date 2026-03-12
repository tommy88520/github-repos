# GitHub Repositories Viewer

使用 Nuxt 4 + Vue 3 製作的 GitHub Repositories 列表頁，支援無限滾動載入，並顯示 repo 的基本資訊。

## 功能特色

- 讀取指定 GitHub 使用者的 repositories
- 無限滾動自動載入下一頁
- 載入中、錯誤、空資料、載入完成狀態提示
- 顯示 repo 名稱、描述、語言、star 數、最後更新時間

## 技術棧

- Nuxt 4
- Vue 3 (`<script setup>` + Composition API)
- Tailwind CSS

## 快速開始

安裝依賴：

```bash
npm install
```

啟動開發環境（預設 `http://localhost:3000`）：

```bash
npm run dev
```

## 可用指令

```bash
# 開發
npm run dev

# 建置
npm run build

# 預覽 build 結果
npm run preview

# 產生靜態檔
npm run generate
```

## 專案結構

```text
app/
	components/
		RepoCard.vue            # Repo 卡片元件
	composables/
		useGithubApi.ts         # GitHub API 封裝
		useGithubRepos.ts       # Repos 狀態與分頁邏輯
	pages/
		index.vue               # 首頁與無限滾動行為
```

```ts
const username = "yuaanlin";
```

如果要切換顯示對象，修改上面這個值即可。

## 備註

- GitHub API 有 rate limit，短時間大量請求可能回傳 403。
