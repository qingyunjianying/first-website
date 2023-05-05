.<template>
  <div class="b-shell">
  <div class="shell">
    <input type="radio" name="music" id="item-1" checked>
    <input type="radio" name="music" id="item-2">
    <input type="radio" name="music" id="item-3">
    <div class="cards">
      <label class="card" for="item-1" id="song-1">
        <!-- <img src="../../assets/image/时间煮雨.webp"> -->
      </label>
      <label class="card" for="item-2" id="song-2">
        <img src="../../assets/image/每一刻都是崭新的.webp">
      </label>
      <label class="card" for="item-3" id="song-3">
        <img src="../../assets/image/许巍.webp">
      </label>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.b-shell{
  position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  height: 200px;
}
input[type=radio] {
      display: none;
    }

    .shell {
      width: 70%;
      max-width: 500px;
      max-height: 300px;
      height: 100%;
      transform-style: preserve-3d;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    .cards {
      position: relative;
      width: 100%;
      height: 100%;
      margin-bottom: 1rem;
    }

    .card {
      position: absolute;
      margin: auto;
      width: 60%;
      height: 100%;
      left: 0;
      right: 0;
      transition: transform 0.4s ease;
      cursor: pointer;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }

    #item-1:checked~.cards #song-1,
    #item-2:checked~.cards #song-2,
    #item-3:checked~.cards #song-3 {
      transform: translatex(0) scale(1);
      opacity: 1;
      z-index: 1;
    }

    #item-1:checked~.cards #song-2,
    #item-2:checked~.cards #song-3,
    #item-3:checked~.cards #song-1 {
      transform: translatex(50%) scale(0.8);
      opacity: 0.6;
      z-index: 0;
    }

    #item-1:checked~.cards #song-3,
    #item-2:checked~.cards #song-1,
    #item-3:checked~.cards #song-2 {
      transform: translatex(-50%) scale(0.8);
      opacity: 0.6;
      z-index: 0;
    }
</style>