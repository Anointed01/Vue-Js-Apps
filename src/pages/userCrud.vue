<template>
  <section class="flex w-full">
    <div class="mx-auto">

<!-- Modal toggle -->
<button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Create User
</button>

<!-- Main modal -->
<div id="crud-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="crud-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create User</h3>
                <form class="space-y-6" @submit.prevent="submit">
                    <div>
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="username" v-model="state.form.username" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Username" required>
                    </div>
                   
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" name="email" v-model="state.form.email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required>
                    </div>
                   
                    <div>
                        <label for="avatar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar URL</label>
                        <input type="text" name="avatar" v-model="state.form.url" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="URL" required>
                    </div>
                   
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
                </form>
            </div>
        </div>
    </div>
</div> 

       
        
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Avartar
                </th>
                <th scope="col" class="px-6 py-3">
                     Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in state.users" :key="user._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{user._id}}
                </th>
                <td class="px-6 py-4">
                    <img :src="user.url" class="rounded-full" width="40" height="40" alt="">
                </td>
                <td class="px-6 py-4">
                    {{user.username}}
                </td>
                <td class="px-6 py-4">
                    {{user.email}}
                </td>
                <td class="px-6 py-4 flex">
                    <div class="my-auto">
                            <button type="button" @click="destroy(user._id)" class="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm p-2 mr-2 mb-2">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="flex justify-between my-2">
        <button type="button" @click="prev()" :disabled="state.users.page==1" :class="state.users.page==1?'bg-gray-200':'shadow-md'" class="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Prev</button>
    <button type="button" @click="next()" :disabled="state.users.page==state.users.total_pages" :class="state.users.page==state.users.total_pages?'bg-gray-200':'shadow-md'" class="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Next</button>

    </div>
</div>

    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from 'vue'
import axios from '../plugins/axios'
export default {

    setup() {
        const state = reactive({
            users: [],
            form: {
            username: '',
            email: '',
                url: '',
            }
        });

        onMounted(async() => {
            const { data } = await axios.get(`/users`)
            state.users = data;
        })

        async function prev() {
             const { data } = await axios.get(`/users?page=1`)
            state.users = data;
        }
        async function next() {
             const { data } = await axios.get(`/users?page=2`)
            state.users = data;
        }
        async function submit() {
            const { data } = await axios.post(`/users`, state.form)
            console.log(data)
            state.users.push(data);
            state.form.username = '';
            state.form.email = '';
            state.form.url = '';

        }
        async function destroy(id) {
            await axios.delete(`/users/${id}`);
        state.users = state.users.filter((user)=>{user._id!== id})
        }

        return {state, prev, next, submit, destroy}
    }
}
</script>

<style>

</style> 