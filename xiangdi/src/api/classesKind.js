import config from './config';

const classesApi = data => new Promise((resolve, reject) => {
  const url = `${config.baseurl}/classification/classifications`;
  fetch(url, {
    body: JSON.stringify(data),
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


export default { classesApi };
