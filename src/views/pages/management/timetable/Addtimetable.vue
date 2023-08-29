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
                      <h5 class="form-title"><span>Time Table</span></h5>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Teacher Id <span class="login-danger">*</span></label
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
                        <label>Class <span class="login-danger">*</span></label>
                        <b-form-input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Section <span class="login-danger">*</span></label
                        >
                        <b-form-input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Subject <span class="login-danger">*</span></label
                        >
                        <b-form-input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Date <span class="login-danger">*</span></label>
                        <b-form-input type="date" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Start Time <span class="login-danger">*</span></label
                        >
                        <b-form-input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >End Time <span class="login-danger">*</span></label
                        >
                        <b-form-input type="time" class="form-control" />
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
      title: 'Add Time Table',
      items: [
        {
          text: 'Time Table',
          href: '/index',
        },
        {
          text: 'Add Time Table',
          active: true,
        },
      ],
    };
  },
};
</script>
