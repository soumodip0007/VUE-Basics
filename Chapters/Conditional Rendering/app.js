const app = Vue.createApp({
    data(){
      return{
        showBooks: true,
        title: 'The Final Empire',
        author: 'Roman Reigns',
        age: 34
      }
    }, 
    methods: {
        toggleShowBooks(){
          this.showBooks = !this.showBooks
        }
    },
})

app.mount('#app')