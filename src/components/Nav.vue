<template>
  <div id="myNav">
    <div class=" wrap">
      <div class="nav ">
        <!-- 按钮 -->
        <div class="btn">
          <div class="btn-item"><i
              class="fa fa-circle"
              style="color: red;"
              aria-hidden="true"
            ></i></div>
          <div class="btn-item"><i
              class="fa fa-circle"
              style="color: orange;"
              aria-hidden="true"
            ></i></div>
          <div class="btn-item"><i
              class="fa fa-circle"
              style="color: green;"
              aria-hidden="true"
            ></i></div>
        </div>
        <!-- 头像 -->
        <div class="icon">
          <div class="img"><img
              src="../assets/person.jpg"
              alt="icon"
            /></div>
          <div class="icon-con">
            <p>Hello</p>
            <h2>Mrs.chia</h2>
          </div>
        </div>
        <div class="line"></div>
        <div class="title">
          <p>menu</p>
        </div>
        <!-- 上菜单 -->
        <div
          class="menu"
          id="menu"
        >
          <ul>
            <!-- <li class="item" v-for="item in menuLi" v-bind:key="item.id"
                        @click="onClick(item.enName)">
                            <div class="light"></div>
                            <div class="icon-l">
                                <i class="fa fa-angellist" aria-hidden="true"></i>	
                            </div>
                            <div class="con nav_link">{{item.name}}</div>
                            
                        </li> -->
            <li class="item">
              <div class="light"></div>
              <div class="icon-l">
                <i
                  class="fa fa-angellist"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="con nav_link">
                <router-link :to="{name:'menu1'}">豆瓣电影</router-link>
              </div>
              <!-- <div class="con nav_link">example</div> -->
            </li>
            <li class="item">
              <div class="light"></div>
              <div class="icon-l">
                <i
                  class="fa fa-angellist"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="con nav_link">
                <router-link :to="{name:'menu2'}">网易云音乐</router-link>
              </div>
            </li>
            <li class="item">
              <div class="light"></div>
              <div class="icon-l">
                <i
                  class="fa fa-angellist"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="con nav_link">
                <router-link :to="{name:'menu3'}">example</router-link>
              </div>
            </li>
            <!-- <router-view></router-view> -->
          </ul>
        </div>
        <div class="line"></div>
        <div class="title">
          <p>Serve</p>
        </div>
        <!-- 功能区 -->
        <div
          class="serve"
          id="serve"
        >
          <ul>
            <li class="item">
              <div class="icon-l">
                <i
                  class="fa fa-connectdevelop"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="con nav_link">
                <router-link :to="{name:'serve'}">example</router-link>
              </div>
            </li>
            <li class="item">
              <div class="icon-l">
                <i
                  class="fa fa-connectdevelop"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="con nav_link">
                <router-link :to="{name:'serve2'}">example</router-link>
              </div>
            </li>
            <li class="item">
              <div class="icon-l">
                <i
                  class="fa fa-connectdevelop"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="con nav_link">
                <router-link :to="{name:'serve3'}">demo汇率计算器</router-link>
              </div>
            </li>

          </ul>
        </div>
        <div
          class="toggle-icon "
          id="nav-close"
        >
          <i class="uil uil-times"></i>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  // name:'myNav',
  // data(){
  //            return{
  //             menuLi: [
  //                 { id: 1, name: 'ex1',enName:'vue-menu1'},
  //                 { id: 2, name: 'ex2' ,enName:'vue-menu2'},
  //                 { id: 3, name: 'ex3',enName:'vue-menu3' }
  //             ],
  //             serLi: [
  //                 { id: 1, name: 'explore' ,enName:'vue-serve1'},
  //                 { id: 2, name: 'explore' ,enName:'vue-serve2'},
  //                 { id: 3, name: 'explore' ,enName:'vue-serve3'}
  //             ]
  //            }
  // },methods:{
  // 		onClick(enName) {
  // 			this.active =enName;
  // 			this.$emit('click', enName)
  // 		}
  // 	}
};
</script>
<style scoped>
.nav > .icon > .img {
  transition: transform 0.5s ease-out;
}
.nav > .icon > .img:hover {
  transform: rotateZ(-360deg);
}
</style>