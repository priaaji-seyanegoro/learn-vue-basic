app.component("product-display", {
  props: {
    cart: {
      type: Number,
      required: true,
    },
  },
  template: `
    <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img
          v-bind:src="image"
          :class="{'out-of-stock-img' : inventory <= 0}"
        />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div
          v-for="(variant , index) in variants"
          :key="variant.id"
          @mouseover="updateImage(index)"
          class="color-circle"
          :style="{backgroundColor : variant.color}"
        ></div>
        <button
          class="button"
          @click="addCart"
          :class="[inventory <= cart.length ? 'disabledButton' : '']"
          :disabled="inventory <= cart.length"
        >
          Add to Cart
        </button>
        <button
          class="button"
          :class="[cart.length === 0 ? 'disabledButton' : '']"
          :disabled=" cart.length === 0"
          @click="removeCart"
        >
          Delete to Cart
        </button>
      </div>
    </div>
  </div>
    `,
  data() {
    return {
      brand: "Vue Master",
      product: "Socks",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 10,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    updateImage(index) {
      this.selectedVariant = index;
    },
    addCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeCart() {
      this.$emit("remove-to-cart", this.variants[this.selectedVariant].id);
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    inventory() {
      return this.variants[this.selectedVariant].quantity;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
  },
});
