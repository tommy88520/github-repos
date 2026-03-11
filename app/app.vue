<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <NuxtRouteAnnouncer />

    <!-- 導航欄 -->
    <header class="bg-white shadow">
      <nav
        class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center"
      >
        <h1 class="text-2xl font-bold">My App</h1>
        <div class="space-x-4">
          <NuxtLink to="/" class="text-blue-600 hover:underline">首頁</NuxtLink>
          <NuxtLink to="/about" class="text-blue-600 hover:underline"
            >關於</NuxtLink
          >
        </div>
      </nav>
      <div>123</div>
    </header>

    <!-- 主要內容 -->
    <main class="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
      <NuxtPage />
    </main>

    <!-- 頁腳 -->
    <footer class="bg-gray-900 text-white text-center py-4">
      <p>&copy; 2026 My App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: "Tommy Huang",
  meta: [
    { name: "description", content: "Github repos demo" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
</script>
