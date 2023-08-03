const app = Vue.createApp({
    data(){
      return{
        showBooks: true,
        books: [
          { title:'The Man in the Iron Mask', author: 'Alexandre Dumas', img:'assets/1.jpg', isFav: true },
          { title:'The Lord of the Rings', author: 'John Ronald Reuel Tolkien', img:'assets/2.jpg', isFav: false},
          { title:'Attack on Titan', author: 'Hajime Isayama', img:'assets/3.jpg', isFav: true}
        ]
      }
    },
    methods: {
      toggleFav(book){
         book.isFav = !book.isFav
      }
    },
    computed: {
      filteredBooks(){
         return this.books.filter((book) => book.isFav)
      }
    }
})

app.mount('#app')

//attach a click event to each li tag(for each book)
//when a user clicks an li, toggle the 'isFav' property of that book