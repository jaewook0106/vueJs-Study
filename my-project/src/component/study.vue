<template>
  <div>
    <div>
      <button @click="choice = !choice">클릭</button>
      <div v-if="choice">test</div>
      <div>
        <ul>
          <li v-for="(item, idx) in list" :key="item[idx]">{{item}}</li>
        </ul>
        <p>성능상 key값 설정</p>
        <ul>
          <li v-for="item in space" :key="item.name">
            <span>{{item.name}}</span><span style="margin-left:20px;">{{item.state}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choice:true,
      list:['수박','복숭아','바나나','딸기'],
      space:[
        {
          name:'수성',
          state:'cold,hot'
        },
        {
          name:'금성',
          state:'hot'
        },
        {
          name:'화성',
          state:'cold'
        },

      ]
    }
  },
  computed: {
    
  },

}
</script>

<style>

</style>
