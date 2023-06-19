<script setup>
  const auth = useAuth();
  const emit = defineEmits(['close-modal', 'update:modelValue']);
  const props = defineProps({
    modelValue: String,
  });

  const isLoading = ref(false);

  const handleLogin = async () => {
    isLoading.value = true;
    await sleep(1000);
    auth.value = true;
    emit('close-modal');
  };

  const handleSignup = () => {
    emit('update:modelValue', 'SIGN_UP');
  };

  const handleForgot = () => {
    emit('update:modelValue', 'FORGOT');
  };
</script>

<template>
  <h2 class="modal__header">MouseDining Login</h2>
  <div class="modal__alert alert"></div>
  <form action="" @submit.prevent="handleLogin" class="form__login">
    <div class="input__wrapper input__wrapper--labelize">
      <input
        type="text"
        class="input--text input--labelize"
        data-value="email"
      />
      <label for="" class="input__label label--labelize">Email</label>
    </div>
    <div class="input__wrapper input__wrapper--labelize">
      <input
        type="password"
        class="input--text input--labelize"
        data-value="password"
      />
      <label for="" class="input__label label--labelize">Password</label>
    </div>
    <div class="btn-container flex-parent__center-both">
      <Button class="flex-child__fill" :is-loading="isLoading"> Login </Button>
      <span class="flex-child btn-separator">or</span>
      <Button
        class="flex-child__fill"
        type="button"
        inverse
        @click="handleSignup"
      >
        Sign Up
      </Button>
    </div>
    <div
      class="input__wrapper input__wrapper--remember flex-parent__center-cross flex-parent__flex-end"
    >
      <p class="checkbox__label input__label flex-child__auto styled-p">
        Remember Me?
      </p>
      <input
        id="rememberMeLogin"
        type="checkbox"
        class="checkbox__input"
        data-value="remember"
      />
      <label
        for="rememberMeLogin"
        class="checkbox__graphic flex-child__auto"
      ></label>
    </div>
  </form>
  <div class="modal__helper-text flex-parent__flex-end primary-text">
    <button
      type="button"
      class="flex-child__auto unbutton"
      @click="handleForgot"
    >
      Forgot your password?
    </button>
  </div>
</template>
