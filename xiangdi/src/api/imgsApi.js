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


export default { GetImgs };
