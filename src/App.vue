<template>
  <!-- General heading  -->
  <genHeader />
  <!-- General heading end -->

<div class="flex mt-20">
  <router-view></router-view>

</div>
</template>

<script>
import genHeader from './components/genHeader.vue'

export default {
  
  components: {genHeader},
 
  // mounted(){ 
  //   setInterval(() => {
  //     this.counter++
  //   }, 1000);
  // }

}
</script>