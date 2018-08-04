import axios from 'axios';

export default {
  user: {
    info: () => axios.get('/api/user/info').then(res => res.data),
    logout: () => axios.get('/api/user/logout'),
    newPayment: token => axios.post('/api/user/new-payment', { token })
  }
};
