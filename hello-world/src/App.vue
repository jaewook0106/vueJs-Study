<template>
  <div id="app">
    <Indexpage />
  </div>
</template>

<script>
import Indexpage from './components/Indexpage.vue'


export default {
  name: 'app',
  components: {
    Indexpage
  }
}
</script>

<style>
#app{
  margin-top:50px;
}
</style>
