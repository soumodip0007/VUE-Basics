const app = Vue.createApp({
    data(){
      return{
        title: 'The Final Empire',
        author: 'Roman Reigns',
        age: 34
      }
    }, 
    methods: {
        changeTitle(title) {
            //this.title = 'The Lord of the Rings'
            this.title = title
        }
    },
})

app.mount('#app')