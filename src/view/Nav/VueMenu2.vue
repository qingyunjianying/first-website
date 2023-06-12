.<template>
  <div class="swipe-main">
    <vue-banner></vue-banner>
    <el-divider content-position="left">热门推荐</el-divider>
    <music-list></music-list>
  </div>
</template>

<script>
import VueBanner from "@/components/music_Item/VueBanner.vue";
import MusicList from "../../components/music_Item/MusicList";
export default {
  name: "VueMenu2",
  components: {
    VueBanner,
    MusicList,
  },
};
</script>

<style>
.swipe-main {
  width: 75%;
  height: 83%;
  background: rgba(173, 172, 157, 0.6);
  position: fixed;
  top: 10%;
  left: 20%;
  padding: 1%;
  overflow: hidden;
  overflow-y: scroll;
}
.swipe-main::-webkit-scrollbar {
  display: none;
}
.el-divider {
  background-color: #20464a;
}
.el-divider__text.is-left {
  background-color: hsla(189, 47%, 19%, 1);
  color: antiquewhite;
  border-radius: 1rem;
  /* z-index: ; */
}
</style>