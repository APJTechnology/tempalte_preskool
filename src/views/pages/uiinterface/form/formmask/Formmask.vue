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
              <div class="card-header">
                <h5 class="card-title mb-2">Form Mask</h5>
                <p class="card-text">
                  Input masks can be used to force the user to enter data
                  conform a specific format. Unlike validation, the user can't
                  enter any other key than the ones specified by the mask.
                </p>
              </div>
              <div class="card-body">
                <b-form action="#">
                  <div class="form-group">
                    <label>Phone</label>
                    <b-form-input
                      type="text"
                      id="phone"
                      class="form-control"
                    ></b-form-input>
                    <span class="form-text text-muted">(999) 999-9999</span>
                  </div>
                  <div class="form-group">
                    <label>Date</label>
                    <b-form-input
                      type="text"
                      id="date"
                      class="form-control"
                    ></b-form-input>
                    <span class="form-text text-muted">dd/mm/yyyy</span>
                  </div>
                  <div class="form-group">
                    <label>SSN field 1</label>
                    <b-form-input
                      type="text"
                      id="ssn"
                      class="form-control"
                    ></b-form-input>
                    <span class="form-text text-muted">e.g "999-99-9999"</span>
                  </div>
                  <div class="form-group">
                    <label>Phone field + ext.</label>
                    <b-form-input
                      type="text"
                      id="phoneExt"
                      class="form-control"
                    ></b-form-input>
                    <span class="form-text text-muted">+40 999 999 999</span>
                  </div>
                  <div class="form-group">
                    <label>Product Key</label>
                    <b-form-input
                      type="text"
                      id="product"
                      class="form-control"
                    ></b-form-input>
                    <span class="form-text text-muted">e.g a*-999-a999</span>
                  </div>
                  <div class="form-group">
                    <label>Currency</label>
                    <b-form-input
                      type="text"
                      id="currency"
                      class="form-control"
                    ></b-form-input>
                    <span class="form-text text-muted">$ 999,999,999.99</span>
                  </div>
                  <div class="form-group">
                    <label>Eye Script</label>
                    <b-form-input
                      type="text"
                      id="eyescript"
                      class="form-control"
                    ></b-form-input>
                    <span class="form-text text-muted">~9.99 ~9.99 999</span>
                  </div>
                  <div class="form-group">
                    <label>Percent</label>
                    <b-form-input
                      type="text"
                      id="pct"
                      class="form-control"
                    ></b-form-input>
                    <span class="form-text text-muted">e.g "99%"</span>
                  </div>
                  <div class="form-group mb-0">
                    <label>Credit Card Number</label>
                    <b-form-input
                      type="text"
                      class="form-control"
                      id="ccn"
                    ></b-form-input>
                    <span class="form-text text-muted"
                      >e.g "999.999.999.9999"</span
                    >
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <layout-footer></layout-footer>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: 'Form Mask',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Form Mask',
          active: true,
        },
      ],
    };
  },
};
</script>
