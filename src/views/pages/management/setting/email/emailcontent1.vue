<template>
  <div class="col-md-6">
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">SMTP</h5>
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
            <div class="form-group form-placeholder">
              <label>Email From Address <span class="star-red">*</span></label>
              <b-form-input type="text" class="form-control" />
            </div>
            <div class="form-group form-placeholder">
              <label>Email Password <span class="star-red">*</span></label>
              <b-form-input type="text" class="form-control" />
            </div>
            <div class="form-group form-placeholder">
              <label>Email Host <span class="star-red">*</span></label>
              <b-form-input type="text" class="form-control" />
            </div>
            <div class="form-group form-placeholder">
              <label>Email Port <span class="star-red">*</span></label>
              <b-form-input type="text" class="form-control" />
            </div>
            <div class="form-group mb-0">
              <div class="settings-btns">
                <b-button type="submit" variant="orange">Submit</b-button>
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
