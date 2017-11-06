<template>
  <div class="products">
      <div class="item" v-for="item in pdata.product" :key="item.id">
        <a  v-on:click="intoProduct(item.id)">
        <img v-bind:src="item.img" class="img-rounded" alt="Cinque Terre" width="150" height="200">
        <p class="title">名稱:{{item.name}}</p>
        <p class="price">價格:{{item.price}}</p>
        </a>
      </div>
  </div>
</template>

<script>

import pdata from '../../products_data'
export default {
  name: 'Products',
  data () {
    return {
      pdata
    }
  },
  methods: {
    intoProduct: function (id) {
      this.$router.push(`/product/${id}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  /* border: 1px solid black; */
  display: inline-block;
  margin: 10px;
}
</style>
