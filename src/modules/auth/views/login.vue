<template>
  <div>
    <!-- Main Wrapper -->
    <div class="main-wrapper login-body">
      <div class="login-wrapper">
        <div class="container">
          <div class="loginbox">
            <!-- <div class="login-left">
              <img
                class="img-fluid"
                src="../../../../assets/img/login.png"
                alt="Logo"
              />
            </div> -->
            <div class="login-right">
              <div class="login-right-wrap">
                <h1>ATECH</h1>
                <h2>Login</h2>

                <!-- Form -->
                <Form
                  class="login"
                  @submit="onSubmit"
                  :validation-schema="schema"
                  v-slot="{ errors }"
                >
                  <div class="form-group">
                    <label>Usuário <span class="login-danger">*</span></label>
                    <Field
                      name="email"
                      type="email"
                      value="admin@example.com"
                      class="form-control"
                      :class="{ 'is-invalid': errors.email }"
                    />
                    <span class="profile-views"
                      ><i class="fas fa-user-circle"></i
                    ></span>
                    <div class="invalid-feedback">{{ errors.email }}</div>
                    <div class="emailshow text-danger" id="email"></div>
                  </div>
                  <div class="form-group password-icon">
                    <label>Senha <span class="login-danger">*</span></label>
                    <Field
                      v-if="showPassword"
                      name="password"
                      type="text"
                      value="123456"
                      class="form-control pass-input"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <Field
                      v-else
                      name="password"
                      type="password"
                      value="123456"
                      class="form-control pass-input"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <span
                      @click="toggleShow"
                      class="profile-views toggle-password"
                      :class="{
                        'feather-eye': showPassword,
                        'feather-eye-off': !showPassword,
                      }"
                    ></span>
                    <div class="invalid-feedback">{{ errors.password }}</div>
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                  <div class="forgotpass">
                    <!-- <div class="remember-me">
                      <a-checkbox v-model:checked="checked" class="me-2 mb-0">
                        Remember me</a-checkbox
                      >
                    </div>
                    <router-link to="forgot-password"
                      >Forgot Password?</router-link
                    > -->
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary btn-block">Login</button>
                  </div>
                </Form>
                <!-- /Form -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>
import { ref } from 'vue';
import { router } from '@/router';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { login } from '../services';

export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      password: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? 'Hide' : 'Show';
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  setup() {
    let users = localStorage.getItem('storedData');
    if (users === null) {
      let password = [
        {
          email: 'admin@example.com',
          password: '123456',
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem('storedData', jsonData);
    }
    const schema = Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    });
    const onSubmit = async (values) => {
      const { email, password } = values;
      console.log(process.env);
      const token = await login(values);

      console.log(token);

      document.getElementById('email').innerHTML = '';
      document.getElementById('password').innerHTML = '';
      let data = localStorage.getItem('storedData');
      var Pdata = JSON.parse(data);
      const Eresult = Pdata.find(({ email }) => email === values.email);
      if (Eresult) {
        if (Eresult.password === values.password) {
          router.push('/index');
        } else {
          document.getElementById('password').innerHTML = 'Incorrect password';
        }
      } else {
        document.getElementById('email').innerHTML = 'Email is not valid';
      }
    };
    return {
      schema,
      onSubmit,
      checked: ref(false),
    };
  },
};
</script>
