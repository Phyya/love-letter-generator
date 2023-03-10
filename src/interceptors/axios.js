import axios from 'axios';

axios.defaults.baseURL = 'https://api.loveme.hng.tech/';

let refresh = false;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      const response = await axios.post('refresh', {
        refresh_token: localStorage.getItem('refresh_token'),
      }, {credentials:true});

      if (response.status === 200) {
        localStorage.setItem('token', response.data.access_token);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${localStorage.getItem('token')}`;

        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  },
);
