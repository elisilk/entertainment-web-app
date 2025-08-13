<script setup>
import { useMediaStore } from '@/stores/media'

const mediaStore = useMediaStore()

function handleSubmit() {
  return true
}
</script>

<template>
  <section class="main__section" aria-labelledby="section-search-heading">
    <h2 id="section-search-heading" class="sr-only">Search</h2>
    <form role="search" class="search__form" @submit.prevent="handleSubmit">
      <label class="search__label">
        <span class="sr-only">Search for movies or TV series</span>
        <img src="/icons/icon-search.svg" alt="search icon" class="search__icon" />
        <input
          class="search__input text-preset2"
          type="search"
          id="search"
          name="search"
          placeholder="Search for movies or TV series"
          v-model="mediaStore.searchString"
        />
      </label>
      <button type="submit" class="sr-only" tabindex="-1">Submit</button>
    </form>
  </section>
</template>

<style scoped>
.search__label {
  cursor: pointer;
  /* block-size: 45px; */
  display: flex;
  gap: var(--space-200); /* (m) 16px -> (t) 24px -> (d) 32px */
  align-items: center;
}

.search__icon {
  aspect-ratio: 1 / 1;
  block-size: var(--space-300); /* (m) 24px -> (t) 32px */
}

.search__input {
  appearance: none;
  -webkit-appearance: none;
  outline: 0;
  border: 0;
  border-bottom: 1px solid transparent;

  /*   block-size: 100%; */
  inline-size: 100%;

  background-color: transparent;
  color: var(--color-text-primary);

  margin: 0;
  padding: 0;
  padding-block: var(--space-200);

  caret-color: var(--color-input-caret);
}

.search__form:focus-within .search__input,
.search__input:focus-visible {
  border-block-end: 1px solid var(--color-border-active);
}

/* viewport: mobile -> tablet */
@media (min-width: 40rem) {
  .search__label {
    gap: var(--space-300); /* (m) 16px -> (t) 24px -> (d) 32px */
  }

  .search__icon {
    block-size: var(--space-400); /* (m) 24px -> (t) 32px */
  }
}

/* viewport: tablet -> desktop */
@media (min-width: 60rem) {
  .search__label {
    gap: var(--space-400); /* (m) 16px -> (t) 24px -> (d) 32px */
  }
}
</style>
