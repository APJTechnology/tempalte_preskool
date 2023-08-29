<template>
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
              <h1>Sign Up</h1>
              <p class="account-subtitle">
                Enter details to create your account
              </p>

              <!-- Form -->
              <div class="form-group">
                <label>Username <span class="login-danger">*</span></label>
                <b-form-input
                  class="form-control"
                  type="text"
                  placeholder="Name"
                />
                <span class="profile-views"
                  ><i class="fas fa-user-circle"></i
                ></span>
              </div>
              <Form
                class="register"
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="form-group">
                  <label>Email <span class="login-danger">*</span></label>
                  <Field
                    name="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    :class="{ 'is-invalid': errors.email }"
                  />
                  <span class="profile-views"
                    ><i class="fas fa-envelope"></i
                  ></span>
                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="form-group password-icon2">
                  <label>Password <span class="login-danger">*</span></label>
                  <Field
                    v-if="showPassword"
                    name="password"
                    type="text"
                    class="form-control pass-input"
                    placeholder="Password"
                    :class="{ 'is-invalid': errors.password }"
                  />
                  <Field
                    v-else
                    name="password"
                    type="password"
                    class="form-control pass-input"
                    placeholder="Password"
                    :class="{ 'is-invalid': errors.password }"
                  />
                  <span
                    @click="toggleShow"
                    class="profile-views feather-eye toggle-password1"
                    :class="{
                      'feather-eye': showPassword,
                      'feather-eye-off': !showPassword,
                    }"
                  ></span>
                  <div class="invalid-feedback">{{ errors.password }}</div>
                  <div class="emailshow text-danger" id="password"></div>
                </div>
                <div class="form-group password-icon2">
                  <label
                    >Confirm password <span class="login-danger">*</span></label
                  >
                  <Field
                    v-if="showPassword1"
                    name="confirmpassword"
                    type="text"
                    class="form-control pass-input1"
                    placeholder="Confirm Password"
                    :class="{ 'is-invalid': errors.confirmpassword }"
                  />
                  <Field
                    v-else
                    name="confirmpassword"
                    type="password"
                    class="form-control pass-input1"
                    placeholder="Confirm Password"
                    :class="{ 'is-invalid': errors.confirmpassword }"
                  />
                  <span
                    @click="toggleShow1"
                    class="profile-views toggle-password"
                    :class="{
                      'feather-eye': showPassword1,
                      'feather-eye-off': !showPassword1,
                    }"
                  ></span>
                  <div class="invalid-feedback">
                    {{ errors.confirmpassword }}
                  </div>
                  <div class="emailshow text-danger" id="confirmpassword"></div>
                </div>
                <div class="dont-have">
                  Already Registered? <router-link to="/">Login</router-link>
                </div>
                <div class="form-group mb-0">
                  <b-button variant="primary btn-block" type="submit">
                    Register
                  </b-button>
                </div>
              </Form>
              <!-- /Form -->

              <div class="login-or">
                <span class="or-line"></span>
                <span class="span-or">or</span>
              </div>

              <!-- Social Login -->
              <div class="social-login">
                <a href="javascript:;"><i class="fab fa-google-plus-g"></i></a>
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
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { Form, Field } from 'vee-validate';
import { router } from '../../../../router';
import VueRouter from 'vue-router';
import * as Yup from 'yup';
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      showPassword1: false,
      password: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? 'Hide' : 'Show';
    },
    buttonLabel() {
      return this.showPassword1 ? 'Hide' : 'Show';
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
  },
  mounted() {},
  setup() {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmpassword: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Confirm password is required'),
    });
    const onSubmit = (values) => {
      if (values.password === values.confirmpassword) {
        let Rawdata = localStorage.getItem('storedData');
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email == values.email);
        if (Eresult) {
          document.getElementById('email').innerHTML =
            'This email are already exist';
        } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push('/index');
          localStorage.setItem('storedData', jsonData);
        }
      } else {
        document.getElementById('confirmpassword').innerHTML =
          'Password not matching';
      }
    };
    return {
      schema,
      onSubmit,
    };
  },
};
</script>
