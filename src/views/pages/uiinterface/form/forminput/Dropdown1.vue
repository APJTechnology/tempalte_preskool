<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Buttons with dropdowns</h5>
    </div>
    <div class="card-body">
      <b-form action="#">
        <div class="form-group row">
          <label class="col-form-label col-lg-2">Radio and Text Addons</label>
          <div class="col-lg-10">
            <div class="input-group">
              <b-button
                type="button"
                class="btn btn-white dropdown-toggle"
                data-bs-toggle="dropdown"
                >Action</b-button
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0);">Action</a>
                <a class="dropdown-item" href="javascript:void(0);"
                  >Another action</a
                >
                <a class="dropdown-item" href="javascript:void(0);"
                  >Something else here</a
                >
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:void(0);"
                  >Separated link</a
                >
              </div>
              <b-form-input
                type="text"
                class="form-control"
                placeholder="Left dropdown"
              ></b-form-input>
            </div>
          </div>
        </div>

        <div class="form-group row mb-0">
          <label class="col-form-label col-lg-2">Two Addons</label>
          <div class="col-lg-10">
            <div class="input-group">
              <b-form-input
                type="text"
                class="form-control"
                placeholder="Right dropdown"
              ></b-form-input>
              <div class="input-group-append">
                <b-button
                  type="button"
                  class="btn btn-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  >Action</b-button
                >
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="javascript:void(0);">Action</a>
                  <a class="dropdown-item" href="javascript:void(0);"
                    >Another action</a
                  >
                  <a class="dropdown-item" href="javascript:void(0);"
                    >Something else here</a
                  >
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0);"
                    >Separated link</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>
