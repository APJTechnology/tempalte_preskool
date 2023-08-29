<template>
  <div class="col-md-6">
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">Paypal</h5>
        <div
          class="status-toggle d-flex justify-content-between align-items-center"
        >
          <input type="checkbox" id="status_1" class="check" />
          <label for="status_1" class="checktoggle">checkbox</label>
        </div>
      </div>
      <div class="card-body pt-0">
        <b-form>
          <div class="settings-form">
            <div class="form-group">
              <p class="pay-cont">Paypal Option</p>
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
              <label
                >Braintree Tokenization key
                <span class="star-red">*</span></label
              >
              <b-form-input
                type="text"
                class="form-control"
                placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"
              />
            </div>
            <div class="form-group form-placeholder">
              <label
                >Braintree Merchant ID <span class="star-red">*</span></label
              >
              <b-form-input
                type="text"
                class="form-control"
                placeholder="pd6gznv7zbrx9hb8"
              />
            </div>
            <div class="form-group form-placeholder">
              <label
                >Braintree Public key <span class="star-red">*</span></label
              >
              <b-form-input
                type="text"
                class="form-control"
                placeholder="h8bydrz7gcjkp7d4"
              />
            </div>
            <div class="form-group form-placeholder">
              <label
                >Braintree Private key <span class="star-red">*</span></label
              >
              <b-form-input
                type="text"
                class="form-control"
                placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"
              />
            </div>
            <div class="form-group form-placeholder">
              <label>Paypal APP ID <span class="star-red">*</span></label>
              <b-form-input
                type="text"
                class="form-control"
                placeholder="pd6gznv7zbrx9hb8"
              />
            </div>
            <div class="form-group form-placeholder">
              <label>Paypal Secret Key <span class="star-red">*</span></label>
              <b-form-input
                type="text"
                class="form-control"
                placeholder="h8bydrz7gcjkp7d4"
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
