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
          <div class="col-lg-12">
            <!-- Settings Menu -->
            <settingtab></settingtab>
            <!-- Settings Menu -->

            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title">Localization Details</h5>
                  </div>
                  <div class="card-body pt-0">
                    <b-form>
                      <div class="settings-form">
                        <div class="form-group">
                          <label>Time Zone</label>
                          <vue-select
                            :options="timezone"
                            placeholder="(UTC +5:30) Antarctica/Palme"
                          />
                        </div>
                        <div class="form-group">
                          <label>Date Format</label>
                          <vue-select
                            :options="dateformat"
                            placeholder="15 May 2016"
                          />
                        </div>
                        <div class="form-group">
                          <label>Time Format</label>
                          <vue-select
                            :options="timeformat"
                            placeholder="12 Hours"
                          />
                        </div>
                        <div class="form-group">
                          <label>Currency Symbol</label>
                          <vue-select :options="currency" placeholder="$" />
                        </div>
                        <div class="form-group mb-0">
                          <div class="settings-btns">
                            <b-button type="submit" variant="orange"
                              >Update</b-button
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
      title: 'Settings',
      items: [
        {
          text: 'Settings',
          href: '/index',
        },
        {
          text: 'Localization',
          active: true,
        },
      ],
      timezone: ['(UTC +5:30) Antarctica/Palmer', '(UTC+05:30) India'],
      dateformat: [
        '15 May 2016',
        '15/05/2016',
        '15.05.2016',
        '15-05-2016',
        '05/15/2016',
        '2016/05/15',
        '2016-05-15',
      ],
      timeformat: ['12 Hours', '24 Hours', '36 Hours', '48 Hours', '60 Hours'],
      currency: ['$', '₹', '£', '€'],
    };
  },
  components: {},
  mounted() {},
};
</script>
