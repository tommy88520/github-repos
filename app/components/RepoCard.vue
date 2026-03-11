<script setup lang="ts">
import type { GithubRepo } from '~/composables/useGithubRepos'

interface Props {
  repo: GithubRepo
}

const props = defineProps<Props>()

// 格式化日期
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
    <!-- Repo 標題 -->
    <h3 class="text-xl font-semibold mb-2">
      <a 
        :href="repo.html_url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-blue-600 hover:text-blue-800 hover:underline"
      >
        {{ repo.name }}
      </a>
    </h3>

    <!-- Repo 描述 -->
    <p class="text-gray-600 mb-4 line-clamp-2">
      {{ repo.description || '沒有描述' }}
    </p>

    <!-- Repo 資訊 -->
    <div class="flex items-center gap-4 text-sm text-gray-500">
      <!-- 程式語言 -->
      <div v-if="repo.language" class="flex items-center gap-1">
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span>{{ repo.language }}</span>
      </div>

      <!-- Star 數量 -->
      <div class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span>{{ repo.stargazers_count }}</span>
      </div>

      <!-- 更新時間 -->
      <div class="ml-auto text-xs">
        更新於 {{ formatDate(repo.updated_at) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
