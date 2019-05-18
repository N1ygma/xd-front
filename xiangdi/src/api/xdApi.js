const config={
  baseUrl:"http://localhost:8080"
}
// search all imgs
const GetAllPics = data => new Promise((resolve, reject) => {
  const url = `${config.baseUrl}/api/Photo/findAllPhoto`;
  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },

  }).then((res) => {
    const result = res.json();
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});
// search all articles
const GetAllArticles = data => new Promise((resolve, reject) => {
  const url = `${config.baseUrl}/api/Article/findAllArticle`;
  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },

  }).then((res) => {
    const result = res.json();
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});
// 获取歌手介绍api
const GetSingerInfo = data => new Promise((resolve, reject) => {
  const url = `${config.baseUrl}/api/singer/findSinger`;
  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },

  }).then((res) => {
    const result = res.json();
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});
// 获取图片api
const GetImgs = data => new Promise((resolve, reject) => {
  const url = 'http://106.14.175.12:3002/products/allProducts';
  fetch(url, {
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },

  }).then((res) => {
    const result = res.json();
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});
// 查询所有音乐
const getAllMusics = () => new Promise((resolve, reject) => {
  fetch(`http://localhost:8080/api/song/findAllSong`, {
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },
    method: 'GET',
  }).then((res) => {
    const result = res.json();
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});

export default { GetImgs,GetSingerInfo ,GetAllArticles,GetAllPics,getAllMusics};
