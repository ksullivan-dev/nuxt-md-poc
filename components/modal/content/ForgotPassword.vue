<script setup>
  const auth = useAuth();
  const emit = defineEmits(['close-modal', 'update:modelValue']);
  const props = defineProps({
    modelValue: String,
  });

  const isLoading = ref(false);

  const handleLogin = () => {
    emit('update:modelValue', 'LOGIN');
  };

  const handleSignup = () => {
    emit('update:modelValue', 'SIGN_UP');
  };

  const handleReset = async () => {
    isLoading.value = true;
    await sleep(1000);
    auth.value = true;
    emit('close-modal');
  };
</script>

<template>
  <h2 class="modal__header">Reset Password</h2>
  <div class="modal__alert alert"></div>
  <p class="modal__helper-text">
    If you can't remember your password, enter the email address associated with
    your account and we'll send you a link to reset your password.
  </p>
  <form
    action=""
    @submit.prevent="handleReset"
    class="form__forgot flex-parent__center-cross"
  >
    <div
      class="input__wrapper input__wrapper--labelize validate-wrapper flex-child__fill"
    >
      <input
        type="text"
        class="input--text input--labelize"
        data-value="Email"
      />
      <label for="" class="input__label label--labelize">Email</label>
      <span class="message__text"></span>
    </div>
    <div class="btn-container flex-child__auto">
      <Button class="btn--accent" :is-loading="isLoading">Reset</Button>
    </div>
  </form>
  <div class="modal__helper-text flex-parent__center-both">
    <button class="flex-child__auto login unbutton" @click="handleLogin">
      Login
    </button>
    <button class="flex-child__auto signup unbutton" @click="handleSignup">
      Sign Up
    </button>
  </div>
</template>
