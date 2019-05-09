import config from './config';

const pageData = {
  page: 1,
  size: 20,
};
const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${config.baseurl}/products/allProducts`, {
    body: JSON.stringify(pageData),
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  }).then((res) => {
    const result = res.json();
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});


export default { getAllProducts };
