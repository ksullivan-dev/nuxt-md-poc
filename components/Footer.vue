<script setup>
  const socialLinks = [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/MouseDining-1497726997185236/',
      title: 'MouseDining on Facebook',
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/mousediningcom',
      title: 'Follow MouseDining on Twitter',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/mouse.dining',
      title: 'Follow MouseDining on Instagram',
    },
    {
      name: 'reddit',
      href: 'https://www.reddit.com/r/MouseDining/',
      title: 'Follow MouseDining on Reddit',
    },
    {
      name: 'pinterest',
      href: 'https://www.pinterest.com/mousediningcom',
      title: 'Follow MouseDining on Pinterest',
    },
  ];

  const siteLinks = [
    {
      name: 'Privacy',
      href: '/privacy',
      title: 'MouseDining Privacy',
    },
    {
      name: 'Terms',
      href: '/terms',
      title: 'MouseDining Terms',
    },
    {
      name: 'Careers',
      href: '/careers',
      title: 'MouseDining Careers',
    },
    {
      name: 'About',
      href: '/about',
      title: 'MouseDining About',
    },
  ];

  const year = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer">
    <div class="width-wrapper">
      <div class="footer__top flex-parent__wrap">
        <a class="footer__logo" href="/" title="MouseDining">
          <img
            src="~/assets/img/logos/mousedining-logo.svg"
            alt="MouseDining logo"
          />
        </a>
        <nav role="navigation" class="footer__menu flex-child">
          <Navigation is-footer />
        </nav>
      </div>
      <div class="footer__bottom flex-parent__wrap">
        <div class="footer__links flex-child__50 flex-parent__column">
          <ul class="menu--social flex-parent">
            <li
              v-for="link in socialLinks"
              :key="link.name"
              class="menu__item--social"
            >
              <a
                class="menu__link--social"
                :href="link.href"
                target="_blank"
                :title="link.title"
              >
                <span :class="`icon icon-${link.name}`"></span>
              </a>
            </li>
          </ul>
          <ul class="menu__sitelinks footer__last flex-parent">
            <li
              v-for="link in siteLinks"
              :key="link.name"
              class="menu__item--sitelinks"
            >
              <a
                class="menu__link--sitelinks"
                :href="link.href"
                :title="link.title"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__disclaimer flex-child__50 flex-parent__column">
          <p class="disclaimer">
            This site is not affiliated in any way with the Walt Disney Company
            or any of its affiliates or subsidiaries.
          </p>
          <p class="copyright footer__last">
            <a href="/" title="MouseDining Homepage">MouseDining.com</a> &copy;
            {{ year }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
