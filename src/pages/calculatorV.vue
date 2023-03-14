<template>
  <div class="m-auto mt-20">
<nav class="w-full bg-gradient-to-r from-blue-800 to-blue-400 p-3 text-2xl font-extrabold text-white">
   Vue Calculator
  </nav>
  <p class="h-14 w-64 text-3xl font-medium p-2 text-right overflow-x-hidden"
  style="direction:ltr;">{{currentNum}}</p>
  <div class="h-10">
  <small v-if="selectedOperations">{{ prevNum }} {{ selectedOperations }} {{ currentNum }}</small>
  </div>
  <div class="grid grid-cols-4 gap-1">
    <button @click="pressed('1')" class="p-4 rounded border shadow-md text-2xl font-medium">1</button>
    <button @click="pressed('2')" class="p-4 rounded border shadow-md text-2xl font-medium">2</button>
    <button @click="pressed('3')" class="p-4 rounded border shadow-md text-2xl font-medium">3</button>
    <button @click="pressed('+')" class="p-4 rounded border shadow-md text-2xl font-medium">+</button>
    <button @click="pressed('4')" class="p-4 rounded border shadow-md text-2xl font-medium">4</button>
    <button @click="pressed('5')" class="p-4 rounded border shadow-md text-2xl font-medium">5</button>
    <button @click="pressed('6')" class="p-4 rounded border shadow-md text-2xl font-medium">6</button>
    <button @click="pressed('-')" class="p-4 rounded border shadow-md text-2xl font-medium">-</button>
    <button @click="pressed('7')" class="p-4 rounded border shadow-md text-2xl font-medium">7</button>
    <button @click="pressed('8')" class="p-4 rounded border shadow-md text-2xl font-medium">8</button>
    <button @click="pressed('9')" class="p-4 rounded border shadow-md text-2xl font-medium">9</button>
    <button @click="pressed('/')" class="p-4 rounded border shadow-md text-2xl font-medium">/</button>
    <button @click="pressed('c')" class="p-4 rounded border shadow-md text-2xl font-medium">C</button>
    <button @click="pressed('0')" class="p-4 rounded border shadow-md text-2xl font-medium">0</button>
    <button @click="pressed('=')" class="p-4 rounded border shadow-md text-2xl font-medium">=</button>
    <button @click="pressed('*')" class="p-4 rounded border shadow-md text-2xl font-medium">*</button>
   
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useWindowEvent from '../utilities/composition/useWindowEvent'
export default {
    setup() {
    const operations = ['+', '-', '*', '/']
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]
    const currentNum = ref('')
    const prevNum = ref('')
    const selectedOperations = ref('')

        function pressed(value) {
          if (value == '=' || value == 'Enter') calculate()
            else if (value == 'c') clear()
            else if (operations.includes(value)) applyOpertaion(value)
            else if (numbers.includes(value))appendNumber(value);
    }
    function appendNumber(value) {
        currentNum.value = currentNum.value + value
    }

    function applyOpertaion(value) { 
      calculate()
      prevNum.value = currentNum.value
      currentNum.value = ''
      selectedOperations.value = value
    }
    
    function calculate() {
      if (selectedOperations.value == '*') multiply()
      else if (selectedOperations.value == '+') sum()
      else if (selectedOperations.value == '-') substrate()
      else if (selectedOperations.value == '/') divide()

      prevNum.value = ''
      selectedOperations.value = ''
    }

    function multiply() {
    
      currentNum.value = prevNum.value * currentNum.value
    }

   function sum(){
      currentNum.value = +prevNum.value + +currentNum.value
    }
    

   function substrate(){
      currentNum.value = prevNum.value - currentNum.value
    }
    

   const divide = () => currentNum.value = prevNum.value / currentNum.value
   
    function clear() { 
      currentNum.value = ''
    }

    function handleKeyDown(e){
      pressed(e.key)
    }

    useWindowEvent(handleKeyDown)

        return {currentNum, pressed, selectedOperations, prevNum}
    }

}
</script>

<style>

</style>