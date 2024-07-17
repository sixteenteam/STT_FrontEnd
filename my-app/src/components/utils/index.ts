import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const localStorage = window.localStorage;

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    const returnConfig = { ...config };
    returnConfig.headers['Authorization'] = `Bearer ${accessToken}`;

    return returnConfig;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const {
        response: { status, data },
      } = error;
      if (
        status === 403 ||
        status === 401 ||
        data.message === 'User Not Found'
      ) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        alert('로그인이 만료됐어요. 다시 로그인 해주세요.');

        const goToLogin = setTimeout(() => {
          console.log('이동');
          window.location.href = '/login';
          clearTimeout(goToLogin);
        }, 1000);
      }
    }
    return Promise.reject(error);
  },
);
