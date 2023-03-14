<template>
  <div class="flex-wrap w-full">
    <h1 class="w-full text-center text-4xl font-medium mb-10 uppercase">markdown app</h1>
  <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
      <textarea name="" id="" class="w-full h-full" :value="text" @input="update"></textarea>
    </article>
    <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
  </section>
</div>
</template>

<script>
import marked from 'marked'
import debounce from '../utilities/mixins/debouce'
export default {
  data() {
    return {
      text: '', 
    // timeout: ''
    }
  },
  mixins: [debounce],
computed: {
      markedText() {
        return marked(this.text)
      }
  }, 
  // methods: {
  //   update(e) {
  //     const task = () => ( this.text = e.target.value)
  //     this.debounce(task, 500)
  //   }, 
  //   debounce(func, wait = 1000) {
  //      clearTimeout(this.timeout)
  //     setTimeout(func, wait);
  //   }
  // }
}
</script>

<style>

</style>