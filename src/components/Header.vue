<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">購物網首頁</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="products-a nav-link"><router-link to="/products">產品</router-link><span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <router-link to="/cart">購物車({{this.$store.state.cart.length}})</router-link>
      <!-- <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
    </form>
  </div>
</nav>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      cart: this.$store.state.cart
    }
  }
}
</script>

<style scoped>
.fa{
  margin-top: 25%;
}
.products-a a:hover, a:visited, a:link, a:active
{
    text-decoration: none;
    color: gray;
}
</style>

