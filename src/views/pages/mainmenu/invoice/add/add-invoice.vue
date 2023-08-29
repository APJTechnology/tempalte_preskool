<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <addinvoice></addinvoice>
        <!-- /Page Header -->

        <div class="row">
          <div class="col-md-12">
            <div class="card invoices-add-card">
              <div class="card-body">
                <form action="#" class="invoices-form">
                  <addcontent></addcontent>
                  <addcontent1></addcontent1>
                  <addtable></addtable>
                  <addcontent2></addcontent2>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->

    <invoicemodal></invoicemodal>
  </div>
  <!-- /Main Wrapper -->
</template>
<script>
export default {
  mounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>
