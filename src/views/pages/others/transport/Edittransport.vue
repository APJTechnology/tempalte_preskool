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
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <b-form>
                  <div class="row">
                    <div class="col-12">
                      <h5 class="form-title">
                        <span>Transport Information</span>
                      </h5>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Route Name <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="New Cross"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Vehicle Number
                          <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="TN 43 AS 5263"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Driver Name
                          <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="Steve"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >License Number
                          <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="REDH968532"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Contact Number
                          <span class="login-danger">*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          value="+91 8974158962"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Driver Address
                          <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="152, South Pole, 2nd Street, 3rd Cross"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="student-submit">
                        <b-button type="submit" variant="primary"
                          >Submit</b-button
                        >
                      </div>
                    </div>
                  </div>
                </b-form>
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
      title: 'Add Transport',
      items: [
        {
          text: 'Transport',
          href: '/',
        },
        {
          text: 'Add Transport',
          active: true,
        },
      ],
    };
  },
};
</script>
