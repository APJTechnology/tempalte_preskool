<template>
  <div class="col-md-6 d-flex">
    <div class="card w-100">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">Display Google Recaptcha</h5>
        <div
          class="status-toggle d-flex justify-content-between align-items-center"
        >
          <input type="checkbox" id="status_5" class="check" checked="" />
          <label for="status_5" class="checktoggle">checkbox</label>
        </div>
      </div>
      <div class="card-body pt-0">
        <b-form>
          <div class="settings-form">
            <div class="form-group form-placeholder">
              <label
                >Google Rechaptcha Site Key
                <span class="star-red">*</span></label
              >
              <b-form-input
                type="text"
                class="form-control"
                placeholder="6LcnPoEaAAAAAF6QhKPZ8V4744yiEnr41li3SYDn"
              />
            </div>
            <div class="form-group form-placeholder">
              <label
                >Google Rechaptcha Secret Key
                <span class="star-red">*</span></label
              >
              <b-form-input
                type="text"
                class="form-control"
                placeholder="6LcnPoEaAAAAACV_xC4jdPqumaYKBnxz9Sj6y0zk"
              />
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
  <div class="col-md-6 d-flex">
    <div class="card w-100">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">Cookies Agreement</h5>
        <div
          class="status-toggle d-flex justify-content-between align-items-center"
        >
          <input type="checkbox" id="status_6" class="check" checked="" />
          <label for="status_6" class="checktoggle">checkbox</label>
        </div>
      </div>
      <div class="card-body pt-0">
        <b-form>
          <div class="settings-form">
            <div class="form-group summernote">
              <label
                >Cookies Agreement Text <span class="star-red">*</span></label
              >
              <SummernoteEditor
                v-model="myValue"
                @update:modelValue="summernoteChange($event)"
                @summernoteImageLinkInsert="summernoteImageLinkInsert"
              />
              <div id="editor"></div>
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
import SummernoteEditor from 'vue3-summernote-editor';
export default {
  components: {
    SummernoteEditor,
  },
  data() {
    return {
      myValue: '',
    };
  },
  methods: {
    summernoteChange(newValue) {
      console.log('summernoteChange', newValue);
    },
    summernoteImageLinkInsert(...args) {
      console.log('summernoteImageLinkInsert()', args);
    },
  },
};
</script>
