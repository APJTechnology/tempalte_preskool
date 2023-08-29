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
                      <h5 class="form-title"><span>Event Information</span></h5>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-group">
                        <label>Event ID</label>
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="1"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-group">
                        <label>Event Name</label>
                        <b-form-input
                          type="text"
                          class="form-control"
                          value="Sports Day"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-group">
                        <label>Event Date</label>
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
      title: 'Edit Event',
      items: [
        {
          text: 'Events',
          href: '/index',
        },
        {
          text: 'Edit Event',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
