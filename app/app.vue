<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <NuxtRouteAnnouncer />
    <header class="bg-white shadow">
      <nav
        class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center"
      >
        <h1 class="text-2xl font-bold">GitHub Repos</h1>
      </nav>
    </header>

    <main class="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
      <NuxtPage />
    </main>

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
