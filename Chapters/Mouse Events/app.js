const app = Vue.createApp({
    data() {
      return {
        x: 0,
        y: 0
      }
    },
    methods: {
        handleEvent(e, data) {
          console.log(e, e.type)
          if(data) {
            console.log(data)
          }
        },
        handleMouseMove(e) {
          this.x = e.offsetX
          this.y = e.offSetY
        }
    }
    
})

app.mount('#app')