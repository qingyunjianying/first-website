<template>
    <div id="main">
        <div class="main" >
            <div class="display">
                <div class="watch">
                    
                </div>
                <div class="banner">
                    <div class="b-icon"></div>
                    <!-- <div class="b-con" id="multiple-text">这是一个标题框</div> -->
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
                <div class="it" v-for="item in list" v-bind:key="item.id">
                    <div class="h-icon">
                        <i class="fa fa-camera-retro fa-lg"></i>
                    </div>
                    <div class="h-con">{{item.name}}</div>
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
                        { id: 1, name: '个人简介' },
                        { id: 2, name: '导航' },
                        { id: 3, name: '探索' },
                        { id: 4, name: '留言板' }
                    ],
                    typingTexts: [
                            "欢迎来到我的个人主页",
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