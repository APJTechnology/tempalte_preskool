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
                    <h5 class="card-title">SEO Settings</h5>
                  </div>
                  <div class="card-body pt-0">
                    <b-form>
                      <div class="settings-form">
                        <div class="form-group form-placeholder">
                          <label
                            >Meta Title <span class="star-red">*</span></label
                          >
                          <b-form-input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label
                            >Meta Keywords
                            <span class="star-red">*</span></label
                          >
                          <vue3-tags-input
                            :tags="tags"
                            placeholder="Meta Keywords"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            >Meta Description
                            <span class="star-red">*</span></label
                          >
                          <textarea class="form-control"></textarea>
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
import Vue3TagsInput from 'vue3-tags-input';
export default {
  components: {
    Vue3TagsInput,
  },
  mounted() {},
  data() {
    return {
      title: 'Settings',
      items: [
        {
          text: 'Settings',
          href: '/index',
        },
        {
          text: 'SEO Settings',
          active: true,
        },
      ],
      tags: ['Lorem', 'Ipsum'],
      myValue: '',
    };
  },
};
</script>
