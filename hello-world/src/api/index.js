import axios from 'axios'

const request = (mehod,url,data) =>{
  return axios({
    mehod,
    url: url,
    data
  }).then(response => {
    // console.log(response);
    return response
  }).catch(ex => {
    // console.log('err', ex)
    alert('호출 실패')
    throw ex
  })    
}
export const moviesData = {
  movies(){
    const url = 'http://localhost:3000/movies';
    return request('get',url)
  },
  test(){
    const url = 'http://sample.bmaster.kro.kr/contacts_long/search/me'
    return request('get',url)
  }
}

