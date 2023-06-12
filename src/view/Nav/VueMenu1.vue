.<template>
  <div class="vue-menu1">
    <div class="film">
      <h1>豆瓣电影 Top 250</h1>
      <el-divider content-position="left">热门电影</el-divider>
      <film-item></film-item>
    </div>
  </div>

</template>

<script>
import FilmItem from "@/components/film-Item/FilmItem.vue";
export default {
  components: {
    FilmItem,
  },
};
</script>

<style>
.film {
  width: 75%;
  height: 83%;
  background: rgba(173, 172, 157, 0.6);
  position: fixed;
  top: 10%;
  left: 20%;
  padding: 1%;
  overflow: hidden;
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