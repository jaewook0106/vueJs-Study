<template>
  <div class="hello">
    <div>
          <div>{{inputData.id}}</div>
          <div>{{inputData.name}}</div>
          <div>{{inputData.year}}</div>
          <div>{{inputData.director}}</div>
          <div>
            <img :src="inputData.poster" :alt="inputData.name" class="poster">
            {{inputData.poster}}
          </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Showpage',
  props:['inputData'],
  data(){
    return{

    }
  },
  computed: {
    
  },
  

}
</script>



<style lang="scss" scoped>
  
</style>
