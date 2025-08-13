import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Movies from '@/views/MoviesView.vue'
import TVSeries from '@/views/TVSeriesView.vue'
import Bookmarked from '@/views/BookmarkedView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/movies', name: 'Movies', component: Movies },
  { path: '/tv-series', name: 'TV Series', component: TVSeries },
  { path: '/bookmarked', name: 'Bookmarked', component: Bookmarked },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
