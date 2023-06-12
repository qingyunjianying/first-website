<template>
    <div class="index" id="index">
        <vue-header></vue-header>
        <router-view></router-view>
        <my-nav></my-nav>
        <vue-footer></vue-footer>
    </div>
  
</template>

<script>
import VueFooter from '../components/VueFooter.vue'; 
// import MyHome from './components/view/Home.vue';
import MyNav from '../components/Nav.vue';
import VueHeader from '../components/VueHeader.vue';
export default {
name: 'index',
components: {
    // MyHome,
    MyNav,
    VueFooter,
    VueHeader

  }
}
</script>

<style>

</style>