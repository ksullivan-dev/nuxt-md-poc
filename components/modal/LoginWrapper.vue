<script setup>
  const emit = defineEmits(['close-modal']);
  const contentType = ref('LOGIN');
  const contents = {
    LOGIN: resolveComponent('ModalContentLogin'),
    SIGN_UP: resolveComponent('ModalContentSignUp'),
    FORGOT: resolveComponent('ModalContentForgotPassword'),
  };

  const content = computed(() => contents[contentType.value]);
</script>

<template>
  <ModalBase @close-modal="emit('close-modal')">
    <div class="modal--padded">
      <component
        :is="content"
        v-model="contentType"
        @close-modal="emit('close-modal')"
      />
    </div>
  </ModalBase>
</template>
