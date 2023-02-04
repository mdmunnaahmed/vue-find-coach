import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachesDetail.vue';
import CoachList from './pages/coaches/CoachesList.vue';
import CoachRegister from './pages/coaches/CoachesRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestsReceived },
    { path: '/notFound(.*)', component: NotFound },
  ],
});

export default router;
