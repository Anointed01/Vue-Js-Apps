export default {
    data() {
        return {
            timeout: ''
        }
    },
     methods: {
    update(e) {
      const task = () => ( this.text = e.target.value)
      this.debounce(task, 500)
    }, 
    debounce(func, wait = 1000) {
       clearTimeout(this.timeout)
      setTimeout(func, wait);
    }
  }
}