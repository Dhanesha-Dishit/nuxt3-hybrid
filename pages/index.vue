<template>
  <div>
    <h1>Home</h1>
    <div class="md">
      <NuxtLink to="/spa"> To SPA (client side rendered) page</NuxtLink>
    </div>
    <div class="md"><NuxtLink to="/ssr"> To SSR page</NuxtLink></div>
    <div class="md">
      <NuxtLink to="/swr">
        To SWR Cached Page ( Stale while revalidate)</NuxtLink
      >
    </div>
    <div class="md"><NuxtLink to="/static"> To Static page</NuxtLink></div>
    <div class="md"><NuxtLink to="/blog"> Blog pages</NuxtLink></div>
  </div>
</template>

<style>
.md {
  padding: 5px;
}
</style>
