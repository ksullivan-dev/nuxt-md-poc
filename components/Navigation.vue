<script setup>
  const props = defineProps({
    isFooter: {
      type: Boolean,
      default: false,
    },
  });
  const isAuth = useAuth();

  const modals = {
    CREATE_ALERT: resolveComponent('LazyModalCreateAlert'),
    LOGIN: resolveComponent('LazyModalLoginWrapper'),
    CONTACT: resolveComponent('LazyModalContact'),
  };

  /**
   * @type Ref<"CREATE_ALERT" | "LOGIN" | "CONTACT" | null>
   */
  const modalType = ref(null);

  const links = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'Events', url: '/events' },
    { name: 'Account', url: '/account' },
    { name: 'Alerts', url: '/account/alerts' },
    { name: 'Availability', url: '/availability' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', action: () => openModal('CONTACT') },
  ];

  const filteredLinks = computed(() => {
    let excludeList = ['Account', 'Alerts', 'Availability'];
    if (isAuth.value && !props.isFooter) {
      excludeList = ['Contact', 'Blog'];
    }
    return links.filter((link) => !excludeList.includes(link.name));
  });

  /**
   * Opens the specified modal
   * @param {"CREATE_ALERT" | "CONTACT" | "LOGIN"} value
   */
  const openModal = (value) => {
    modalType.value = value;
  };

  const modal = computed(() => {
    return modals[modalType.value];
  });

  const openLoginModal = () => {
    openModal('LOGIN');
  };

  const handleLogout = () => {
    isAuth.value = false;
  };

  const authButton = computed(() => ({
    action: isAuth.value ? handleLogout : openLoginModal,
    text: isAuth.value ? 'Logout' : 'Login',
  }));
</script>

<template>
  <ul class="menu--primary">
    <li
      v-for="link in filteredLinks"
      :key="link.name"
      class="menu__item--primary"
    >
      <a v-if="!!link.url" class="menu__link--primary" :href="link.url">
        {{ link.name }}
      </a>
      <button
        v-else
        type="button"
        class="menu__link--primary unbutton"
        @click.preventDefault="link.action"
      >
        {{ link.name }}
      </button>
    </li>

    <li class="menu__item--primary">
      <button
        type="button"
        class="menu__link--primary unbutton link--primary"
        @click="authButton.action"
      >
        {{ authButton.text }}
      </button>
    </li>
    <li class="menu__item--primary--last">
      <button
        type="button"
        class="menu__link--primary btn btn--menu"
        @click.preventDefault="openModal('CREATE_ALERT')"
      >
        <i class="icon icon-plus" /> Create Alert
      </button>
    </li>
  </ul>

  <!-- // Dynamically mounting modals -->
  <component :is="modal" @close-modal="modalType = null" />
</template>
