<script setup>
import { computed } from 'vue'

const props = defineProps({
  alt: {
    type: String,
    required: true,
  },
  srcs: {
    type: Object,
    required: true,
  },
  group: {
    type: String,
    default: 'regular',
  },
})

const isTrending = computed(() => props.group === 'trending')
</script>

<template>
  <picture class="media__thumbnail" :class="{ 'media__thumbnail--trending': isTrending }">
    <source :srcset="srcs[group].large" media="(width >= 900px)" />
    <source v-if="!isTrending" :srcset="srcs[group].medium" media="(width >= 600px)" />
    <img :src="srcs[group].small" :alt="alt" />
  </picture>
</template>

<style scoped>
.media__thumbnail {
  position: relative;
}

.media__thumbnail > img {
  border-radius: var(--br-150);
}
</style>
