<template>
  <div class="col-md-6">
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">Enable Google Analytics</h5>
        <div
          class="status-toggle d-flex justify-content-between align-items-center"
        >
          <input type="checkbox" id="status_1" class="check" checked="" />
          <label for="status_1" class="checktoggle">checkbox</label>
        </div>
      </div>
      <div class="card-body pt-0">
        <b-form>
          <div class="settings-form">
            <div class="form-group">
              <label>Google Analytics <span class="star-red">*</span></label>
              <textarea
                class="form-control"
                placeholder="Google Analytics"
              ></textarea>
            </div>
            <div class="form-group mb-0">
              <div class="settings-btns">
                <b-button type="submit" variant="orange">Save</b-button>
              </div>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">Enable Google Adsense Code</h5>
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
              <label>Google Adsense Code <span class="star-red">*</span></label>
              <textarea
                class="form-control"
                placeholder="Google Adsense Code"
              ></textarea>
            </div>
            <div class="form-group mb-0">
              <div class="settings-btns">
                <b-button type="submit" variant="orange">Save</b-button>
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
