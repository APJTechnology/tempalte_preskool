<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Address Details</h5>
      </div>
      <div class="card-body pt-0">
        <b-form>
          <div class="settings-form">
            <div class="form-group">
              <label>Address Line 1 <span class="star-red">*</span></label>
              <b-form-input
                type="text"
                class="form-control"
                placeholder="Enter Address Line 1"
              />
            </div>
            <div class="form-group">
              <label>Address Line 2 <span class="star-red">*</span></label>
              <b-form-input
                type="text"
                class="form-control"
                placeholder="Enter Address Line 2"
              />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>City <span class="star-red">*</span></label>
                  <b-form-input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>State/Province <span class="star-red">*</span></label>
                  <vue-select :options="state" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Zip/Postal Code <span class="star-red">*</span></label>
                  <b-form-input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Country <span class="star-red">*</span></label>
                  <vue-select :options="country" placeholder="Select" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="settings-btns">
                <b-button type="submit" variant="orange">Update</b-button>
                <b-button type="submit" variant="btn btn-grey">Cancel</b-button>
              </div>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      state: ['Select', 'California', 'Tasmania', 'Auckland', 'Marlborough'],
      country: ['Select', 'India', 'London', 'France', 'USA'],
    };
  },
  components: {},
  mounted() {},
};
</script>
