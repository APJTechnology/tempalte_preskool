<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <!-- Blog List -->
        <div class="row">
          <div class="col-md-9">
            <ul class="list-links mb-4">
              <li class="active">
                <router-link to="/blog">Active Blog</router-link>
              </li>
              <li>
                <router-link to="/pending-blog">Pending Blog</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-3 text-md-end">
            <router-link to="/add-blog" class="btn btn-primary btn-blog mb-3"
              ><i class="feather-plus-circle me-1"></i> Add New</router-link
            >
          </div>
        </div>

        <div class="row">
          <!-- Blog Post -->
          <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
            <div class="blog grid-blog flex-fill">
              <div class="blog-image">
                <router-link to="/blog-details"
                  ><img
                    class="img-fluid"
                    src="../../../../assets/img/category/blog-6.jpg"
                    alt="Post Image"
                /></router-link>
                <div class="blog-views">
                  <i class="feather-eye me-1"></i> 225
                </div>
              </div>
              <div class="blog-content">
                <ul class="entry-meta meta-item">
                  <li>
                    <div class="post-author">
                      <router-link to="/profile">
                        <img
                          src="../../../../assets/img/profiles/avatar-01.jpg"
                          alt="Post Author"
                        />
                        <span>
                          <span class="post-title">Vincent</span>
                          <span class="post-date"
                            ><i class="far fa-clock"></i> 4 Dec 2022</span
                          >
                        </span>
                      </router-link>
                    </div>
                  </li>
                </ul>
                <h3 class="blog-title">
                  <router-link to="/blog-details">
                    Learning is an objective, Lorem Ipsum is not</router-link
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div class="row">
                <div class="edit-options">
                  <div class="edit-delete-btn">
                    <router-link to="/edit-blog" class="text-success"
                      ><i class="feather-edit-3 me-1"></i> Edit</router-link
                    >
                    <a
                      href="javascript:;"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      ><i class="feather-trash-2 me-1"></i> Delete</a
                    >
                  </div>
                  <div class="text-end inactive-style">
                    <a
                      href="javascript:void(0);"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                      ><i class="feather-eye-off me-1"></i> Inactive</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog Post -->

          <!-- Blog Post -->
          <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
            <div class="blog grid-blog flex-fill">
              <div class="blog-image">
                <router-link to="/blog-details"
                  ><img
                    class="img-fluid"
                    src="../../../../assets/img/category/blog-2.jpg"
                    alt="Post Image"
                /></router-link>
                <div class="blog-views">
                  <i class="feather-eye me-1"></i> 132
                </div>
              </div>
              <div class="blog-content">
                <ul class="entry-meta meta-item">
                  <li>
                    <div class="post-author">
                      <router-link to="/profile">
                        <img
                          src="../../../../assets/img/profiles/avatar-02.jpg"
                          alt="Post Author"
                        />
                        <span>
                          <span class="post-title">Lois A</span>
                          <span class="post-date"
                            ><i class="far fa-clock"></i> 4 Dec 2022</span
                          >
                        </span>
                      </router-link>
                    </div>
                  </li>
                </ul>
                <h3 class="blog-title">
                  <router-link to="/blog-details">
                    Discussion Increase student learning</router-link
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div class="row">
                <div class="edit-options">
                  <div class="edit-delete-btn">
                    <router-link to="/edit-blog" class="text-success"
                      ><i class="feather-edit-3 me-1"></i> Edit</router-link
                    >
                    <router-link
                      to="/edit-blog"
                      href="javascript:;"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      ><i class="feather-trash-2 me-1"></i>Delete</router-link
                    >
                  </div>
                  <div class="text-end inactive-style">
                    <a
                      href="javascript:void(0);"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                      ><i class="feather-eye-off me-1"></i> Inactive</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog Post -->

          <!-- Blog Post -->
          <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
            <div class="blog grid-blog flex-fill">
              <div class="blog-image">
                <router-link to="/blog-details"
                  ><img
                    class="img-fluid"
                    src="../../../../assets/img/category/blog-3.jpg"
                    alt="Post Image"
                /></router-link>
                <div class="blog-views">
                  <i class="feather-eye me-1"></i> 344
                </div>
              </div>
              <div class="blog-content">
                <ul class="entry-meta meta-item">
                  <li>
                    <div class="post-author">
                      <router-link to="/profile">
                        <img
                          src="../../../../assets/img/profiles/avatar-03.jpg"
                          alt="Post Author"
                        />
                        <span>
                          <span class="post-title">Levell Scott</span>
                          <span class="post-date"
                            ><i class="far fa-clock"></i> 4 Dec 2022</span
                          >
                        </span>
                      </router-link>
                    </div>
                  </li>
                </ul>
                <h3 class="blog-title">
                  <router-link to="/blog-details">
                    Music reduces stress,Lorem Ipsum is not</router-link
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div class="row">
                <div class="edit-options">
                  <div class="edit-delete-btn">
                    <router-link to="/edit-blog" class="text-success"
                      ><i class="feather-edit-3 me-1"></i> Edit</router-link
                    >
                    <router-link
                      to="/edit-blog"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      ><i class="feather-trash-2 me-1"></i> Delete</router-link
                    >
                  </div>
                  <div class="text-end inactive-style">
                    <a
                      href="javascript:void(0);"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                      ><i class="feather-eye-off me-1"></i> Inactive</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog Post -->

          <!-- Blog Post -->
          <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
            <div class="blog grid-blog flex-fill">
              <div class="blog-image">
                <router-link to="/blog-details"
                  ><img
                    class="img-fluid"
                    src="../../../../assets/img/category/blog-4.jpg"
                    alt="Post Image"
                /></router-link>
                <div class="blog-views">
                  <i class="feather-eye me-1"></i> 215
                </div>
              </div>
              <div class="blog-content">
                <ul class="entry-meta meta-item">
                  <li>
                    <div class="post-author">
                      <router-link to="/profile">
                        <img
                          src="../../../../assets/img/profiles/avatar-04.jpg"
                          alt="Post Author"
                        />
                        <span>
                          <span class="post-title">Calvin </span>
                          <span class="post-date"
                            ><i class="far fa-clock"></i> 4 Dec 2022</span
                          >
                        </span>
                      </router-link>
                    </div>
                  </li>
                </ul>
                <h3 class="blog-title">
                  <router-link to="/blog-details">
                    Sports reduced risk of obesity, Lorem Ipsum is not
                  </router-link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div class="row">
                <div class="edit-options">
                  <div class="edit-delete-btn">
                    <router-link to="/edit-blog" class="text-success"
                      ><i class="feather-edit-3 me-1"></i> Edit</router-link
                    >
                    <router-link
                      to="/edit-blog"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      ><i class="feather-trash-2 me-1"></i> Delete</router-link
                    >
                  </div>
                  <div class="text-end inactive-style">
                    <a
                      href="javascript:void(0);"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                      ><i class="feather-eye-off me-1"></i> Inactive</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog Post -->

          <!-- Blog Post -->
          <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
            <div class="blog grid-blog flex-fill">
              <div class="blog-image">
                <router-link to="/blog-details"
                  ><img
                    class="img-fluid"
                    src="../../../../assets/img/category/blog-5.jpg"
                    alt="Post Image"
                /></router-link>
                <div class="blog-views">
                  <i class="feather-eye me-1"></i> 285
                </div>
              </div>
              <div class="blog-content">
                <ul class="entry-meta meta-item">
                  <li>
                    <div class="post-author">
                      <router-link to="/profile">
                        <img
                          src="../../../../assets/img/profiles/avatar-05.jpg"
                          alt="Post Author"
                        />
                        <span>
                          <span class="post-title">Aaliyah </span>
                          <span class="post-date"
                            ><i class="far fa-clock"></i> 4 Dec 2022</span
                          >
                        </span>
                      </router-link>
                    </div>
                  </li>
                </ul>
                <h3 class="blog-title">
                  <router-link to="/blog-details">
                    Yoga can ease arthritis symptoms</router-link
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div class="row">
                <div class="edit-options">
                  <div class="edit-delete-btn">
                    <router-link to="/edit-blog" class="text-success"
                      ><i class="feather-edit-3 me-1"></i> Edit</router-link
                    >
                    <router-link
                      to="/edit-blog"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      ><i class="feather-trash-2 me-1"></i> Delete</router-link
                    >
                  </div>
                  <div class="text-end inactive-style">
                    <a
                      href="javascript:void(0);"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                      ><i class="feather-eye-off me-1"></i> Inactive</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog Post -->

          <!-- Blog Post -->
          <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
            <div class="blog grid-blog flex-fill">
              <div class="blog-image">
                <router-link to="/blog-details"
                  ><img
                    class="img-fluid"
                    src="../../../../assets/img/category/blog-1.jpg"
                    alt="Post Image"
                /></router-link>
                <div class="blog-views">
                  <i class="feather-eye me-1"></i> 654
                </div>
              </div>
              <div class="blog-content">
                <ul class="entry-meta meta-item">
                  <li>
                    <div class="post-author">
                      <router-link to="/profile">
                        <img
                          src="../../../../assets/img/profiles/avatar-06.jpg"
                          alt="Post Author"
                        />
                        <span>
                          <span class="post-title">Malynne </span>
                          <span class="post-date"
                            ><i class="far fa-clock"></i> 4 Dec 2022</span
                          >
                        </span>
                      </router-link>
                    </div>
                  </li>
                </ul>
                <h3 class="blog-title">
                  <router-link to="/blog-details">
                    Education gives Greater Sense of Disciplinet</router-link
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div class="row">
                <div class="edit-options">
                  <div class="edit-delete-btn">
                    <router-link to="/edit-blog" class="text-success"
                      ><i class="feather-edit-3 me-1"></i> Edit</router-link
                    >
                    <router-link
                      to="/edit-blog"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      ><i class="feather-trash-2 me-1"></i> Delete</router-link
                    >
                  </div>
                  <div class="text-end inactive-style">
                    <a
                      href="javascript:void(0);"
                      class="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteNotConfirmModal"
                      ><i class="feather-eye-off me-1"></i> Inactive</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog Post -->
        </div>
        <!-- Pagination -->
        <div class="row">
          <div class="col-md-12">
            <div class="pagination-tab d-flex justify-content-center">
              <a-pagination
                v-model:current="current"
                :total="50"
                show-less-items
              />
            </div>
          </div>
        </div>
        <!-- /Pagination -->
        <!-- Modal -->
        <div
          class="modal fade contentmodal"
          id="deleteModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content doctor-profile">
              <div
                class="modal-header pb-0 border-bottom-0 justify-content-end"
              >
                <button
                  type="button"
                  class="close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="feather-x-circle"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="delete-wrap text-center">
                  <div class="del-icon"><i class="feather-x-circle"></i></div>
                  <h2>Sure you want to delete</h2>
                  <div class="submit-section">
                    <router-link to="/blog" class="btn btn-success me-2"
                      >Yes</router-link
                    >
                    <a
                      href="javascript:;"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                      >No</a
                    >
                  </div>
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
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      current: ref(2),
    };
  },
});
</script>
