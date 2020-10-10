const app = Vue.createApp({
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removedCart(id) {
      this.cart.pop(id);
    },
  },
});

/*

v-bind:title : get directive state
v-on:click : for handling action
v-model : for biinding two element
v-if : for conditional rendering 
v-for : for loop data
:style : nambahin style
:class : manggil class 

:class="{ disabledButton: !inStock }" 
:class="[!inStock ? 'disabledButton' : '']"
*/
