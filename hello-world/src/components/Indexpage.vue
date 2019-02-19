<template>
  <div class="hello">
    <div>
      <h1>영화 목록</h1>
      <ul>
        <li v-for="item in movies" :key="item.id">
          <Showpage :input-data="item"></Showpage>
          <!-- <Showpage :input-data="movie"></Showpage>   -->
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>

import Showpage from './Showpage.vue'
import {moviesData} from '../api';
// console.log(moviesData.movies());
// console.log(moviesData.test());
export default {
  name: 'Indexpage',
  components: {
    Showpage
  },
  data(){
    return{
      movies:[]
      // movies:[
      //   {
      //     "id": 1,
      //     "name": "공조",
      //     "year": 2017,
      //     "director": "김성훈",
      //     "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg"
      //   },
      //   {
      //     "id": 2,
      //     "name": "컨택트",
      //     "year": 2017,
      //     "director": "드니 빌뇌브",
      //     "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79437/79437_185.jpg"
      //   }
      // ]
    }
  },
  created() {
    moviesData.movies()
    .then(response => {
      this.movies = response.data
    }).catch(ex =>{
      console.log('err', ex)
      this.movies = []
    })

  },
  computed: {
    
  },
  methods: {
    
  },
  

}
</script>


<style scoped>
  .poster{
    
  }
</style>
