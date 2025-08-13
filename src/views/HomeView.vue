<script setup>
import MediaList from '@/components/MediaList.vue'
import allMedia from '@/assets/data.json'

import { computed, onMounted } from 'vue'
import { useMediaStore } from '@/stores/media'

const mediaStore = useMediaStore()

// const categoryValue = 'Recommended'
// const categoryHeading = 'Recommended for you'

const recommendedMedia = computed(() => allMedia.filter((item) => !item.isTrending))

const recommendedMediaFiltered = computed(() =>
  mediaStore.isSearchActive
    ? allMedia.filter((item) => mediaStore.matchesSearch(item.title))
    : recommendedMedia.value,
)

const numResults = computed(() => recommendedMediaFiltered.value.length)

const trendingMedia = computed(() => allMedia.filter((item) => item.isTrending))

onMounted(() => {
  mediaStore.searchString = null
})
</script>

<template>
  <div class="main__view">
    <section
      v-if="!mediaStore.isSearchActive"
      aria-labelledby="section-trending-heading"
      class="main__section main__section--full"
    >
      <h2 id="section-trending-heading" class="section__heading text-preset1">Trending</h2>
      <MediaList listName="trending" :listData="trendingMedia" listDirection="horizontal" />
    </section>

    <section aria-labelledby="section-recommended-heading" class="main__section">
      <h2 v-if="mediaStore.isSearchActive" class="section__heading text-preset1">
        Found {{ numResults }} results for '{{ mediaStore.searchString }}'
      </h2>
      <h2 v-else id="section-recommended-heading" class="section__heading text-preset1">
        Recommended for you
      </h2>
      <MediaList listName="recommended" :listData="recommendedMediaFiltered" />
    </section>
  </div>
</template>

<style scoped></style>
