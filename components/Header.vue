<template>
  <header class="header">
    <div class="width-wrapper">
      <div class="header-container flex-parent__center-cross">
        <a class="header__logo" href="/" title="MouseDining">
          <img
            src="~/assets/img/logos/mousedining-logo.svg"
            alt="MouseDining logo"
          />
        </a>
        <div class="header__icon toggle--menu icon__container flex-child__auto">
          <i class="icon--menu"></i>
        </div>
        <nav role="navigation" class="header__menu flex-child">
          <Navigation />
        </nav>
      </div>
    </div>
  </header>
</template>
