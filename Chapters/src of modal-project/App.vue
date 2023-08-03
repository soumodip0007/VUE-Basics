<template>
<div>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up Now</a>
        <a href="#">More Information</a>
      </template>
       <h1>Mario Giveaway!</h1>
       <p>Now you can get the power of Mario!</p>
    </Modal>  
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/> -->
    <Modal @close="toggleModalTwo">
       <h1>Sign up to the newsletter</h1>
       <p>For updates and promo codes!</p>
    </Modal>  
  </teleport>
  <button @click.alt="toggleModal">Open Modal (alt)</button>
  <button @click="toggleModalTwo">Open Modal</button>
</div>
</template>

<script>
//create an extra button to open a different modal
//use the same modal component but pass in a different template (slot)
//use a different method (e.g toggleModalTwo) and data (e.g showModalTwo)
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {Modal},
  data() {
    return {
      title: 'My First  VUE App',
      header: 'Sign up for Giveaway!',
      text: 'Grab your powers for half price!',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
      toggleModal(){
        this.showModal = !this.showModal
      },
      toggleModalTwo(){
        this.showModalTwo = !this.showModalTwo
      }
  }
}
</script>

<style>
#app, .modals{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
