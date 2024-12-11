import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectListView from "@/views/project/ProjectListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'project',
      path: '/project',
      redirect: '/list',
      children: [
        {
          name: 'list',
          path: 'list',
          component: () => import('@/views/project/ProjectListView.vue'),
        }
      ]
    },
  ],
})

export default router
