<template>
  <div>
    <Loader v-if="pending" class="lds-roller--primary" />
    <h1 v-else>{{ data }}</h1>
  </div>
</template>

<script setup>
const { data, pending } = useApiFetch("banners", {
  method: "get",
});

console.log(pending.value);

watch(data, (newData) => {
  console.log(newData);
});

watch(pending, (newPending) => {});
</script>
