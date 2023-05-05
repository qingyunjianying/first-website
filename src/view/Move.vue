.<template>
    <div class="move">
        <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation" />
    </div>

</template>

<script>
import * as animationData from '../assets/json/dlf10_IJpMIV0zMj.json';

export default {
  data(){
    return {
        defaultOptions: { animationData: animationData },
        animationSpeed: 1,
        anim: {}
    }
},

//第四步：定义方法
methods: {
    handleAnimation: function(anim) {
        this.anim = anim;
        console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
}
};

</script>

<style scoped>
.move{
    height: 200px;
    width: 200px;
}

</style>