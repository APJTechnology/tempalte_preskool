import { defineStore } from 'pinia';
import http from '@/services';

export const useUserStore = defineStore('user', {
  state() {
    return {
      users: [
        {
          id: 1,
          name: 'Administrador',
          role: [
            {
              id: 1,
              text: 'ADM',
            },
          ],
          email: 'admin@admin.com',
        },
        {
          id: 2,
          name: 'Adson Jesus',
          role: [
            {
              id: 2,
              text: 'Diretor',
            },
          ],
          email: 'adson@jesus.com',
        },
      ],
    };
  },
  actions: {
    async setUsers({ name, email, roles, password, password_confirmation }) {
      this.users.push({ name, email, roles });

      // let form = { name, email, roles, password, password_confirmation };

      // http.post('/users', form);
    },
  },
  getters: {
    getAllUsers: (state) => state.users,
  },
});
