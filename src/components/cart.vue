<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">商品名稱</th>
          <th scope="col">數量</th>
          <th scope="col">單價</th>
          <th scope="col">總價</th>
          <th scope="col">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cart, index) in carts">
          <th scope="row">{{index+1}}</th>
          <td>{{cart.name}}</td>
          <td><input v-model="cart.number" @change="chagneNumber(cart.id,cart.number)" size="3"></input></td>
          <td>{{cart.price}}</td>
          <td>{{cart.totalPrice}}</td>
          <td><button class="btn btn-danger" @click="deleteItem(index)">刪除</button></td>
        </tr>
      </tbody>
    </table>
    <div class="order">
      共{{carts.length}}件商品，總價:{{orderprice()}}元
      <router-link to="/order"><button class="btn btn-warning" :disabled="hasorder()">結帳</button></router-link>
    </div>
  </div>  
</template>



<script>
  export default {
    name: 'Cart',
    data () {
      return {
        carts: this.$store.state.cart,
        orderprice: function(){
          let price = 0
          this.carts.forEach(function(element){
            price+=element.totalPrice
          })
          return price
        },
        hasorder: function(){
          if(this.carts.length === 0){
            return true
          }
          return false
        }
      }
    },
    methods: {
      deleteItem(id){
        this.carts.splice(id,1)
      },
      chagneNumber(id,num){
        var vm = this
        this.carts.forEach(function(element,index) {
          if(id === element.id){
            vm.carts[index].number = num
            vm.carts[index].totalPrice = num * element.price
          }
        });
        console.log(this.carts)
      }
    },
  }
</script>

<style>
.order{
  padding-top: 10px;
  border-top: 1px solid black;
  text-align: right;
}

</style>

