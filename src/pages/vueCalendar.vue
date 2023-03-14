<template>
  <div class="m-auto mt-20">
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-400 p-3 text-2xl font-extrabold text-white">
    Vue Calendar
  </nav>
    <section class="flex justify-between mx-3 my-4">
        <h2 class="font-bold">{{ currentMonthName }}</h2> 
    <h2 class="font-bold">{{ currentYear }}</h2> 
    </section>
    <section class="flex">
        <p class="px-2 text-2xl text-center font-semibold" style="width: 14.28%;" v-for="day in dayNames" :key="day">{{ day }}</p>
    </section>
    <section class="flex flex-wrap my-4">
        <p class="text-center" style="width: 14.28%;" v-for="num in startDay()" :key="num"></p>
        <p class="text-center font-semibold" style="width: 14.28%;" v-for="num in daysInMonth()" 
        :key="num"
        :class="currentDateClass(num)"> {{ num }}</p>
    </section>
    <section class="flex justify-between mx-3">
        <button class="border rounded px-2 text-lg font-semibold" @click="prev()">Prev</button>
        <button class="border rounded px-2 text-lg font-semibold" @click="next()">Next</button>
    </section>
  </div>
</template>

<script>
export default {
    data () {
   return {
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], 
    currentDate: new Date().getDay(),
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
   }
}, 
methods: {
    daysInMonth () {
        return new Date (this.currentYear, this.currentMonth + 1, 0).getDate()
    },
    startDay (){
        return new Date(this.currentYear, this.currentMonth, 1).getDay()
    }, 
    currentDateClass(num){
        const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
        const currentFullDate = new Date().toDateString();
        return calendarFullDate == currentFullDate? 'text-yellow-600 ': '';
    },
    next () {
        if(this.currentMonth == 11){
            this.currentMonth = 0;
            this.currentYear ++
        } else {
            this.currentMonth++
        }
    },
    prev () {
        if(this.currentMonth == 0){
            this.currentMonth = 11;
            this.currentYear --
        } else {
            this.currentMonth--
        }
    }
},
computed: {

    currentMonthName(){
        return  new Date(this.currentYear, this.currentMonth).toLocaleDateString('Default', {month: 'long'})
    }
}
}
</script>

<style>

</style>