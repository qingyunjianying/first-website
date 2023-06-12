.<template>
  <div class="swipe">
    <el-carousel
      :interval="4000"
      trigger="click"
      type="card"
    >
      <el-carousel-item
        v-for="(image,index) in images"
        :key="index"
      >
        <div
          class="block"
          style="height: 100%;"
        >
          <el-image
            :src="image.pic"
            fit="cover"
          ></el-image>
        </div>
        <!-- <h3 class="medium">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
    <!-- <div class="block">
      <el-carousel trigger="click">
        <el-carousel-item
          v-for="(image,index) in images"
          :key="index"
        >
          <div class="block">
            <el-image
              :src="image.pic"
              :fit="cover"
            ></el-image>
          </div>
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div> -->
  </div>

</template>
  
  <script>
export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.$http.get("/banner?type=2").then((res) => {
      // console.log(res);
      this.images = res.data.banners;
    });
  },
};
</script>
  
  <style>
.el-carousel--horizontal {
  width: 80%;
  margin: 0 auto;
}
.el-carousel__container {
  position: relative;
  height: 10rem;
}
.el-image {
  height: 100%;
  width: 100%;
}
.demonstration {
  display: flex;
  justify-content: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__indicators--horizontal {
  bottom: 0;
  display: flex;
  justify-content: center;
}
</style>