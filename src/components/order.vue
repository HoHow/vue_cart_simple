<template>
  <div class="order">
    <h1 class="h1_font">訂單頁</h1>
    <table class="table table-striped">
      <tbody>
         <tr>
          <td>
            <label>姓名：</label>
          </td>
          <td>
            <input name="name" class="email form-control" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
          </td>
        </tr>
        <tr>
          <td>
            <label>電話：</label>
          </td>
          <td>
            <input name="phone" class="email form-control" v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="電話">
          </td> 
        </tr>
        <tr>
          <td>
            <label>Email：</label>
          </td>
          <td>
            <input v-validate="'required|email'" class="email form-control" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
          </td>
        </tr>
        <tr>
          <td>
            <label>地址：</label>
          </td>
          <td>
             <input name="address" class="email form-control" v-model="address" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('address') }" type="text" placeholder="地址">
          </td>
        </tr>
      </tbody>
    </table>
    <div class="order">
      <router-link to="/"><button class="btn btn-warning" @click="sendorder" :disabled="checkempty == true">送出訂單</button></router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      name: '',
      phone: '',
      address: '',
      checkempty: true,
      carts: this.$store.state.cart
    }  
  },
  methods: {
    sendorder: function (){
      
      if(name === '' || phone === '' || address === ''){
        this.checkempty = true
        alert('資料未填')
        
      }
      if(this.checkempty === true){
        return 
      }else{
        this.checkempty === false
        this.$store.state.cart = []
        alert("訂購成功")
      }
    }
  },
  watch: {
    name: function(){
      var vm = this
      if(vm.name == ''){
        vm.checkempty = true
        alert("姓名必填") 
      }else{
        vm.checkempty = false
      }
    },
    phone: function (){
      var vm = this
      if(vm.phone == ''){
        vm.checkempty = true
        alert("電話必填") 
      }else{
        vm.checkempty = false
      }
    }
  }
}
</script>

<style>
.h1_font {
  text-align: center;
}
.is-danger {
  border-color: #ff3860;
}
</style>

