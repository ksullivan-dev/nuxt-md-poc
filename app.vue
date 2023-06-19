<script setup>
  useHead({
    titleTemplate: (title) => {
      const pageTitle = title ? `${title} | ` : '';
      return pageTitle + 'MouseDining';
    },
  });
</script>

<template>
  <div class="body-container">
    <!-- Header -->
    <div id="header">
      <Header />
    </div>
    <div id="messages" class="wrapper--alerts ui-collapsed"></div>
    <div id="content">
      <NuxtPage />
    </div>
    <!-- Footer -->
    <div id="preFooter">
      <div class="adUnit-970x90"></div>
    </div>
    <div id="footer">
      <Prefooter />
      <Footer />
    </div>
    <!-- Modals -->
    <div id="modals">
      <!-- <div id="fixedFooter">
        <div id="adDismiss">
          <button onclick="adDismiss()">X</button>
        </div>
        <div id="div-gpt-ad-fixedFooter"></div>
      </div> -->
    </div>
    <!-- This container is specifically for the datepicker in a modal -->
    <div id="datepicker-container" />
  </div>
</template>

<style lang="scss">
  /* for now, importing the main scss stylesheet via nuxt.config */
  /* @import "assets/scss/style.scss"; */
</style>
