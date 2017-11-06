<template>
  <div class="product">
    <div class="row">
      <div class="img col-sm-6"> 
        <img v-bind:src="data.img" alt="">
      </div>
      <div class="description col-sm-6"> 
        <p>名稱:{{data.name}}</p>
        <p>價錢:{{data.price}}</p>
        <div class='count'>
          <select v-model="selected">
            <option disabled value="" >請選擇</option>
            <option v-for="count in data.counts" :value="count+1">{{count+1}}</option>
          </select>
          <button type="button" v-on:click="add_cart(data.id)" class="btn btn-danger">加入購物車</button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

import pdata from '../../products_data'
export default {
  name: 'Product',
  data () {
    return {
      data: {
        name: '',
        img: '',
        price: '',
        counts: [],
        totalPrice: '',
        checkItem: false
      },
      selected: ''
    }
  },
  mounted () {
    // call set counts result = 10
    let result = 10
    if(result){
      for(let i=0;i<result;i++){
        this.data.counts.push(i)
      }
    }

    var id = parseInt(this.$route.params.id)
    for (let i = 0; i < pdata.product.length; i++) {
      if (pdata.product[i].id === id) {
        this.data.id = pdata.product[i].id
        this.data.name = pdata.product[i].name
        this.data.img = pdata.product[i].img
        this.data.price = pdata.product[i].price
      }
    }
  },
  methods: {
    add_cart: function (id) {
      let cart = this.$store.state.cart;
      this.checkRepetItem(id,cart);
      
      let num = this.selected;
      if(this.checkItem){
        alert("購物車已有此商品")
        return
      }
      if(!num){
        alert("請輸入數量")
      }else{
      let totalPrice = num * this.data.price
      let obj = {
        id: id,
        name: this.data.name,
        price: this.data.price,
        number: this.selected,
        totalPrice: totalPrice
      }
      this.$store.state.cart.push(obj)
      }
    },
    checkRepetItem: function (id,carts){
      var vm = this
      carts.forEach(function(element) {
        if(id === element.id){
          vm.checkItem = true
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  padding-top: 5%;
  max-height: 400px;
}
.img {
  height: 400px;
}
.description {
  height: 400px;
  text-align: left;
}
.count {
  text-align: left;
  position: absolute;
  top: 50%;
}
</style>


