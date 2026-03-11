<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">歡迎來到 Nuxt</h1>

    <Card class="mb-6">
      <h2 class="text-2xl font-bold mb-4">什麼是自動引入？</h2>
      <p class="text-gray-600">
        Nuxt 會自動掃描 components/ 資料夾，你寫的 Card 和 Alert
        都可以直接使用，無需 import！
      </p>
    </Card>

    <Alert
      title="提示"
      message="這是一個自動引入的 Alert component"
      class="mb-6"
    />

    <Button class="mb-8">Click me</Button>

    <Card>
      <h3 class="text-xl font-bold mb-4">瀏覽更多</h3>
      <div class="space-y-2">
        <p>
          <NuxtLink to="/about" class="text-blue-600 hover:underline"
            >→ 關於頁面</NuxtLink
          >
        </p>
        <p>
          <NuxtLink to="/blog/1" class="text-blue-600 hover:underline"
            >→ 部落格文章</NuxtLink
          >
        </p>
      </div>
    </Card>
  </div>
</template>

<script setup>
useHead({
  title: "Home - My App",
  meta: [{ name: "description", content: "Nuxt 自動引入 component 範例" }],
});
</script>
