<template>
  <!-- <div class="row row-cols-3 g-3 my-3">
    <div class="col" v-for="product in sortProducts" :key="product.id"> -->

  <div class="card">
    <img :src="product.imageUrl" class="card-img-top" alt="product.title" />
    <div class="card-body">
      <h6 class="card-title">
        {{ product.title }}
        <span class="float-end">$ {{ product.price }}</span>
      </h6>
      <input type="number" class="form-control mb-2" min="1" max="20" v-model.number="num">
      <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCart(product.id, num)">加入購物車</a>
    </div>
  </div>

  <!-- </div>
  </div> -->
</template>


<script>
// import productsStore from "../store/productsStore.js"
import { mapActions } from 'pinia'
import cartStore from "../stores/cartStore.js";


export default {
  props: ["product"],
  data() {
    return {
      num: 1,
    }
  },
  // computed: {
  //   ...mapState(productsStore, ['sortProducts'])
  // },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>