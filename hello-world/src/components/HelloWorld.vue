<template>
  <div class="hello">
    <div>
      <ul>
        <li v-for="(item,idx) in list" :key="item[idx]">{{item}}</li>
      </ul>
      <button @click="count +=1">클릭</button>
      <span>{{count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      list:[
        '수박','과자','빵','치킨','소주'
      ],
      count:0
    }
  },
  computed: {
    
  },
  

}
</script>


<style scoped>

</style>
