<template>
 
  <nav class="py-3 bg-gradient-to-br from-blue-900 to-red-800 text-white text-2xl font-semibold">
    <router-link v-for="list in links" :key="list.link" class="ml-5" :to="list.link">{{list.title}}</router-link>
   
  </nav>
</template>

<script>
export default {
data () {
  return {
    links: [
      {title: 'Home', link:'/'},
      {title: 'ToDo-List', link:'/todoList'}, 
      {title: 'Vue Calendar', link:'/vueCalendar'},
      {title: 'Markdown', link:'/markdown'},
      {title: 'Slide Carousel', link:'/slide'},
      {title: 'Calculator', link:'/calculator'},
      {title: 'UserCrud', link:'/user-crud'},
      {title: 'TensorFlow', link:'/tensorflow'},
  ]
  }
}
}
</script>

<style>

</style>