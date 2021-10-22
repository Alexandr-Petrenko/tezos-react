const axios = require('axios');

const limit = 15;
const offset = 0;

const apiData = axios.create({
  baseURL: 'https://api.teztracker.com/v2/data/tezos/mainnet/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

const get = async (url) => {
  const response = await apiData(url);
  const { data } = await response;

  return data.slice(offset, limit);
};

const getBlocks = () => get('blocks');

export default getBlocks;
