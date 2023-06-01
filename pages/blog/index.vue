<template>
  <div>
    <div class="md" v-for="i in allBlog">
      <NuxtLink :to="`blog/${i.id}`">{{ i.firstName }}- {{ i.id }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
onMounted(async () => {
  const { data } = await useFetch(
    "https://dummyapi.io/data/v1/user?limit=20",
    {
      headers: {
        "app-id": "64785dca6cf2b80be3c931e6",
      },
    },
    { server: false }
  );
  allBlog.value = data.value.data;
});
const allBlog = ref([]);
async function getData() {
  const { data } = await useFetch(
    "https://dummyapi.io/data/v1/user?limit=20",
    {
      headers: {
        "app-id": "64785dca6cf2b80be3c931e6",
      },
    },
    { server: false }
  );
  allBlog.value = data.value.data;
}

getData();
</script>

<style>
.md {
  padding: 5px;
}
</style>
