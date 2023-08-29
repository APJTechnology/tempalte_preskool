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
              <div class="col-lg-6 col-md-8">
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title">Social Link Settings</h5>
                  </div>
                  <div class="card-body pt-0">
                    <form>
                      <div class="settings-form">
                        <div
                          class="links-info"
                          v-for="item in event"
                          :key="item.id"
                        >
                          <div class="row form-row links-cont">
                            <div class="form-group form-placeholder d-flex">
                              <button class="btn social-icon">
                                <i :class="item.icon"></i>
                              </button>
                              <input
                                type="text"
                                class="form-control"
                                :placeholder="item.placeholder"
                              />
                              <div>
                                <a
                                  href="javascript:void(0);"
                                  class="btn trash"
                                  @click="deleteEvent(event)"
                                >
                                  <i class="feather-trash-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <a
                          href="javascript:void(0);"
                          class="btn add-links add-linksone"
                          @click="add()"
                        >
                          <i class="fas fa-plus me-1"></i> Add More
                        </a>
                      </div>
                      <div class="form-group mb-0">
                        <div class="settings-btns">
                          <b-button type="submit" variant="orange"
                            >Submit</b-button
                          >
                          <b-button type="submit" variant="grey"
                            >Cancel</b-button
                          >
                        </div>
                      </div>
                    </form>
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
const event = [
  {
    id: 1,
    icon: 'feather-facebook',
    placeholder: 'https://www.facebook.com',
  },
  {
    id: 2,
    icon: 'feather-twitter',
    placeholder: 'https://www.twitter.com',
  },
  {
    id: 3,
    icon: 'feather-youtube',
    placeholder: 'https://www.youtube.com',
  },
  {
    id: 4,
    icon: 'feather-linkedin',
    placeholder: 'https://www.linkedin.com',
  },
];
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
          text: 'Social Settings',
          active: true,
        },
      ],
      event,
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

  methods: {
    deleteEvent: function (event) {
      this.event.splice(this.event.indexOf(event), 1);
    },
    add() {
      this.event.push({
        id: 5,
        icon: 'feather-github',
        placeholder: 'Social Link',
      });
    },
  },
};
</script>
