const app = Vue.createApp({
    data(){
      return{
        showBooks: true,
        books: [
          { title:'The Man in the Iron Mask', author: 'Alexandre Dumas'},
          { title:'The Lord of the Rings', author: 'John Ronald Reuel Tolkien'},
          { title:'Attack on Titan', author: 'Hajime Isayama'}
        ]
      }
    }
})

app.mount('#app')