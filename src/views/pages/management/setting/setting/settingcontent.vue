<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Website Basic Details</h5>
      </div>
      <div class="card-body pt-0">
        <b-form>
          <div class="settings-form">
            <div class="form-group">
              <label>Website Name <span class="star-red">*</span></label>
              <b-form-input
                type="text"
                class="form-control"
                placeholder="Enter Website Name"
              />
            </div>
            <div class="form-group">
              <p class="settings-label">Logo <span class="star-red">*</span></p>
              <div class="settings-btn">
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  id="file"
                  onchange="loadFile(event)"
                  class="hide-input"
                />
                <label for="file" class="upload">
                  <i class="feather-upload"></i>
                </label>
              </div>
              <h6 class="settings-size">
                Recommended image size is <span>150px x 150px</span>
              </h6>
              <div class="upload-images" v-show="toggle">
                <img src="../../../../../assets/img/logo.png" alt="Image" />
                <a
                  href="javascript:void(0);"
                  class="btn-icon logo-hide-btn"
                  id="hide"
                  @click="toggle = !toggle"
                >
                  <i class="feather-x-circle"></i>
                </a>
              </div>
            </div>
            <div class="form-group">
              <p class="settings-label">
                Favicon <span class="star-red">*</span>
              </p>
              <div class="settings-btn">
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  id="file"
                  onchange="loadFile(event)"
                  class="hide-input"
                />
                <label for="file" class="upload">
                  <i class="feather-upload"></i>
                </label>
              </div>
              <h6 class="settings-size">
                Recommended image size is
                <span>16px x 16px or 32px x 32px</span>
              </h6>
              <h6 class="settings-size mt-1">
                Accepted formats: only png and ico
              </h6>
              <div class="upload-images upload-size" v-show="toggle1">
                <img src="../../../../../assets/img/favicon.png" alt="Image" />
                <a
                  href="javascript:void(0);"
                  class="btn-icon logo-hide-btn"
                  @click="toggle1 = !toggle1"
                >
                  <i class="feather-x-circle"></i>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-5 col-md-6">
                <div class="form-group">
                  <div
                    class="status-toggle d-flex justify-content-between align-items-center"
                  >
                    <p class="mb-0">RTL</p>
                    <input type="checkbox" id="status_1" class="check" />
                    <label for="status_1" class="checktoggle">checkbox</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div class="settings-btns">
                <b-button type="submit" variant="orange">Update</b-button>
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
export default {
  data() {
    return {
      toggle: true,
      toggle1: true,
    };
  },
};
</script>
