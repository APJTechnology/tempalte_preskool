<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row">
          <div class="col-xl-12">
            <componentheader :title="title" />

            <div class="card">
              <div class="card-body">
                <div class="bank-inner-details">
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label>Title<span class="text-danger">*</span></label>
                        <input
                          type="text"
                          class="form-control"
                          value="All the Lorem Ipsum generators on the Internet"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label>Blog Image</label>
                        <div class="change-photo-btn">
                          <div>
                            <p>Upload File</p>
                          </div>
                          <input type="file" class="upload" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group blogeditor">
                        <label>Description</label>
                        <SummernoteEditor
                          v-model="myValue"
                          @update:modelValue="summernoteChange($event)"
                          @summernoteImageLinkInsert="summernoteImageLinkInsert"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog-categories-btn pt-0">
                <div class="bank-details-btn">
                  <router-link to="/blog" class="btn btn-primary me-2"
                    >Add Post</router-link
                  >
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
import SummernoteEditor from 'vue3-summernote-editor';
export default {
  components: {
    SummernoteEditor,
  },
  data() {
    return {
      myValue: '',
      title: 'Edit Post',
    };
  },
  methods: {
    summernoteChange(newValue) {
      console.log('summernoteChange', newValue);
    },
    summernoteImageLinkInsert(...args) {
      console.log('summernoteImageLinkInsert()', args);
    },
  },
};
</script>
