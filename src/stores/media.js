import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { strInStr } from '@/utils/index.js'

export const useMediaStore = defineStore('media', () => {
  // state properties
  const searchString = ref(null)
  const bookmarks = ref([])

  // getters
  const isSearchActive = computed(() => searchString.value)
  const matchesSearch = computed(
    () => (stringToSearch) => strInStr(stringToSearch, searchString.value),
  )
  const findBookmarkIndex = computed(
    () => (title) => bookmarks.value.findIndex((item) => item.title === title),
  )
  const isBookmarked = computed(() => (title) => findBookmarkIndex.value(title) !== -1)

  // actions
  function addBookmark(title) {
    const index = findBookmarkIndex.value(title)
    if (index === -1) bookmarks.value.push({ title })
  }
  function removeBookmark(title) {
    const index = findBookmarkIndex.value(title)
    if (index !== -1) bookmarks.value.splice(index, 1)
  }

  return {
    searchString,
    bookmarks,
    isSearchActive,
    matchesSearch,
    findBookmarkIndex,
    isBookmarked,
    addBookmark,
    removeBookmark,
  }
})
