<script setup>
import MediaList from '@/components/MediaList.vue'
import allMedia from '@/assets/data.json'

import { computed, onMounted } from 'vue'
import { slugify } from '@/utils/index.js'
import { useMediaStore } from '@/stores/media'

const mediaStore = useMediaStore()

const categoryValue = 'TV Series'
const categoryHeading = 'TV Series'

const categoryMedia = computed(() => allMedia.filter((item) => item.category === categoryValue))

const categoryMediaFiltered = computed(() =>
  mediaStore.isSearchActive
    ? categoryMedia.value.filter((item) => mediaStore.matchesSearch(item.title))
    : categoryMedia.value,
)

const numResults = computed(() => categoryMediaFiltered.value.length)

onMounted(() => {
  mediaStore.searchString = null
})
</script>

<template>
  <div class="main__view">
    <section aria-labelledby="section-movies-heading" class="main__section">
      <h2 v-if="mediaStore.isSearchActive" class="section__heading text-preset1">
        Found {{ numResults }} results for '{{ mediaStore.searchString }}'
      </h2>
      <h2 v-else id="section-movies-heading" class="section__heading text-preset1">
        {{ categoryHeading }}
      </h2>
      <MediaList :listName="slugify(categoryValue)" :listData="categoryMediaFiltered" />
    </section>
  </div>
</template>

<style scoped></style>
