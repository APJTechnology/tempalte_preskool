<template>
  <div class="col-md-6">
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">Display Facebook Messenger</h5>
        <div
          class="status-toggle d-flex justify-content-between align-items-center"
        >
          <input type="checkbox" id="status_3" class="check" checked="" />
          <label for="status_3" class="checktoggle">checkbox</label>
        </div>
      </div>
      <div class="card-body pt-0">
        <b-form>
          <div class="settings-form">
            <div class="form-group">
              <label>Facebook Messenger <span class="star-red">*</span></label>
              <textarea
                class="form-control"
                placeholder="Facebook Messenger"
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
        <h5 class="card-title">Display Facebook Pixel</h5>
        <div
          class="status-toggle d-flex justify-content-between align-items-center"
        >
          <input type="checkbox" id="status_4" class="check" checked="" />
          <label for="status_4" class="checktoggle">checkbox</label>
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
