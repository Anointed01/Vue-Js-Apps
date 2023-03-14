import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/homeComponent.vue'
import TodoList from '../pages/listComponent.vue'
import VueCalendar from '../pages/vueCalendar.vue'
import Markdown from '../pages/markDown.vue'
import slideCarousel from '../pages/slideCarousel.vue'
import Calculator from '../pages/calculatorV.vue'
import UserCrud from '../pages/userCrud.vue'
import TensorFlow from '../pages/tensorFlow.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/todoList', component: TodoList},
    { path: '/vueCalendar', component: VueCalendar},
    { path: '/markdown', component: Markdown},
    { path: '/slide', component: slideCarousel},
    { path: '/calculator', component: Calculator},
    { path: '/user-crud', component: UserCrud},
    { path: '/tensorflow', component: TensorFlow},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;