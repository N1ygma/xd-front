import config from './config';

const login = data => new Promise((resolve, reject) => {
  fetch(`${config.baseurl}/userapi/login`, {
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


const join = data => new Promise((resolve, reject) => {
  fetch(`${config.baseurl}/userapi/addUser`, {
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

export default { login, join };
