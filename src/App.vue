<template>
  <div class="container">
    <div id="app">
      <app-header></app-header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'app',
  components: {
    'app-header': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
