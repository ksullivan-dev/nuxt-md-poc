<script setup>
  const props = defineProps({
    isLoading: Boolean,
    loadingText: String,
    inverse: Boolean,
  });

  const isIcon = computed(() => !props.loadingText);
</script>

<template>
  <button class="btn" :class="{ whiteout: isLoading, 'btn--reverse': inverse }">
    <slot v-if="!isLoading" />

    <template v-else>
      <div :class="$style.hidden">
        <slot />
      </div>

      <div class="whiteout__inner">
        <span
          class="loading"
          :class="[isIcon ? 'loading--icon' : 'loading--text']"
        >
          <AnimatedLogo v-if="isIcon" />
          <template v-else>
            {{ loadingText }}
          </template>
        </span>
      </div>
    </template>
  </button>
</template>

<style module lang="scss">
  // Using this allows the button to maintain its natural size
  .hidden {
    visibility: hidden;
  }
</style>
