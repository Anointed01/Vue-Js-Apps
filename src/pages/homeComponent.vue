<template>
  <div class="w-50 mx-10">
    <h1 v-show="true" class="text-red-900 text-3xl font-semibold"> Hello {{name.toUpperCase()}}!</h1>
<p class="text-2xl">Welcome to {{course}} for the first time.</p>
<div class="text-lg" v-if="true" v-html="intro"></div>
<table class="text-lg mt-7">
  <thead class="text-blue-900 border">
    <th>Name</th>
    <th>Age</th>
    <th>Class</th>
  </thead>
  <tbody>
    <tr v-for="student in studentList" :key="student.id">
      <td>{{ student.Name }}</td>
      <td>{{ student.age }}</td>
      <td>{{ student.class }}</td>
    </tr>
  </tbody>
</table>
<div class="grid grid-cols-4 gap-3 w-1/4  bg-red-400">
  <div class="bg-blue-900 p-3" v-for="num in 12" :key="num">{{ num }}</div>

  </div>
  </div>
<!-- <ul>
  <li v-for="student in studentList" :key="student.id">{{ student}}</li>
</ul> -->
<!-- <p><span>Counter is currently </span>{{ counter }}</p> -->
</template>

<script>
export default {

    data() {
        return {
            name: 'Sunday Job Opisa',
      course: 'Vue js tutorial',
      intro: `<p> I pray the Lord help you with speedy understanding and incrase on all sides of this course!</p>`,
      // counter: 0
      studentList: [{Name: 'Sunday', age: 20, class: 'primary 6'},{Name: 'Paul', age:24, class: 'jss1'},],
        }
    }
}
</script>

<style>

</style>