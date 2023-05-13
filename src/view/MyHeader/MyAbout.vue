.<template>
  <div class="about-wrap" id="About">
    <div class="main">
      this is about block
      <div>
         <div>{{$store.state.count}}</div>
         <button @click="add">+1</button>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
name:'About',
methods:{
  add(){
    this.$store.commit("increment")
  }
}
}
</script>

<style>

</style>