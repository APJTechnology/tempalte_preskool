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
                <h5 class="card-title">Tax Settings</h5>
              </div>
              <div class="card-body">
                <!-- Form -->
                <b-form action="#" class="invoices-settings-form">
                  <div class="row align-items-center form-group">
                    <label
                      for="name"
                      class="col-sm-3 col-form-label input-label"
                      >Enable Tax</label
                    >
                    <div class="col-sm-9">
                      <label class="custom_check">
                        <input type="checkbox" name="invoice" />
                        <span class="checkmark"></span> Check to enable tax on
                        invoice
                      </label>
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="email"
                      class="col-sm-3 col-form-label input-label"
                      >Tax Percentage</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="row align-items-center form-group">
                    <label
                      for="phone"
                      class="col-sm-3 col-form-label input-label"
                      >GSTIN Number</label
                    >
                    <div class="col-sm-9">
                      <b-form-input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="invoice-setting-btn text-end">
                    <b-button type="submit" variant="btn cancel-btn me-2"
                      >Cancel</b-button
                    >
                    <b-button type="submit" variant="btn btn-primary-save-bg"
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
          text: 'Tax Settings',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
