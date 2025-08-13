<script setup>
import MediaList from '@/components/MediaList.vue'
import allMedia from '@/assets/data.json'

import { computed, onMounted } from 'vue'
import { useMediaStore } from '@/stores/media'

const mediaStore = useMediaStore()

const bookmarkedMoviesMedia = computed(() =>
  allMedia.filter((item) => mediaStore.isBookmarked(item.title) && item.category === 'Movie'),
)

const bookmarkedMoviesMediaFiltered = computed(() =>
  mediaStore.isSearchActive
    ? bookmarkedMoviesMedia.value.filter((item) => mediaStore.matchesSearch(item.title))
    : bookmarkedMoviesMedia.value,
)

const numResultsMovies = computed(() => bookmarkedMoviesMediaFiltered.value.length)

const bookmarkedTVSeriesMedia = computed(() =>
  allMedia.filter((item) => mediaStore.isBookmarked(item.title) && item.category === 'TV Series'),
)

const bookmarkedTVSeriesMediaFiltered = computed(() =>
  mediaStore.isSearchActive
    ? bookmarkedTVSeriesMedia.value.filter((item) => mediaStore.matchesSearch(item.title))
    : bookmarkedTVSeriesMedia.value,
)

const numResultsTVSeries = computed(() => bookmarkedTVSeriesMediaFiltered.value.length)

onMounted(() => {
  mediaStore.searchString = null
})
</script>

<template>
  <div class="main__view">
    <section aria-labelledby="section-movies-heading" class="main__section">
      <h2 id="section-movies-heading" class="section__heading text-preset1">
        Bookmarked Movies
        <span v-if="mediaStore.isSearchActive">
          (Found {{ numResultsMovies }} result{{ numResultsMovies === 1 ? '' : 's' }})
        </span>
      </h2>
      <MediaList listName="bookmarked-movies" :listData="bookmarkedMoviesMediaFiltered" />
    </section>

    <section aria-labelledby="section-tv-series-heading" class="main__section">
      <h2 id="section-tv-series-heading" class="section__heading text-preset1">
        Bookmarked TV Series
        <span v-if="mediaStore.isSearchActive">
          (Found {{ numResultsTVSeries }} result{{ numResultsTVSeries === 1 ? '' : 's' }})
        </span>
      </h2>
      <MediaList listName="bookmarked-tv-series" :listData="bookmarkedTVSeriesMediaFiltered" />
    </section>
  </div>
</template>

<style scoped></style>
