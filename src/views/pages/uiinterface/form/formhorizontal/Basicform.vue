<template>
  <div class="card-body">
    <b-form action="#">
      <div class="form-group row">
        <label class="col-lg-3 col-form-label">First Name</label>
        <div class="col-lg-9">
          <b-form-input type="text" class="form-control"></b-form-input>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-lg-3 col-form-label">Last Name</label>
        <div class="col-lg-9">
          <b-form-input type="text" class="form-control"></b-form-input>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-lg-3 col-form-label">Email Address</label>
        <div class="col-lg-9">
          <b-form-input type="email" class="form-control"></b-form-input>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-lg-3 col-form-label">Username</label>
        <div class="col-lg-9">
          <b-form-input type="text" class="form-control"></b-form-input>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-lg-3 col-form-label">Password</label>
        <div class="col-lg-9">
          <b-form-input type="password" class="form-control"></b-form-input>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-lg-3 col-form-label">Repeat Password</label>
        <div class="col-lg-9">
          <b-form-input type="password" class="form-control"></b-form-input>
        </div>
      </div>
      <div class="text-end">
        <b-button variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>
