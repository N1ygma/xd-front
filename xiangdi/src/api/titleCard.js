const CardsApi = data => new Promise((resolve, reject) => {
  const url = 'http://yapi.demo.qunar.com/mock/64565/article';
  fetch(url, {
    body: JSON.stringify(data),
    method: 'GET',
    mode: 'cors',

  }).then((res) => {
    const result = res.json();
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});


export default { CardsApi };
