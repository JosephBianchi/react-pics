import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID 0606c47ff4f79e6bd62851798059ebeec4ecaaa8621d7619176df7353da021ff`
  }
})
