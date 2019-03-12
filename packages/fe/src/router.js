import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/features/home/routes';
import Groups from '@/features/groups/routes';
import Events from '@/features/events/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...Home,
    ...Groups,
    ...Events,
  ],
});
