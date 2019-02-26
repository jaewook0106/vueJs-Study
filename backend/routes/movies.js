var express = require('express');
var router = express.Router();



var moviesData = [
  {
    "id": 1,
    "name": "공조",
    "year": 2017,
    "director": "김성훈",
    "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg"
  },
  {
    "id": 2,
    "name": "컨택트",
    "year": 2017,
    "director": "드니 빌뇌브",
    "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79437/79437_185.jpg"
  }
]

// app.use(cors());

router.get('/', function(req, res, next) {
  console.log('test',moviesData)
  res.json(moviesData)
});


module.exports = router;