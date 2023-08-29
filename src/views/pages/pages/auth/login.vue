<template>
  <div>
    <!-- Main Wrapper -->
    <div class="main-wrapper login-body">
      <div class="login-wrapper">
        <div class="container">
          <div class="loginbox">
            <div class="login-left">
              <img
                class="img-fluid"
                src="../../../../assets/img/login.png"
                alt="Logo"
              />
            </div>
            <div class="login-right">
              <div class="login-right-wrap">
                <h1>Welcome to Preskool</h1>
                <p class="account-subtitle">
                  Need an account?
                  <router-link to="register">Sign Up</router-link>
                </p>
                <h2>Sign in</h2>

                <!-- Form -->
                <Form
                  class="login"
                  @submit="onSubmit"
                  :validation-schema="schema"
                  v-slot="{ errors }"
                >
                  <div class="form-group">
                    <label>Username <span class="login-danger">*</span></label>
                    <Field
                      name="email"
                      type="text"
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
                    <label>Password <span class="login-danger">*</span></label>
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
                    <div class="remember-me">
                      <a-checkbox v-model:checked="checked" class="me-2 mb-0">
                        Remember me</a-checkbox
                      >
                    </div>
                    <router-link to="forgot-password"
                      >Forgot Password?</router-link
                    >
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary btn-block">Login</button>
                    <!--                    <b-button class="btn btn-primary btn-block" type="submit"-->
                    <!--                      >Login</b-button>-->
                  </div>
                </Form>
                <!-- /Form -->

                <div class="login-or">
                  <span class="or-line"></span>
                  <span class="span-or">or</span>
                </div>

                <!-- Social Login -->
                <div class="social-login">
                  <a href="javascript:;"
                    ><i class="fab fa-google-plus-g"></i
                  ></a>
                  <a href="javascript:;"><i class="fab fa-facebook-f"></i></a>
                  <a href="javascript:;"><i class="fab fa-twitter"></i></a>
                  <a href="javascript:;"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <!-- /Social Login -->
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
import { router } from '../../../../router';
import VueRouter from 'vue-router';
import { useStore } from 'vuex';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
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
    const onSubmit = (values) => {
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
