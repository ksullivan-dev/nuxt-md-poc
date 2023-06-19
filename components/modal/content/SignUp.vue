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

  const handleSignup = async () => {
    isLoading.value = true;
    await sleep(1000);
    auth.value = true;
    emit('close-modal');
  };
</script>

<template>
  <h2 class="modal__header">
    <span class="primary-text">Sign up</span> to set an Alert
  </h2>
  <p class="modal__helper-text">
    In order to set an alert, you must have an account. Create one or login
    below.
  </p>
  <div class="modal__alert alert"></div>
  <form
    action=""
    @submit.prevent="handleSignup"
    class="form__register"
    id="registerForm"
  >
    <div class="input__wrapper--labelize">
      <input
        type="text"
        class="input--text input--labelize"
        data-value="FullName"
      />
      <label for="" class="input__label label--labelize">Name</label>
    </div>
    <div class="input__wrapper--labelize validate-wrapper wrapper--half">
      <input
        type="text"
        class="input--text input--labelize"
        data-value="Email"
        id="email"
      />
      <label for="" class="input__label label--labelize">Email</label>
      <span class="message__text"></span>
    </div>
    <div class="input__wrapper--labelize validate-wrapper wrapper--half">
      <input
        type="text"
        class="input--text input--labelize"
        data-value="EmailConfirm"
      />
      <label for="" class="input__label label--labelize">Confirm Email</label>
      <span class="message__text"></span>
    </div>
    <div class="wrapper--text"></div>
    <div class="input__wrapper--labelize validate-wrapper wrapper--half">
      <input
        type="password"
        class="input--text input--labelize"
        data-value="Password"
      />
      <label for="" class="input__label label--labelize">Password</label>
      <span class="message__text"></span>
    </div>
    <div class="input__wrapper--labelize validate-wrapper wrapper--half">
      <input
        type="password"
        class="input--text input--labelize"
        data-value="PasswordConfirm"
      />
      <label for="" class="input__label label--labelize"
        >Confirm Password</label
      >
      <span class="message__text"></span>
    </div>
    <div
      class="input__wrapper--labelize input__wrapper--no-border flex-parent__center-cross"
    >
      <p class="checkbox__label input__label flex-child__auto styled-p">
        Newsletter?
      </p>
      <input
        id="registerNewsletter"
        type="checkbox"
        class="checkbox__input"
        checked
        data-value="MailingList"
      />
      <label
        for="registerNewsletter"
        class="checkbox__graphic flex-child__auto"
      ></label>
    </div>
    <div
      class="input__wrapper--labelize input__wrapper--no-border flex-parent__center-cross validate-wrapper wrapper--radio"
    >
      <p
        class="input__label flex-child__auto styled-p"
        data-value="TravelAgent"
      >
        Are you a Travel Agent?
      </p>
      <label class="input--radio"
        ><input
          id="signupTravelAgentYes"
          type="radio"
          name="TravelAgent"
          value="true"
        /><span class="input--radio--text">Yes</span></label
      >
      <label class="input--radio"
        ><input
          id="signupTravelAgentNo"
          type="radio"
          name="TravelAgent"
          value="false"
        /><span class="input--radio--text">No</span></label
      >
    </div>
    <label for="plan__select" class="input__label">Choose your plan:</label>
    <div class="input__wrapper input__wrapper--select input__wrapper--border">
      <select id="plan__select" class="input--select" data-value="PlanId">
        <!-- <option value="0"{{# ifCond PlanId ../Selection }}selected {{/ ifCond }}>Free</option>
            {{# each Plans }}
                <option {{# ifCond Id ../Selection }}selected {{/ ifCond }}value="{{ Id }}">{{ Name }} ({{ Alerts }} Alerts - ${{ Cost }}/{{ PlanType }})</option>
            {{/ each }} -->
      </select>
    </div>
    <p class="modal__helper-text small-text">
      Free accounts are limited to email and 6 simultaneous alerts. Monthly or
      Annual subscriptions include text alerts, notes, auto-renewal, and
      increased simultaneous alerts. See our <a href="/pricing">Pricing</a> page
      for more details.
    </p>
    <div class="btn-container flex-parent__center-both">
      <Button class="flex-child__fill" :is-loading="isLoading">Sign Up</Button>
      <span class="flex-child btn-separator">or</span>
      <Button
        class="flex-child__fill"
        type="button"
        inverse
        @click="handleLogin"
      >
        Login
      </Button>
    </div>
    <div
      class="input__wrapper input__wrapper--remember flex-parent__center-cross flex-parent__flex-end"
    >
      <p class="checkbox__label input__label flex-child__auto styled-p">
        Remember Me?
      </p>
      <input
        id="rememberMeRegister"
        type="checkbox"
        class="checkbox__input"
        data-value="Remember"
      />
      <label
        for="rememberMeRegister"
        class="checkbox__graphic flex-child__auto"
      ></label>
    </div>
  </form>
</template>
