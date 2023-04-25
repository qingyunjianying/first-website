<template>
    <div id="main">
        <div class="main" >
            <div class="display">
                <div class="watch">
                    <p class="date">{{date }}</p>
                    <p class="time">{{time }}</p>
                    <!-- <p class="text">DIGITAL CLOCK with Vue.js</p> -->
                </div>
                <div class="banner">
                    <div class="b-icon"></div>
                    <vue-typed-js
                            class="b-con"
                            :strings="typingTexts"
                            :loop="true"
                            :startDelay="300"
                            :typeSpeed="100"
                            :backSpeed="400"
                            >
                            <span class="typing"></span>
                        </vue-typed-js>

                </div>
            </div>
            <div class="home" id="myHome">
                <div class="it" v-for="item in list" v-bind:key="item.id" :style="{'--i':item.index}">
                    <div class="h-icon">
                        <i class="fa fa-camera-retro fa-lg"></i>
                    </div>
                    <div class="h-con" >{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'myHome',
    data(){
            return{
                list: [
                        { id: 1, name: '个人简介' ,index: 9},
                        { id: 2, name: '导航' ,index: 8},
                        { id: 3, name: '探索' ,index: 7},
                        { id: 4, name: '留言板',index: 6 }
                    ],
                    typingTexts: [
                            "祝彩云生日快乐哦",
                            "亲爱的，我爱你",
                            "梁山伯：英台不是女儿身，因何耳上有环痕",
                            "祝英台：耳环痕有原因，梁兄何必起疑云",
                            "村里酬神多庙会，年年由我扮观音",
                            "梁山伯：我从此不敢看观音",
                            "爱丽丝:我喜欢你,疯帽子",
                            "疯帽子:为什么？",
                            "爱丽丝：因为乌鸦长得像写字台",
                            "疯帽子：为什么乌鸦长得像写字台？",
                            "爱丽丝：因为我喜欢你没有理由"
                            ]
            }
                   
         }
}
</script>
<style>

</style>