<template>
  <div id="app">
    <vue-header @click="onClick"></vue-header>
    <my-nav @click="onClick"></my-nav>
    <component :is="active"></component>
   <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue'; 
import MyHome from './components/Home.vue';
import MyNav from './components/Nav.vue';
import VueHeader from './components/VueHeader.vue';
import MyAbout from './components/MyHeader/MyAbout.vue';
import MyContact from './components/MyHeader/MyContact.vue';
import MySkills from './components/MyHeader/MySkills.vue';
import MyPortfolio from './components/MyHeader/MyPortfolio.vue';
import VueMenu1 from './components/Nav/VueMenu1.vue';
import VueMenu3 from './components/Nav/VueMenu3.vue';
import VueMenu2 from './components/Nav/VueMenu2.vue';
import VueServe1 from './components/Nav/VueServe.vue';
import VueServe2 from './components/Nav/VueServe2.vue';
import VueServe3 from './components/Nav/VueServe3.vue';

export default {
  name: 'App',
  components: {
    MyHome,
    MyNav,
    MyFooter,
    VueHeader,
    MyAbout,
    MyContact,
    MySkills,
    MyPortfolio,
    VueMenu1,
    VueMenu2,
    VueMenu3,
    VueServe1,
     VueServe2,
     VueServe3
  }
  ,data() {
			return {
				active: 'my-home'
			}
		},
		methods: {
			onClick(name) {
				this.active = name
			}
		}
}
</script>

<style>

</style>
