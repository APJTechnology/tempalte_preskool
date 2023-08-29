<script setup>
import { reactive } from 'vue';

const setDefaultForm = () => {
  return {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
};

const form = reactive(setDefaultForm());
</script>

<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card comman-shadow">
        <div class="card-body">
          <b-form @submit.prevent="onSubmit">
            <div class="row">
              <div class="col-12">
                <h5 class="form-title student-info">Informações do Usuário</h5>
              </div>
              <div class="col-12 col-lg-3 col-md-6 col-sm-12">
                <div class="form-group local-forms">
                  <label>Nome <span class="login-danger">*</span></label>
                  <b-form-input
                    class="form-control"
                    type="text"
                    placeholder="Nome"
                    v-model.trim="form.name"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-3 col-md-6 col-sm-12">
                <div class="form-group local-forms">
                  <label>Email <span class="login-danger">*</span></label>
                  <b-form-input
                    class="form-control"
                    type="text"
                    placeholder="Email"
                    v-model.trim="form.email"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-3 col-md-6 col-sm-12">
                <div class="form-group local-forms">
                  <label>Senha <span class="login-danger">*</span></label>
                  <b-form-input
                    class="form-control"
                    type="password"
                    placeholder="Senha"
                    v-model.trim="form.password"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-3 col-md-6 col-sm-12">
                <div class="form-group local-forms">
                  <label>
                    Confirmar senha <span class="login-danger">*</span>
                  </label>
                  <b-form-input
                    class="form-control"
                    type="password"
                    placeholder="Nome"
                    v-model.trim="form.password_confirmation"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="student-submit">
                  <b-button type="submit" variant="primary">Salvar</b-button>
                </div>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
