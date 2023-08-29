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
                      <h5 class="form-title"><span>Fees Information</span></h5>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Student ID <span class="login-danger">*</span></label
                        >
                        <b-form-input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Student Name
                          <span class="login-danger">*</span></label
                        >
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
                          >Fees Type <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="addfeetype"
                          placeholder="Select Type"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Fees Amount
                          <span class="login-danger">*</span></label
                        >
                        <b-form-input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Paid Date <span class="login-danger">*</span></label
                        >
                        <b-form-input type="date" class="form-control" />
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
      addgender: ['Select Gender', 'Female', 'Male', 'Others'],
      addfeetype: [
        'Select Type',
        'Class Test',
        'Exam Fees',
        'Hostel Fees',
        'Transport Fees',
        'Mess Fees',
      ],
      title: 'Add Fees',
      items: [
        {
          text: 'Accounts',
          href: '/index',
        },
        {
          text: 'Add Fees',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
