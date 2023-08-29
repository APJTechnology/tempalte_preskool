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
                      <h5 class="form-title"><span>Book Information</span></h5>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Book ID</label>
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="PRE1534"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Book Name <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="Acoustics"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Language <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="editlanguage"
                          placeholder="English"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Department <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="Science"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Class <span class="login-danger">*</span></label>
                        <vue-select :options="editclass" placeholder="10" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Type <span class="login-danger">*</span></label>
                        <vue-select :options="edittype" placeholder="Book" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Status <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="editstatus"
                          placeholder="In Stock"
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
      title: 'Edit Books',
      items: [
        {
          text: 'Library',
          href: '/index',
        },
        {
          text: 'Edit Books',
          active: true,
        },
      ],
      editlanguage: [
        'Select Language',
        'English',
        'Turkish',
        'Chinese',
        'Spanish',
        'Arabic',
      ],
      editclass: [
        'Select Class',
        'LKG',
        'UKG',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
      ],
      edittype: ['Select Type', 'Book', 'DVD', 'CD', 'Newspaper'],
      editstatus: ['Select Status', 'In Stock', 'Out of Stock'],
    };
  },
  components: {},
  mounted() {},
};
</script>
