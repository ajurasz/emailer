import axios from 'axios';

export default {
  user: {
    info: () => axios.get('/api/user/info').then(res => res.data),
    logout: () => axios.get('/api/user/logout')
  },
  wallet: {
    recharge: token => axios.post('/api/wallet/recharge', { token })
  },
  survey: {
    create: survey =>
      axios.post('/api/survey', {
        ...survey,
        recipients: survey.recipients.split(',')
      })
  }
};
