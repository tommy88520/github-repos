<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">GitHub Repositories</h1>
        <p class="text-gray-600">
          顯示用戶：<span class="font-semibold text-blue-600">{{
            username
          }}</span>
        </p>
        <p class="text-sm text-gray-500 mt-1">
          已載入 {{ repos.length }} 個 repositories
        </p>
      </div>

      <div
        v-if="error"
        class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
      >
        <p class="text-red-600">❌ {{ error }}</p>
      </div>

      <div class="space-y-4">
        <RepoCard v-for="repo in repos" :key="repo.id" :repo="repo" />
      </div>
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="flex items-center gap-2 text-blue-600">
          <svg
            class="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>載入中...</span>
        </div>
      </div>

      <!-- 沒有更多數據提示 -->
      <div
        v-else-if="!hasMore && repos.length > 0"
        class="text-center py-8 text-gray-500"
      >
        🎉 已經載入全部 repositories
      </div>

      <!-- 空狀態 -->
      <div v-else-if="!loading && repos.length === 0" class="text-center py-16">
        <p class="text-gray-500 text-lg">目前沒有 repositories</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { repos, loading, error, hasMore, username, fetchRepos, loadMore } =
  useGithubRepos();

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const threshold = 200;
  const isNearBottom = scrollTop + windowHeight >= documentHeight - threshold;

  if (isNearBottom && !loading.value && hasMore.value) {
    loadMore();
  }
};

onMounted(async () => {
  await fetchRepos(1);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

useHead({
  title: "GitHub Repos - 無限滾動",
  meta: [
    { name: "description", content: `瀏覽 ${username} 的 GitHub repositories` },
  ],
});
</script>
