<script setup>
import MediaCard from '@/components/MediaCard.vue'

defineProps({
  listName: {
    type: String,
    required: true,
  },
  listData: {
    type: Object,
    required: true,
  },
  listDirection: {
    type: String,
    default: 'vertical',
  },
})
</script>

<template>
  <div
    class="media-list"
    :class="[listDirection === 'vertical' ? 'media-list--vertical' : 'media-list--horizontal']"
  >
    <MediaCard
      v-for="item in listData"
      :listName="listName"
      :cardData="item"
      :cardDirection="listDirection"
      :key="item.title"
      class="media-item"
    />
  </div>
</template>

<style scoped>
.media-list {
  --num-columns: 2;
  --item-inline-size-min: 160px; /* (m) 164px -> (t) 220px -> (d) 280px */
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(var(--item-inline-size-min), 1fr)); */
  grid-template-columns: repeat(var(--num-columns), 1fr);
  row-gap: var(--space-200); /* (m) 16px -> (t) 24px */
  column-gap: var(--space-200); /* (m) 15px -> (t) 30px -> (d) 40px */
}

.media-list--horizontal {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: inline proximity;
  gap: var(--space-200); /* (m) 16px -> (t) 40px */
  -webkit-overflow-scrolling: touch;
}

/* to remove scrollbar */
.media-list--horizontal::-webkit-scrollbar {
  display: none;
}

.media-list--horizontal > * {
  flex: 0 0 auto;
  scroll-snap-align: start;
}

/* viewport:  (tiny) mobile -> mobile */
@media (max-width: 22rem) {
  .media-list {
    --num-columns: 1;
  }
}

/* viewport: mobile -> tablet */
@media (min-width: 40rem) {
  .media-list {
    --num-columns: 3;
    --item-inline-size-min: 220px;
    row-gap: var(--space-300); /* (m) 16px -> (t) 24px */
    column-gap: var(--space-375); /* (m) 15px -> (t) 30px -> (d) 40px */
  }

  .media-list--horizontal {
    gap: var(--space-500); /* (m) 16px -> (t) 40px */
  }
}

/* viewport: tablet -> desktop */
@media (min-width: 60rem) {
  .media-list {
    --num-columns: 4;
    --item-inline-size-min: 220px;
    column-gap: var(--space-500); /* (m) 15px -> (t) 30px -> (d) 40px */
  }
}
</style>
