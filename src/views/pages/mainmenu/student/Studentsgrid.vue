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
            <div class="card card-table comman-shadow">
              <div class="card-body pb-0">
                <!-- Page Header -->
                <div class="page-header">
                  <div class="row align-items-center">
                    <div class="col">
                      <h3 class="page-title">Students</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <router-link
                        to="students"
                        class="btn btn-outline-gray me-2"
                        ><i class="feather-list"></i
                      ></router-link>
                      <router-link
                        to="students-grid"
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
                              <router-link to="student-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-03.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="student-details"
                                  >Malynne</router-link
                                >
                              </h5>
                              <h6>Student</h6>
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
                              <router-link to="student-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-04.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="student-details"
                                  >Levell Scott</router-link
                                >
                              </h5>
                              <h6>Student</h6>
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
                              <router-link to="student-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-05.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="student-details"
                                  >Minnie</router-link
                                >
                              </h5>
                              <h6>Student</h6>
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
                              <router-link to="student-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-06.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="student-details"
                                  >Lois A</router-link
                                >
                              </h5>
                              <h6>Student</h6>
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
                              <router-link to="student-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-07.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="student-details"
                                  >Calvin</router-link
                                >
                              </h5>
                              <h6>Student</h6>
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
                              <router-link to="student-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-08.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="student-details"
                                  >Charles Dickens</router-link
                                >
                              </h5>
                              <h6>Student</h6>
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
                              <router-link to="student-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-09.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="student-details"
                                  >Joe Kelley</router-link
                                >
                              </h5>
                              <h6>Student</h6>
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
                              <router-link to="student-details">
                                <img
                                  class="img-fluid"
                                  alt="Students Info"
                                  src="../../../../assets/img/profiles/avatar-10.jpg"
                                />
                              </router-link>
                            </div>
                            <div class="student-content pb-0">
                              <h5>
                                <router-link to="student-details"
                                  >Charles Dickens</router-link
                                >
                              </h5>
                              <h6>Student</h6>
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
      title: 'Students',
      items: [
        {
          text: 'Student',
          href: '/',
        },
        {
          text: 'All Students',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
