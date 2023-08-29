<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <componentheader :title="title" :items="items" />

        <div class="row">
          <invoicesettingsidebar></invoicesettingsidebar>

          <div class="col-xl-9 col-md-8">
            <div class="card invoices-settings-card">
              <div class="card-header">
                <h5 class="card-title">Bank Settings</h5>
              </div>
              <div class="card-body">
                <!-- Form -->
                <b-form action="#" class="invoices-settings-form">
                  <div class="row align-items-center form-group">
                    <label
                      for="name"
                      class="col-sm-3 col-form-label input-label"
                      >Default Bank Account</label
                    >
                    <div class="col-sm-9">
                      <label class="custom_check">
                        <input type="checkbox" name="invoice" />
                        <span class="checkmark"></span> Check to enable Bank
                        Account default
                      </label>
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="email"
                      class="col-sm-3 col-form-label input-label"
                      >Account Holder Name</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="phone"
                      class="col-sm-3 col-form-label input-label"
                      >Bank name</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="phone"
                      class="col-sm-3 col-form-label input-label"
                      >IFSC Code</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="phone"
                      class="col-sm-3 col-form-label input-label"
                      >Account Number</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="invoice-setting-btn text-end">
                    <b-button type="submit" variant="btn cancel-btn me-2"
                      >Cancel</b-button
                    >
                    <b-button type="submit" variant="primary-save-bg"
                      >Save Changes</b-button
                    >
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
          text: 'Bank settings',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
