import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import IsolaPage from '@/components/IsolaPage.vue';
import HotelsPage from '@/components/HotelsPage.vue';
import CollegamentiPage from '@/components/CollegamentiPage.vue';
import ContattiPage from '@/components/ContattiPage.vue';
import ArcipelagoPage from '@/components/AricipelagoPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/isola',
    name: 'IsolaPage',
    component: IsolaPage,
  },
  {
    path: '/hotels',
    name: 'HotelsPage',
    component: HotelsPage,
  },
  {
    path: '/collegamenti',
    name: 'CollegamentiPage',
    component: CollegamentiPage,
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: ContattiPage,
  },
  {
    path: '/arcipelago',
    name: 'Arcipelago',
    component: ArcipelagoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
