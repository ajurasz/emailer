import axios from 'axios';

export default {
  user: {
    info: () => axios.get('/api/user/info').then(res => res.data),
    logout: () => axios.get('/api/user/logout')
  }
};
