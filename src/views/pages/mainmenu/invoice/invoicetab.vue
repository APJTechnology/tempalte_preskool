<template>
  <div class="card invoices-tabs-card border-0">
    <div class="card-body card-body pt-0 pb-0">
      <div class="invoices-main-tabs border-0 pb-0">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-12">
            <div class="invoices-settings-btn invoices-settings-btn-one">
              <router-link
                to="/invoices-settings"
                class="invoices-settings-icon"
              >
                <i class="feather feather-settings"></i>
              </router-link>
              <router-link to="/add-invoice" class="btn">
                <i class="feather feather-plus-circle"></i> New Invoice
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
