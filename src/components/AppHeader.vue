<script setup></script>

<template>
  <header class="app__header">
    <img src="/logo.svg" alt="Logo" class="app__logo" />
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <RouterLink :to="{ name: 'Home' }" class="nav__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="nav__icon"
              role="img"
              aria-label="Nav Home"
              fill="currentColor"
            >
              <path
                d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              />
            </svg>
          </RouterLink>
        </li>
        <li class="nav__item">
          <RouterLink :to="{ name: 'Movies' }" class="nav__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="nav__icon"
              role="img"
              aria-label="Nav Movies"
              fill="currentColor"
            >
              <path
                d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              />
            </svg>
          </RouterLink>
        </li>
        <li class="nav__item">
          <RouterLink :to="{ name: 'TV Series' }" class="nav__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="nav__icon"
              role="img"
              aria-label="Nav TV Series"
              fill="currentColor"
            >
              <path
                d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              />
            </svg>
          </RouterLink>
        </li>
        <li class="nav__item">
          <RouterLink :to="{ name: 'Bookmarked' }" class="nav__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 20"
              class="nav__icon"
              role="img"
              aria-label="Nav Bookmarked"
              fill="currentColor"
            >
              <path
                d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              />
            </svg>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="app__user">
      <img
        src="/image-avatar.png"
        alt="User profile avatar"
        width="80"
        height="80"
        class="user__avatar"
      />
    </div>
  </header>
</template>

<style scoped>
.app__header {
  background: var(--color-background-secondary);

  margin-block-start: var(--header-margin-block-start);
  margin-block-end: var(--header-margin-block-end);
  margin-inline-start: var(--header-margin-inline-start);
  margin-inline-end: var(--header-margin-inline-end);

  max-block-size: min(
    var(--header-block-size-max),
    calc(100svb - var(--header-margin-block-start) - var(--header-margin-block-end))
  );
  block-size: calc(var(--header-inner-block-size) + 2 * var(--header-padding-block));
  padding: var(--header-padding-block) var(--header-padding-inline);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app__logo {
  inline-size: 25px; /* (m) 25px -> (t) 32px */
  block-size: auto;
}

.nav__list {
  --nav-item-padding: 4px;
  --nav-list-gap: var(--space-300); /* (m) 24px -> (t) 32px -> (d) 40px */
  --nav-list-gap-calculated: calc(var(--nav-list-gap) - 2 * var(--nav-item-padding));
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  gap: var(--nav-list-gap-calculated);
}

.app__user {
  block-size: 100%;
}

.user__avatar {
  block-size: 100%;
  inline-size: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--br-900);
}

.nav__link {
  display: block;
  color: var(--color-nav-link);
  padding: 4px;
}

.nav__link.router-link-exact-active {
  color: var(--color-nav-active);
}

.nav__link:hover,
.nav__link:focus-visible {
  color: var(--color-nav-hover);
}

.nav__link:focus-visible {
  outline-offset: 2px;
  outline: 2px dashed var(--color-nav-hover);
}

.nav__icon {
  block-size: var(--space-200); /* (m) 16px -> (t) 20px */
  inline-size: auto;
}

/* viewport: mobile -> tablet */
@media (min-width: 40rem) {
  .app__header {
    border-radius: var(--br-200);
  }

  .app__logo {
    inline-size: 32px; /* (m) 25px -> (t) 32px */
  }

  .nav__list {
    /* --nav-item-padding: 4px; */
    --nav-list-gap: var(--space-400); /* (m) 24px -> (t) 32px -> (d) 40px */
  }

  .nav__icon {
    block-size: var(--space-250); /* (m) 16px -> (t) 20px */
  }
}

/* viewport: tablet -> desktop */
@media (min-width: 60rem) {
  .app__header {
    position: sticky;
    top: var(--header-margin-block-start);
    border-radius: var(--br-300);
    flex-direction: column;
    gap: var(--space-900); /* (d) 72px */

    block-size: auto;
    inline-size: calc(var(--header-inner-inline-size) + 2 * var(--header-padding-inline));
  }

  .app__user {
    inline-size: 100%;
    block-size: auto;
    margin-block-start: auto;
  }

  .nav__list {
    flex-direction: column;
    /* --nav-item-padding: 4px; */
    --nav-list-gap: var(--space-500); /* (m) 24px -> (t) 32px -> (d) 40px */
  }

  .user__avatar {
    block-size: auto;
    inline-size: 100%;
  }
}
</style>
