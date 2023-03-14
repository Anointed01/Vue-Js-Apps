<template>
  <div class="flex-wrap w-full relative">
    <h1 class="text-5xl font-medium text-center mb-10 text-green-600">Vue Carousel</h1>
    <div class="w-full absolute" v-for="(color, index) in colors" :key="color">
        <Transition>
    <div v-if="currentSlide== index" class="" :class="color" style="height:350px;"></div>
</Transition>
    </div>
   <div class="w-full" style="height: 340px;">
     <div class="w-full justify-center flex absolute bottom-0">
        <div v-for="(dot, index) in colors" :key="dot"
        :class="currentSlide== index? 'bg-gray-700' : 'bg-gray-300'"
        @click="isActive(index)"
        class="w-4 h-4 mx-1 rounded-full bg-black cursor-pointer shadow-md">
    </div> 
     </div>
   </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0,
            slideInterval: '',
            colors: ['bg-green-600', 'bg-blue-600', 'bg-gray-600', 'bg-pink-600', 'bg-orange-600',],
            isSlideActive: true,
    }
    },
    mounted() {
      this.slideInterval =  setInterval(() => {
          this.currentSlide = this.currentSlide == this.colors.length-1 ? 0 : this.currentSlide + 1;
    }, 2000);
    }, 
    beforeUnmount() {
    clearInterval(this.slideInterval)
    },
    methods: {
        isActive(index) {
            this.currentSlide = index;
        }
    }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>px