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
                <form>
                  <div class="row">
                    <div class="col-12">
                      <h5 class="form-title">
                        <span>Salary Information</span>
                      </h5>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Staff ID <span class="login-danger">*</span></label
                        >
                        <b-form-input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Name <span class="login-danger">*</span></label>
                        <b-form-input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Gender <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="addgender"
                          placeholder="Select Gender"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Joining Date
                          <span class="login-danger">*</span></label
                        >
                        <b-form-input type="date" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Amount <span class="login-danger">*</span></label
                        >
                        <b-form-input type="text" class="form-control" />
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
                </form>
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
      addgender: ['Select Gender', 'Female', 'Male', 'Others'],
      title: 'Add Salary',
      items: [
        {
          text: 'Accounts',
          href: '/index',
        },
        {
          text: 'Add Salary',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
