<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <componentheader :title="title" :items="items" />
        <studentgroupform />

        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-body">
                <!-- Page Header -->
                <div class="page-header">
                  <div class="row align-items-center">
                    <div class="col">
                      <h3 class="page-title">Teachers</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <router-link
                        to="teachers"
                        class="btn btn-outline-gray me-2"
                        ><i class="feather-list"></i
                      ></router-link>
                      <router-link
                        to="teachers-grid"
                        class="btn btn-outline-gray me-2 active"
                        ><i class="feather-grid"></i
                      ></router-link>
                    </div>
                  </div>
                </div>
                <!-- /Page Header -->

                <div class="student-pro-list">
                  <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div class="card">
                        <div class="card-body">
                          <div class="student-box flex-fill">
                            <div class="student-img">
                              <router-link to="teacher-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-06.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="teacher-details"
                                  >Malynne</router-link
                                >
                              </h5>
                              <h6>Teacher</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div class="card">
                        <div class="card-body">
                          <div class="student-box flex-fill">
                            <div class="student-img">
                              <router-link to="teacher-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-04.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="teacher-details"
                                  >Levell Scott</router-link
                                >
                              </h5>
                              <h6>Teacher</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div class="card">
                        <div class="card-body">
                          <div class="student-box flex-fill">
                            <div class="student-img">
                              <router-link to="teacher-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-03.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="teacher-details"
                                  >Minnie</router-link
                                >
                              </h5>
                              <h6>Teacher</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div class="card">
                        <div class="card-body">
                          <div class="student-box flex-fill">
                            <div class="student-img">
                              <router-link to="teacher-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-02.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="teacher-details"
                                  >Lois A</router-link
                                >
                              </h5>
                              <h6>Teacher</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div class="card">
                        <div class="card-body">
                          <div class="student-box flex-fill">
                            <div class="student-img">
                              <router-link to="teacher-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-08.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="teacher-details"
                                  >Calvin</router-link
                                >
                              </h5>
                              <h6>Teacher</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div class="card">
                        <div class="card-body">
                          <div class="student-box flex-fill">
                            <div class="student-img">
                              <router-link to="teacher-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-09.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="teacher-details"
                                  >Charles Dickens</router-link
                                >
                              </h5>
                              <h6>Teacher</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div class="card">
                        <div class="card-body">
                          <div class="student-box flex-fill">
                            <div class="student-img">
                              <router-link to="teacher-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-10.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="teacher-details"
                                  >Joe Kelley</router-link
                                >
                              </h5>
                              <h6>Teacher</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div class="card">
                        <div class="card-body">
                          <div class="student-box flex-fill">
                            <div class="student-img">
                              <router-link to="teacher-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-08.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="teacher-details"
                                  >Charles Dickens</router-link
                                >
                              </h5>
                              <h6>Teacher</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      title: 'Teachers',
      items: [
        {
          text: 'Dashboard',
          href: '/',
        },
        {
          text: 'Teachers',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
