<template>
  <div class="card-body">
    <h5 class="card-title">Personal Information</h5>
    <b-form action="#">
      <div class="row">
        <div class="col-xl-6">
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
            <label class="col-lg-3 col-form-label">Gender</label>
            <div class="col-lg-9">
              <div class="form-check form-check-inline">
                <b-form-input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender_male"
                  value="option1"
                  checked
                ></b-form-input>
                <label class="form-check-label" for="gender_male"> Male </label>
              </div>
              <div class="form-check form-check-inline">
                <b-form-input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender_female"
                  value="option2"
                ></b-form-input>
                <label class="form-check-label" for="gender_female">
                  Female
                </label>
              </div>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Blood Group</label>
            <div class="col-lg-9">
              <vue-select :options="bloodgroup" placeholder="Select" />
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Username</label>
            <div class="col-lg-9">
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Email</label>
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
        </div>
      </div>
      <h5 class="card-title">Address</h5>
      <div class="row">
        <div class="col-xl-6">
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Address Line 1</label>
            <div class="col-lg-9">
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Address Line 2</label>
            <div class="col-lg-9">
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">State</label>
            <div class="col-lg-9">
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">City</label>
            <div class="col-lg-9">
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Country</label>
            <div class="col-lg-9">
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Postal Code</label>
            <div class="col-lg-9">
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
        </div>
      </div>
      <div class="text-end">
        <b-button variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bloodgroup: ['Select', 'A+', 'O+', 'B+', 'AB+'],
    };
  },
  components: {},
  mounted() {},
};
</script>
