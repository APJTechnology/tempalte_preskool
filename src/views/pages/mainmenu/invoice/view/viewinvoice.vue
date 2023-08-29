<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="card invoice-info-card">
              <div class="card-body">
                <viewcontent></viewcontent>

                <viewcontent1></viewcontent1>

                <!-- Invoice Item -->
                <viewcontent2></viewcontent2>
                <!-- /Invoice Item -->

                <viewcontent3></viewcontent3>

                <div class="invoice-sign text-end">
                  <img
                    class="img-fluid d-inline-block"
                    src="../../../../../assets/img/signature.png"
                    alt="sign"
                  />
                  <span class="d-block">Harristemp</span>
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
