<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <componentheader :title="title" :items="items" />
        <!-- /Page Header -->

        <div class="row">
          <invoicesettingsidebar></invoicesettingsidebar>

          <div class="col-xl-9 col-md-8">
            <div class="card invoices-settings-card">
              <div class="card-header">
                <h5 class="card-title">General Settings</h5>
              </div>
              <div class="card-body">
                <!-- Form -->
                <b-form action="#" class="invoices-settings-form">
                  <div class="row align-items-center form-group">
                    <label
                      for="name"
                      class="col-sm-3 col-form-label input-label"
                      >Invoice Status</label
                    >
                    <div class="col-sm-9">
                      <label class="custom_check">
                        <input type="checkbox" name="invoice" />
                        <span class="checkmark"></span> Change invoice status to
                        paid after an order is complete
                      </label>
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="email"
                      class="col-sm-3 col-form-label input-label"
                      >Invoice Amount</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="phone"
                      class="col-sm-3 col-form-label input-label"
                      >Invoice number starts with</label
                    >
                    <div class="col-sm-9">
                      <b-form-input
                        type="text"
                        class="form-control"
                        placeholder="$"
                        value="$"
                      />
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="addressline1"
                      class="col-sm-3 col-form-label input-label"
                      >Prefix</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="addressline2"
                      class="col-sm-3 col-form-label input-label"
                      >Number Reset</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="zipcode"
                      class="col-sm-3 col-form-label input-label"
                      >Default Due Time</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="zipcode"
                      class="col-sm-3 col-form-label input-label"
                      >Default Digital Signatory</label
                    >
                    <div class="col-sm-9">
                      <div class="invoices-upload-btn">
                        <input
                          type="file"
                          accept="image/*"
                          name="image"
                          id="file"
                          onchange="loadFile(event)"
                          class="hide-input"
                        />
                        <label for="file" class="upload"> upload File </label>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="zipcode"
                      class="col-sm-3 col-form-label input-label"
                      >Default Digital Name</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="invoice-setting-btn text-end">
                    <b-button type="submit" variant="btn cancel-btn me-2"
                      >Cancel</b-button
                    >
                    <b-button type="submit" variant="primary-save-bg">
                      Save Changes
                    </b-button>
                  </div>
                </b-form>
                <!-- /Form -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: 'Invoice settings',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'General settings',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
