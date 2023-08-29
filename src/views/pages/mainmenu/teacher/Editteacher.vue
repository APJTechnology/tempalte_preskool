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
                      <h5 class="form-title"><span>Basic Details</span></h5>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Teacher ID <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          placeholder="PRE1234"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Name <span class="login-danger">*</span></label>
                        <b-form-input
                          type="text"
                          class="form-control"
                          placeholder="Vincent"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Gender <span class="login-danger">*</span></label
                        >
                        <vue-select :options="addgender" placeholder="Male" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Date of Birth
                          <span class="login-danger">*</span></label
                        >
                        <b-form-input type="date" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Mobile <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          placeholder="077 3499 9959"
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
                          >Qualification
                          <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          class="form-control"
                          type="text"
                          placeholder="Bachelor of Engineering"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Experience <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          class="form-control"
                          type="text"
                          placeholder="5"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <h5 class="form-title"><span>Login Details</span></h5>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Username <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          placeholder="Vincent"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Email ID <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="email"
                          class="form-control"
                          placeholder="vincent20@gmail.com"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Password <span class="login-danger">*</span></label
                        >
                        <input
                          type="password"
                          class="form-control"
                          value="vincent"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Repeat Password
                          <span class="login-danger">*</span></label
                        >
                        <input
                          type="password"
                          class="form-control"
                          value="vincent"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <h5 class="form-title"><span>Address</span></h5>
                    </div>
                    <div class="col-12">
                      <div class="form-group local-forms">
                        <label
                          >Address <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          placeholder="3979 Ashwood Drive"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>City <span class="login-danger">*</span></label>
                        <b-form-input
                          type="text"
                          class="form-control"
                          placeholder="Omaha"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>State <span class="login-danger">*</span></label>
                        <b-form-input
                          type="text"
                          class="form-control"
                          placeholder="Omaha"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Zip Code <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          placeholder="3979"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Country <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          placeholder="USA"
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
      title: 'Edit Teachers',
      items: [
        {
          text: 'Teachers',
          href: '/',
        },
        {
          text: 'Edit Teachers',
          active: true,
        },
      ],
      addgender: ['Male', 'Female', 'Others'],
    };
  },
  components: {},
  mounted() {},
};
</script>
