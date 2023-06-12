<template>
  <div>
    <el-row>
      <el-col
        :span="3"
        v-for="(item, index) in musicList"
        :key="index"
        :offset="index > 0 ? 1 : 1"
      >
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="hover"
          class="m-card"
        >
          <img
            :src="item.picUrl"
            class="image"
          >
          <div class="mu-title">
            <span class="m-title">{{ item.name }}</span>
            <!-- <div class="bottom clearfix"> -->
            <!-- <div></div> -->
            <!-- </div> -->
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      musicList: [],
    };
  },
  mounted() {
    this.$http.get("/personalized?limit=10").then((res) => {
      // console.log(res);
      this.musicList = res.data.result;
    });
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}
.el-card {
  background-color: hsl(0, 0%, 100%, 0.8);
  border: none;
}
.m-card {
  margin-bottom: 2rem;
}
.el-card__body > .mu-title {
  /* padding: 1rem; */
}
.el-card__body > .mu-title > .m-title {
  position: relative;
  height: 3rem;
  font-size: 0.8rem;
  display: flex;
  /* text-indent: 10%; */
  padding: 0 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>