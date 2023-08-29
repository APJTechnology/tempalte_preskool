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
                        <span>Holiday Information</span>
                      </h5>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-group">
                        <label>Holiday Id</label>
                        <b-form-input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-group">
                        <label>Holiday Name</label>
                        <b-form-input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-group">
                        <label>Type of Holiday</label>
                        <vue-select
                          :options="addtypeofholiday"
                          placeholder="Select Holiday"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-group">
                        <label>Start Date</label>
                        <b-form-input type="date" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-group">
                        <label>End Date</label>
                        <b-form-input type="date" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12">
                      <b-button type="submit" variant="primary"
                        >Submit</b-button
                      >
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
      title: 'Add Holiday',
      items: [
        {
          text: 'Holiday',
          href: '/index',
        },
        {
          text: 'Add Holiday',
          active: true,
        },
      ],
      addtypeofholiday: [
        'Select Holiday',
        'Public Holiday',
        'College Holiday',
        'Exam Holiday',
        'Others',
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
