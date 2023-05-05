import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import Home from '../view/Home.vue';
// import SliderBar from '../components/Nav.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
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
    // {
    //     path: '/vuemenu1',
    //     name: menu1,
    //     component: () => import('../view/Nav/VueMenu1.vue')
    // },
];
const router = new VueRouter({
    routes
});
export default router;