<template>
    <div class="header-wrap">
        <div  class="min-icon" >
            <img src="../assets/person.jpg" alt="icon" />
        </div>
        <div class="header" id="nav-menu">
            <a href="#" class="logo">MingHe</a>
            <ul class="navbar">
                <!-- <li v-for="item in navList" :key="item.name" 
                :class="[{'active':active==item.enName},nav-item]"
                :style="{'--i':item.index}"
                @click="onClick(item.enName)">{{item.name}}
                </li> -->
                <li class="nav-item" style="--i:1">
                    <router-link :to="{name:'Home'}">Home</router-link>
                </li>
                <li class="nav-item" style="--i:2">
                    <router-link :to="{name:'About'}">About</router-link></li>
                <li class="nav-item" style="--i:3">
                    <router-link :to="{name:'Skills'}">Skills</router-link></li>
                <li class="nav-item" style="--i:4">
                    <router-link :to="{name:'Portfolio'}">Portfolio</router-link></li>
                <li class="nav-item" style="--i:5">
                    <router-link :to="{name:'Contact'}">Contact</router-link></li>
                <div class="nav-s">X</div>
            </ul>
        </div>
        <!-- <div>
            <button @click="showNav=!showNav">123</button>
        </div> -->
    </div>
</template>

<script>

export default {
    data() {
    return { open: false }
  },
  computed: {
    isFolder() {
      return this.treeData.children && this.treeData.children.length > 0;
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) this.open = !this.open;
    }
  }
    // data(){
    //     return{
    //         showNav:'false',
    //     }
    // }
    // data(){
    //     return{
    //         navList: [
    //             {name: "Home",enName: "my-home",index: "1"},
    //             {name: "About",enName: "my-about",index: "2"},
    //             {name: "Skills",enName: "my-skills",index: "3"},
    //             {name: "Portfolio",enName: "my-portfolio",index: "4"},
    //             {name: "Contact",enName: "my-contact",index: "5"}
    //         ],active:'my-home'
    //     }
    // },
    // methods:{
	// 		onClick(enName) {
	// 			this.active =enName;
	// 			this.$emit('click', enName)
	// 		}
	// 	}
}

</script>

<style>
a{
    text-decoration: none;
    color: aliceblue;
}
 .show-nav{
    position: fixed;
    top: 0;
} 
</style>