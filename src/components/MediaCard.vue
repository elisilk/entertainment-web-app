<script setup>
import MediaThumbnail from '@/components/MediaThumbnail.vue'

import { computed } from 'vue'
import { slugify } from '@/utils/index.js'
import { useMediaStore } from '@/stores/media'

const mediaStore = useMediaStore()

const props = defineProps({
  listName: {
    type: String,
    required: true,
  },
  cardData: {
    type: Object,
    required: true,
  },
  cardDirection: {
    type: String,
    default: 'vertical',
  },
})

const isMovie = computed(() => props.cardData.category === 'Movie')
const isHorizontal = computed(() => props.cardDirection === 'horizontal')

const bookmarkValue = computed({
  get() {
    return mediaStore.isBookmarked(props.cardData.title)
  },
  set(newValue) {
    newValue
      ? mediaStore.addBookmark(props.cardData.title)
      : mediaStore.removeBookmark(props.cardData.title)
  },
})

function handlePlayButtonClick(event) {
  console.log('play clicked:', event.target.id)
}
</script>

<template>
  <div class="card" :class="{ 'card--horizontal': isHorizontal }">
    <div class="card__text">
      <h3 class="card__title" :class="[isHorizontal ? 'text-preset3' : 'text-preset4']">
        {{ cardData.title }}
      </h3>

      <div class="card__info" :class="[isHorizontal ? 'text-preset5' : 'text-preset6']">
        <div>{{ cardData.year }}</div>
        <div>
          <svg
            v-if="isMovie"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            class="category__icon"
            role="presentation"
            aria-label="Movie category"
            fill="currentColor"
          >
            <path
              d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            class="category__icon"
            role="presentation"
            aria-label="TV series category"
            fill="currentColor"
          >
            <path
              d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
            />
          </svg>
          {{ cardData.category }}
        </div>
        <div>{{ cardData.rating }}</div>
      </div>
    </div>

    <MediaThumbnail
      :alt="cardData.title"
      :srcs="cardData.thumbnail"
      :group="cardDirection === 'vertical' ? 'regular' : 'trending'"
      class="card__thumbnail"
    />

    <button
      class="card__button"
      type="button"
      :id="`${listName}-play-${slugify(cardData.title)}`"
      @click="handlePlayButtonClick"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        class="play__icon text-preset4"
        role="presentation"
        aria-label="Play media"
        fill="currentColor"
      >
        <path
          d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
        />
      </svg>
      Play
    </button>

    <label class="card__bookmark">
      <input
        class="card__bookmark-checkbox"
        type="checkbox"
        :name="`${listName}-bookmark-${slugify(cardData.title)}`"
        :id="`${listName}-bookmark-${slugify(cardData.title)}`"
        v-model="bookmarkValue"
      />
      <!-- @click="handleBookmarkChecked" -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 14"
        class="bookmark__icon bookmark__icon--unchecked"
        role="img"
        aria-label="Bookmark option"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          d="M1.05762 0.75H10.6094C10.6466 0.75 10.6782 0.757236 10.7109 0.771484L10.7217 0.775391L10.7314 0.779297C10.7986 0.80616 10.8383 0.840443 10.8701 0.886719C10.9028 0.934312 10.917 0.977751 10.917 1.03613V12.9639C10.917 13.0222 10.9028 13.0657 10.8701 13.1133C10.8383 13.1596 10.7986 13.1938 10.7314 13.2207L10.7236 13.2236L10.7158 13.2275C10.7109 13.2296 10.6807 13.2412 10.6094 13.2412C10.5318 13.2412 10.4733 13.225 10.418 13.1885L10.3633 13.1445L6.35742 9.23438L5.83301 8.72363L5.30957 9.23438L1.30273 13.1455C1.21581 13.2264 1.14401 13.2499 1.05762 13.25C1.02036 13.25 0.987856 13.2428 0.955078 13.2285L0.945312 13.2246L0.93457 13.2207L0.852539 13.1738C0.830239 13.1562 0.811855 13.1365 0.795898 13.1133C0.76325 13.0657 0.750034 13.0222 0.75 12.9639V1.03613C0.750034 0.977751 0.76325 0.934311 0.795898 0.886719C0.827746 0.840293 0.867275 0.806216 0.93457 0.779297L0.945312 0.775391L0.955078 0.771484C0.987856 0.757223 1.02036 0.75 1.05762 0.75Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 14"
        class="bookmark__icon bookmark__icon--checked"
        role="img"
        aria-label="Bookmark option checked"
        fill="currentColor"
      >
        <path
          d="M10.6094 0C10.7491 0 10.8828 0.0277594 11.0104 0.0832783C11.2109 0.163472 11.3704 0.289932 11.4889 0.462657C11.6074 0.635382 11.6667 0.826614 11.6667 1.03635V12.9636C11.6667 13.1734 11.6074 13.3646 11.4889 13.5373C11.3704 13.7101 11.2109 13.8365 11.0104 13.9167C10.895 13.9661 10.7613 13.9907 10.6094 13.9907C10.3177 13.9907 10.0655 13.892 9.85286 13.6946L5.83333 9.77132L1.8138 13.6946C1.59505 13.8982 1.34288 14 1.05729 14C0.917535 14 0.783854 13.9722 0.65625 13.9167C0.455729 13.8365 0.296224 13.7101 0.177734 13.5373C0.0592448 13.3646 0 13.1734 0 12.9636V1.03635C0 0.826614 0.0592448 0.635382 0.177734 0.462657C0.296224 0.289932 0.455729 0.163472 0.65625 0.0832783C0.783854 0.0277594 0.917535 0 1.05729 0H10.6094Z"
        />
      </svg>
    </label>
  </div>
</template>

<style scoped>
.card {
  --bookmark-margin-inline: var(--space-100); /* (m) 8px -> (t) 16px */
  --bookmark-margin-block: var(--space-100); /* (m) 8px -> (t) 16px */

  position: relative;
  display: grid;
  grid-template-areas:
    'thumbnail'
    'text';
  row-gap: var(--space-100);
}

.card--horizontal {
  --info-padding-inline: var(--space-200); /* (m) 16px -> (t) 24px */
  --info-padding-block: var(--space-200); /* 16px */
  inline-size: 15rem; /* (m) 240px -> (t) 470px */
  grid-template-rows: 1fr min-content;
}

.card__text {
  position: relative;
  grid-area: text;
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
}

.card--horizontal > .card__text {
  padding-inline: var(--info-padding-inline);
  padding-block: var(--info-padding-block);
  flex-direction: column-reverse;
}

.card--horizontal > .card__text::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient1);
  z-index: -1;
}

.card__thumbnail {
  grid-area: thumbnail;
  z-index: -2;
}

.card__bookmark {
  grid-area: thumbnail;
  align-self: start;
  justify-self: end;

  margin-inline-end: var(--bookmark-margin-inline);
  margin-block-start: var(--bookmark-margin-block);

  aspect-ratio: 1 / 1;
  block-size: var(--space-400);

  cursor: pointer;
  background-color: var(--color-background-bookmark);
  border-radius: var(--br-900);

  display: grid;
  grid-template-areas: 'stack';
  place-items: center;
}

.card__button {
  grid-area: thumbnail;
  align-self: center;
  justify-self: center;

  opacity: 0;

  cursor: pointer;
  background: var(--color-background-play-button);
  border-radius: var(--br-400);

  inline-size: 117px;
  block-size: 48px;
  padding: var(--space-112);

  display: flex;
  align-items: center;
  gap: var(--space-200);
}

.card__button::after {
  content: '';
  position: absolute;
  inset: 0;
}

.card:hover .card__button,
.card:focus-within .card__button {
  opacity: 1;
}

.card--horizontal > .card__thumbnail,
.card--horizontal > .card__button {
  grid-area: unset;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
}

.card__info {
  color: var(--color-text-info);
  display: flex;
  gap: var(--space-100);
}

.card__info > * {
  display: flex;
  align-items: center;
  gap: var(--space-100);
  white-space: nowrap;
}

.card__info > :not(:last-child)::after {
  content: '\00B7';
}

.category__icon {
  block-size: var(--space-125); /* (m) 10px -> 12px */
  inline-size: auto;
}

.card__bookmark > * {
  grid-area: stack;
}

.card__bookmark:hover,
.card__bookmark:focus-within {
  background-color: var(--color-background-bookmark-hover);
}

.card__bookmark:hover svg,
.card__bookmark:focus-within svg {
  color: var(--color-bookmark-hover);
}

.card__bookmark:focus-within {
  outline-offset: 2px;
  outline: 2px dashed var(--color-text-primary);
}

.card__bookmark-checkbox {
  cursor: pointer;
  padding: 0;
  margin: 0;
  opacity: 0;
  block-size: 100%;
  inline-size: 100%;
  z-index: 1;
}

.bookmark__icon {
  block-size: 14px;
  inline-size: auto;
}

.bookmark__icon--checked {
  display: none;
}

.card__bookmark:has(:checked) .bookmark__icon--unchecked {
  display: none;
}

.card__bookmark:has(:checked) .bookmark__icon--checked {
  display: block;
}

.play__icon {
  max-block-size: 100%;
}

.card__button:focus-visible {
  outline-offset: 2px;
  outline: 2px dashed var(--color-text-primary);
}

/* viewport: mobile -> tablet */
@media (min-width: 40rem) {
  .card {
    --bookmark-margin-inline: var(--space-200); /* (m) 8px -> (t) 16px */
    --bookmark-margin-block: var(--space-200); /* (m) 8px -> (t) 16px */
  }

  .card--horizontal {
    --bookmark-margin-inline: var(--space-300); /* (m) 8px -> (t) 24px */
    --info-padding-inline: var(--space-300); /* (m) 16px -> (t) 24px */
    inline-size: 29.375rem; /* (m) 240px -> (t) 470px */
  }

  .category__icon {
    block-size: var(--space-150); /* (m) 10px -> 12px */
  }
}
</style>
