<template>
  <div class="col-md-6">
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">Stripe</h5>
        <div
          class="status-toggle d-flex justify-content-between align-items-center"
        >
          <input type="checkbox" id="status_2" class="check" checked="" />
          <label for="status_2" class="checktoggle">checkbox</label>
        </div>
      </div>
      <div class="card-body pt-0">
        <b-form>
          <div class="settings-form">
            <div class="form-group">
              <p class="pay-cont">Stripe Option</p>
              <label class="custom_radio me-4">
                <input type="radio" name="budget" value="Yes" checked="" />
                <span class="checkmark"></span> Sandbox
              </label>
              <label class="custom_radio">
                <input type="radio" name="budget" value="Yes" />
                <span class="checkmark"></span> Live
              </label>
            </div>
            <div class="form-group form-placeholder">
              <label>Gateway Name <span class="star-red">*</span></label>
              <b-form-input
                type="text"
                class="form-control"
                placeholder="Stripe"
              />
            </div>
            <div class="form-group form-placeholder">
              <label>API Key <span class="star-red">*</span></label>
              <b-form-input
                type="text"
                class="form-control"
                placeholder="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr"
              />
            </div>
            <div class="form-group form-placeholder">
              <label>Rest Key <span class="star-red">*</span></label>
              <b-form-input
                type="text"
                class="form-control"
                placeholder="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3"
              />
            </div>
            <div class="form-group mb-0">
              <div class="settings-btns">
                <b-button type="submit" variant="orange">Save</b-button>
                <b-button type="submit" variant="grey">Cancel</b-button>
              </div>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
