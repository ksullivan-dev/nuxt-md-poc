<script setup>
  const { name } = useRoute();
  const value = computed(() => (name === 'index' ? 'Home' : name));
  const title = capitalize(value.value);
  useHead({
    title,
  });
</script>

<template>
  <h1>{{ title }}</h1>
  <div style="height: 800px; background: lightgray"></div>
</template>
