import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://gist.githubusercontent.com/yasaricli/de2282f01c739a5c8fcbffbb9116e277/raw/69d329b80be71c502d4a7c00142a4e324f86d602/hotels.json',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const fetchHotels = async () => {
  return await axios.get(api.baseURL);
};
