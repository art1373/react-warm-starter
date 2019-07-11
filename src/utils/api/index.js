import axios from 'axios';

const timeout = 10 * 1000;

const _instance = axios.create({
  baseURL: `${process.env.API_URL}`,
  timeout,
});

const call = options => {
  const { method, url, data } = options;

  return _instance
    .request({
      data,
      headers: '',
      method,
      url,
    })
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const get = (url, data) => call({ data, method: 'GET', url });

export const post = (url, data) => call({ data, method: 'POST', url });
