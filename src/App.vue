<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
}
</script>

<style lang="scss">
$bg-color: #EEEEEE;

body{
  font-family: 'Rubik', sans-serif;
  background-color: $bg-color;
  margin: 0px;
  padding: 0px;
}
</style>
