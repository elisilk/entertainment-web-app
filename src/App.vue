<script setup>
import AppHeader from '@/components/AppHeader.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
  <div class="app__container">
    <a class="skip-to-main" href="#main-content">Skip to main content</a>

    <AppHeader />

    <main class="app__main" id="main-content">
      <h1 class="sr-only">Entertainment Web App</h1>

      <SearchBar />

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.app__main {
  margin-block-start: var(--main-margin-block-start);
  margin-block-end: var(--main-margin-block-end);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.skip-to-main {
  z-index: 2;
  position: absolute;
  top: 1rem;
  left: 1rem;
  translate: -500% 0%;
  color: var(--color-text-primary);
  background-color: var(--color-background-primary);
  text-decoration: none;
  outline: 1px dashed var(--color-text-primary);
  outline-offset: 4px;
  transition: translate 0.3s;
}

.skip-to-main:hover,
.skip-to-main:focus-visible {
  translate: 0% 0%;
}

/* viewport: tablet -> desktop */
@media (min-width: 60rem) {
  .app__container {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
  }
}
</style>
