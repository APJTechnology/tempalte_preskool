import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
  state() {
    return {
      isAuthenticated: false,
      user: {},
    };
  },
});
