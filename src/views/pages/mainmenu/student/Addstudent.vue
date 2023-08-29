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
            <div class="card comman-shadow">
              <div class="card-body">
                <b-form>
                  <div class="row">
                    <div class="col-12">
                      <h5 class="form-title student-info">
                        Student Information
                        <span
                          ><a href="javascript:;"
                            ><i class="feather-more-vertical"></i></a
                        ></span>
                      </h5>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >First Name <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          class="form-control"
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Last Name <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          class="form-control"
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Gender <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="Gender"
                          placeholder="Select Gender"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Date of Birth</label>
                        <div>
                          <b-form-input type="date" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Roll </label>
                        <b-form-input
                          class="form-control"
                          type="text"
                          placeholder="Enter Roll Number"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Blood Group
                          <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="Group"
                          placeholder="Please Select Group"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Religion <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="Religion"
                          placeholder="Please Select Religion"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >E-Mail <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          class="form-control"
                          type="text"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Class <span class="login-danger">*</span></label>
                        <vue-select
                          :options="Class"
                          placeholder="Please Select Class"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Section <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="Section"
                          placeholder="Please Select Section"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Admission ID </label>
                        <b-form-input
                          class="form-control"
                          type="text"
                          placeholder="Enter Admission ID"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Phone </label>
                        <b-form-input
                          class="form-control"
                          type="text"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group students-up-files">
                        <label>Upload Student Photo (150px X 150px)</label>
                        <div class="uplod">
                          <label class="file-upload image-upbtn mb-0">
                            Choose File <input type="file" />
                          </label>
                        </div>
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
      title: 'Add Student',
      items: [
        {
          text: 'Student',
          href: '/',
        },
        {
          text: 'Add Students',
          active: true,
        },
      ],
      Gender: ['Select Gender', 'Female', 'Male', 'Others'],
      Group: ['Please Select Group', 'B+', 'A+', 'O+'],
      Religion: ['Please Select Religion', 'Hindu', 'Christian', 'Others'],
      Class: ['Please Select Class', '12', '11', '10'],
      Section: ['Please Select Section', 'B', 'A', 'C'],
    };
  },
  components: {},
  mounted() {},
};
</script>
