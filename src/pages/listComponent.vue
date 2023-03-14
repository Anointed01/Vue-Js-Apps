<!-- eslint-disable no-undef -->
<template>
<div class="m-auto mt-20">
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-400 p-3 text-2xl font-extrabold text-white">
    Todo List
  </nav>
    <h2 class="text-center text-rose-900 text-lg font-bold" v-if="showLenght()">TODO LIST <span class="text-blue-600">{{ todoItemsCount}}</span></h2>
<ul>
  <li v-for="(todoItem, index) in todoItems" :key="todoItem.Name" class="text-lg font-medium">
  <div class="flex justify-between">
    <p>{{ todoItem.Name }}</p>
    <button class="text-pink-500" @click="remove(index)">x</button>
  </div>
  </li>
</ul>
<form action="" @submit.prevent="addItem" class="mt-7">
  <span class="text-blue-900 font-bold text-xl">Name:</span>
  <input type="text" class="border rounded p-1 text-l" ref="newItem" name="name" v-model.trim.lazy="item">
  <button type="submit" class="border rounded bg-gradient-to-r from-blue-900 to-pink-500 text-white p-1 font-medium">Todo List +</button>
</form>
</div>
</template>

<script>
  import { onMounted, ref, computed } from "vue";
export default {
  setup() {
    const newItem = ref('')
    const item = ref('');
    const todoItems = ref([{ Name: 'Reading' }, { Name: 'Eating' }, { Name: 'Coding' }]);

    onMounted(() => {
      newItem.value.focus()
    })

    const todoItemsCount = computed ({
      get: () => todoItems.value.length
    })


    function remove (index) {
      todoItems.value = todoItems.value.filter((item, i) =>i !== index)
    }
     function addItem () {
      if(item.value !=='') {
        todoItems.value.unshift({Name: item.value});
       item.value=''
      }
    }

    function showLenght () {
        if (todoItems.value.length > 0) {
            return true;
        }
    }
        

         return {todoItems, item, remove, addItem, showLenght, newItem, todoItemsCount}

  },   
  }


</script>

<style>

</style>