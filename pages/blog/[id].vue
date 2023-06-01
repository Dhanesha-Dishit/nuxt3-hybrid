<template>
  <div>
    <div>
      <h2>Blog Detial</h2>
      <h3>{{ blogDetail.title }} {{ blogDetail.firstName }}</h3>
    </div>
    <div>
      <img :src="blogDetail.picture" />
    </div>

    <h2>Current Date: {{ new Date() }}</h2>
  </div>
</template>

<script setup>
const route = useRoute();
const blogDetail = ref([]);

async function getDetailData() {
  const { data } = await useFetch(
    `https://dummyapi.io/data/v1/user/${route.params.id}`,
    {
      headers: {
        "app-id": "64785dca6cf2b80be3c931e6",
      },
    },
    { server: false }
  );

  blogDetail.value = data.value;
}

getDetailData();
</script>
