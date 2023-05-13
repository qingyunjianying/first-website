import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../view/Home.vue';
import VueHeader from '../components/VueHeader.vue'
// import Vue from '../components/Nav.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        // redirect: Home,
        component: () => import('../view/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../view/MyHeader/MyAbout.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('../view/MyHeader/MySkills.vue')
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('../view/MyHeader/MyPortfolio.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../view/MyHeader/MyContact.vue')
    },
    {
        path: '/vuemenu1',
        name: 'menu1',
        component: () => import('../view/Nav/VueMenu1.vue')
    },
    {
        path: '/vuemenu2',
        name: 'menu2',
        component: () => import('../view/Nav/VueMenu2.vue')
    },
    {
        path: '/vuemenu3',
        name: 'menu3',
        component: () => import('../view/Nav/VueMenu3.vue')
    },
    {
        path: '/vueserve',
        name: 'serve',
        component: () => import('../view/Nav/VueServe.vue')
    },
    {
        path: 'vueserve2',
        name: 'serve2',
        component: () => import('../view/Nav/VueServe2.vue')
    },
    {
        path: '/vueserve3',
        name: 'serve3',
        component: () => import('../view/Nav/VueServe3.vue')
    },
];
const router = new VueRouter({
    routes
});
export default router;