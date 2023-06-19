<script setup>
  const modal = ref(null);
  const initScrollPosition = ref(window.scrollY);
  const emit = defineEmits(['close-modal']);

  onClickOutside(modal, (e) => {
    /**
     * NOTE: Because the datepicker is rendered inside a modal,
     * we need to use the 'teleport' prop to allow it to show correctly.
     * But since the modal itself also uses the Teleport component,
     * there is a conflict where a second click in the datepicker gets picked up
     * 'outside' the modal, causing the modal to close. To fix this, we've put a
     * wrapper around the datepicker and will listen for clicks to that parent and
     * opt out of the 'onClickOutside' callback to close the modal.
     */
    const datepickerContainer = document.getElementById('datepicker-container');
    if (!datepickerContainer.contains(e.target)) {
      emit('close-modal');
    }
  });

  onMounted(() => {
    // Setting these values on mount so scroll position is maintained
    document.body.style.position = 'fixed';
    document.body.style.top = `-${initScrollPosition.value}px`;
  });

  onUnmounted(() => {
    // rather than unsetting these on close, we are unsetting the values on unmount
    // incase the modal somehow closes unexpectedly
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(initScrollPosition.value || '0'));
  });
</script>

<template>
  <ClientOnly>
    <Teleport to="#modals">
      <div class="modal modal--active">
        <div class="modal__inner" ref="modal">
          <div class="modal__logo">
            <img
              src="~/assets/img/logos/mousedining-logo.svg"
              alt="MouseDining logo"
            />
          </div>
          <button
            type="button"
            class="modal__close unbutton"
            @click="emit('close-modal')"
          >
            <i class="icon--clear"></i>
          </button>
          <div class="modal__content">
            <slot />
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>
