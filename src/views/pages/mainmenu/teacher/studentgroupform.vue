<template>
  <div class="student-group-form">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="form-group">
          <b-form-input
            type="text"
            class="form-control"
            placeholder="Search by ID ..."
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="form-group">
          <b-form-input
            type="text"
            class="form-control"
            placeholder="Search by Name ..."
          />
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="form-group">
          <b-form-input
            type="text"
            class="form-control"
            placeholder="Search by Phone ..."
          />
        </div>
      </div>
      <div class="col-lg-2">
        <div class="search-student-btn">
          <b-button type="button" variant="primary">Search</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
