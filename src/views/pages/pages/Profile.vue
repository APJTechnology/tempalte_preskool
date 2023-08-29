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
          <div class="col-md-12">
            <div class="profile-header">
              <div class="row align-items-center">
                <div class="col-auto profile-image">
                  <a href="javascript:void(0);">
                    <img
                      class="rounded-circle"
                      alt="User Image"
                      src="../../../assets/img/profiles/avatar-02.jpg"
                    />
                  </a>
                </div>
                <div class="col ms-md-n2 profile-user-info">
                  <h4 class="user-name mb-0">John Doe</h4>
                  <h6 class="text-muted">UI/UX Design Team</h6>
                  <div class="user-Location">
                    <i class="fas fa-map-marker-alt"></i> Florida, United States
                  </div>
                  <div class="about-text">Lorem ipsum dolor sit amet.</div>
                </div>
                <div class="col-auto profile-btn">
                  <router-link to="/profile" class="btn btn-primary">
                    Edit
                  </router-link>
                </div>
              </div>
            </div>
            <div class="profile-menu">
              <ul class="nav nav-tabs nav-tabs-solid">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#per_details_tab"
                    >About</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#password_tab"
                    >Password</a
                  >
                </li>
              </ul>
            </div>
            <div class="tab-content profile-tab-cont">
              <!-- Personal Details Tab -->
              <div class="tab-pane fade show active" id="per_details_tab">
                <!-- Personal Details -->
                <div class="row">
                  <div class="col-lg-9">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between">
                          <span>Personal Details</span>
                          <a class="edit-link" href="javascript:;"
                            ><i class="far fa-edit me-1"></i>Edit</a
                          >
                        </h5>
                        <div class="row">
                          <p
                            class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3"
                          >
                            Name
                          </p>
                          <p class="col-sm-9">John Doe</p>
                        </div>
                        <div class="row">
                          <p
                            class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3"
                          >
                            Date of Birth
                          </p>
                          <p class="col-sm-9">24 Jul 1983</p>
                        </div>
                        <div class="row">
                          <p
                            class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3"
                          >
                            Email ID
                          </p>
                          <p class="col-sm-9">johndoe@example.com</p>
                        </div>
                        <div class="row">
                          <p
                            class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3"
                          >
                            Mobile
                          </p>
                          <p class="col-sm-9">305-310-5857</p>
                        </div>
                        <div class="row">
                          <p class="col-sm-3 text-muted text-sm-end mb-0">
                            Address
                          </p>
                          <p class="col-sm-9 mb-0">
                            4663 Agriculture Lane,<br />
                            Miami,<br />
                            Florida - 33165,<br />
                            United States.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <!-- Account Status -->
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between">
                          <span>Account Status</span>
                          <a class="edit-link" href="javascript:void(0);"
                            ><i class="far fa-edit me-1"></i> Edit</a
                          >
                        </h5>
                        <b-button variant="success" type="button">
                          <i class="fe fe-check-verified"></i> Active
                        </b-button>
                      </div>
                    </div>
                    <!-- /Account Status -->

                    <!-- Skills -->
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between">
                          <span>Skills </span>
                          <a class="edit-link" href="javascript:;"
                            ><i class="far fa-edit me-1"></i> Edit</a
                          >
                        </h5>
                        <div class="skill-tags">
                          <span class="me-1">Html5</span>
                          <span class="me-1">CSS3</span>
                          <span class="me-1">WordPress</span>
                          <span class="me-1">Javascript</span>
                          <span class="me-1">Android</span>
                          <span class="me-1">iOS</span>
                          <span class="me-1">Angular</span>
                          <span class="me-1">PHP</span>
                        </div>
                      </div>
                    </div>
                    <!-- /Skills -->
                  </div>
                </div>
                <!-- /Personal Details -->
              </div>
              <!-- /Personal Details Tab -->

              <!-- Change Password Tab -->
              <div id="password_tab" class="tab-pane fade">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Change Password</h5>
                    <div class="row">
                      <div class="col-md-10 col-lg-6">
                        <b-form>
                          <div class="form-group">
                            <label>Old Password</label>
                            <b-form-input
                              type="password"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label>New Password</label>
                            <b-form-input
                              type="password"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label>Confirm Password</label>
                            <b-form-input
                              type="password"
                              class="form-control"
                            />
                          </div>
                          <b-button variant="primary" type="submit"
                            >Save Changes</b-button
                          >
                        </b-form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Change Password Tab -->
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
      title: 'Profile',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Profile',
          active: true,
        },
      ],
    };
  },
};
</script>
