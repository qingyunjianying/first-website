<template>
  <div id="app">
    <!-- <vue-header @click="onClick"></vue-header> -->
    <!-- <vue-header></vue-header> -->
    <router-view></router-view>
    <!-- <my-nav></my-nav> -->
    <!-- <component :is="active"></component> -->
   <!-- <vue-footer></vue-footer> -->
  </div>
</template>

<script>
// import VueFooter from './components/VueFooter.vue'; 
// import MyHome from './components/view/Home.vue';
// import MyNav from './components/Nav.vue';
// import VueHeader from './components/VueHeader.vue';

export default {
  name: 'App',
  // components: {
  //   // MyHome,
  //   MyNav,
  //   VueFooter,
  //   VueHeader

  // }
  // ,data() {
	// 		return {
	// 			active: 'my-home'
	// 		}
	// 	},
	// 	methods: {
	// 		onClick(name) {
	// 			this.active = name
	// 		}
	// 	}
}
</script>

<style>

</style>
