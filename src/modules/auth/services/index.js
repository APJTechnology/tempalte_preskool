import http from '@/services';

export const login = async ({ email, password }) => {
  return await http.post('/login', { email, password });
};
