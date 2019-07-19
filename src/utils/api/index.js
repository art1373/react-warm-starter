import axios from 'axios';

const timeout = 10 * 1000;

const _instance = axios.create({
  baseURL: `${process.env.API_URL}`,
  timeout,
});

const call = ({ method, url, data }) =>
  _instance
    .request({
      data,
      headers: '',
      method,
      url,
    })
    .then(res => res.data)
    .catch(({ errors }) => errors);

export const get = url => call({ method: 'GET', url });

export const post = (url, data) => call({ data, method: 'POST', url });
