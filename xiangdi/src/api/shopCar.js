import config from './config';

// 获取购物车信息
const getShopCar = data => new Promise((resolve, reject) => {
  const url = `${config.baseurl}/shopcar/getShopCar`;
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
// 添加商品至购物车
const addToShopCar = data => new Promise((resolve, reject) => {
  const url = `${config.baseurl}/shopcar/addShopCar`;
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
// 删除商品至购物车
const deleteShopCar = data => new Promise((resolve, reject) => {
  const url = `${config.baseurl}/shopcar/deleteShopCar`;
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
// 创建订单
const addOrder = data => new Promise((resolve, reject) => {
  const url = `${config.baseurl}/shopcar/addOrder`;
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
// 查询订单
const searchOrder = data => new Promise((resolve, reject) => {
  const url = `${config.baseurl}/shopcar/searchOrders`;
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
// 删除订单
const deleteOrder = data => new Promise((resolve, reject) => {
  const url = `${config.baseurl}/shopcar/deleteOrder`;
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
// 更新订单状态
const updateOrder = data => new Promise((resolve, reject) => {
  const url = `${config.baseurl}/shopcar/updateOrderStatus`;
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

export default {
  getShopCar,
  addToShopCar,
  addOrder,
  searchOrder,
  deleteShopCar,
  deleteOrder,
  updateOrder };
