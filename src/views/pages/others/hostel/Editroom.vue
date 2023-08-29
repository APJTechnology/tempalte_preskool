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
                      <h5 class="form-title"><span>Room Information</span></h5>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label>Block <span class="login-danger">*</span></label>
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="A Block"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Room No <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="101"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Room Type <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="editroomtype"
                          placeholder="Normal"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >No of Beds <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="5"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Cose per Bed
                          <span class="login-danger">*</span></label
                        >
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="$25"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group local-forms">
                        <label
                          >Availability
                          <span class="login-danger">*</span></label
                        >
                        <vue-select
                          :options="editavailability"
                          placeholder="Available"
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
import Vue from 'vue';
export default {
  data() {
    return {
      editroomtype: ['Select Type', 'Normal', 'AC', 'Suite'],
      editavailability: ['Select Availability', 'Available', 'Not Available'],
      title: 'Edit Rooms',
      items: [
        {
          text: 'Hostel',
          href: '/',
        },
        {
          text: 'Edit Rooms',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
