import axios from 'axios';
// import "regenerator-runtime/runtime";

export const TOKEN_NAME = 'bearer_token';

export function getToken() {
  return localStorage.getItem(TOKEN_NAME);
}

export function getAuthorization() {
  return `Bearer ${getToken()}`;
}

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response && response.status === 500) {
      $swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro. Entre em contato com o admnistrador!',
      });
    }

    if (response && response.status === 422) {
      let message = '';
      Object.keys(response.data.error).forEach((item) => {
        let field = response.data.errors[item];
        for (let i = 0; i < field.length; i++) {
          message += field[i] + '<br />';
        }
      });

      $swal.fire('Erro', message, 'error');
    }

    if (response && response.status === 404) {
      const { error } = response.data;
      $swal.fire({
        icon: 'warning',
        title: 'Erro!',
        text: error,
      });
    }
    return Promise.reject(error);
  }
);

export default http;
