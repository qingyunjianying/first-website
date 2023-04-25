<template>
    <div class="header-wrap">
            <div class="min-icon" id="nav-toggle" @click="show=!show">
                <img src="../assets/person.jpg" alt="icon" />
            </div>
        <div class="header"  id="nav-menu" >
            <a href="#" class="logo">MingHe</a>
            <ul class="navbar">
                <li v-for="item in navList" :key="item.name" 
                :class="[{'active':active==item.enName},nav-item]"
                :style="{'--i':item.index}"
                @click="onClick(item.enName)">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navList: [
                {name: "Home",enName: "my-home",index: "1"},
                {name: "About",enName: "my-about",index: "2"},
                {name: "Skills",enName: "my-skills",index: "3"},
                {name: "Portfolio",enName: "my-portfolio",index: "4"},
                {name: "Contact",enName: "my-contact",index: "5"}
            ],active:'my-home'
        }
    },
    methods:{
			onClick(enName) {
				this.active =enName;
				this.$emit('click', enName)
			}
		}
}
</script>

<style>
</style>