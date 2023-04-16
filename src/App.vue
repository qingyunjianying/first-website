<template>
  <div id="app">
    <my-header></my-header>
    <my-nav></my-nav>
    <my-home></my-home>
   <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHome from './components/Home.vue';
import MyNav from './components/Nav.vue';
import MyHeader from './components/MyHeader.vue';


export default {
  name: 'App',
  components: {
    MyHome,
    MyNav,
    MyFooter,
    MyHeader
  }
}
</script>

<style>

</style>
