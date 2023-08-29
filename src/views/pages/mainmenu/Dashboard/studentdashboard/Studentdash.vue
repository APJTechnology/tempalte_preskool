<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <componentheader :title="title" :items="items" />
        </div>
        <!-- /Page Header -->

        <!-- Overview Section -->
        <div class="row">
          <div
            class="col-xl-3 col-sm-6 col-12 d-flex"
            v-for="item in studentdashboard"
            :key="item.id"
          >
            <div class="card bg-comman w-100">
              <div class="card-body">
                <div
                  class="db-widgets d-flex justify-content-between align-items-center"
                >
                  <div class="db-info">
                    <h6>{{ item.title }}</h6>
                    <h3>{{ item.mark }}</h3>
                  </div>
                  <div class="db-icon">
                    <img
                      :src="
                        require(`../../../../../assets/img/icons/${item.img}`)
                      "
                      alt="Dashboard Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Overview Section -->

        <!-- Student Dashboard -->
        <div class="row">
          <div class="col-12 col-lg-12 col-xl-8">
            <div class="card flex-fill comman-shadow">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col-6">
                    <h5 class="card-title">Today’s Lesson</h5>
                  </div>
                  <div class="col-6">
                    <ul class="chart-list-out">
                      <li>
                        <span class="circle-blue"></span
                        ><span class="circle-gray"></span
                        ><span class="circle-gray"></span>
                      </li>
                      <li class="lesson-view-all">
                        <a href="javascript:;">View All</a>
                      </li>
                      <li class="star-menus">
                        <a href="javascript:;"
                          ><i class="fas fa-ellipsis-v"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="dash-circle">
                <div class="row">
                  <div class="col-lg-3 col-md-3 dash-widget1">
                    <div class="circle-bar circle-bar2">
                      <div>
                        <circle-progress :percent="80" />
                        <b>80%</b>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3">
                    <div class="dash-details">
                      <div
                        class="lesson-activity"
                        v-for="item in lessonone"
                        :key="item.id"
                      >
                        <div class="lesson-imgs">
                          <img
                            :src="
                              require(`../../../../../assets/img/icons/${item.img}`)
                            "
                            alt=""
                          />
                        </div>
                        <div class="views-lesson">
                          <h5>{{ item.title }}</h5>
                          <h4>{{ item.name }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3">
                    <div class="dash-details">
                      <div
                        class="lesson-activity"
                        v-for="item in lessontwo"
                        :key="item.id"
                      >
                        <div class="lesson-imgs">
                          <img
                            :src="
                              require(`../../../../../assets/img/icons/${item.img}`)
                            "
                            alt=""
                          />
                        </div>
                        <div class="views-lesson">
                          <h5>{{ item.title }}</h5>
                          <h4>{{ item.name }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-3 col-md-3 d-flex align-items-center justify-content-center"
                  >
                    <div class="skip-group">
                      <b-button type="submit" variant="info skip-btn">
                        skip
                      </b-button>
                      <b-button type="submit" variant="info continue-btn">
                        Continue
                      </b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-12 col-xl-12 d-flex">
                <div class="card flex-fill comman-shadow">
                  <div class="card-header">
                    <div class="row align-items-center">
                      <div class="col-6">
                        <h5 class="card-title">Learning Activity</h5>
                      </div>
                      <div class="col-6">
                        <ul class="chart-list-out">
                          <li><span class="circle-blue"></span>Teacher</li>
                          <li><span class="circle-green"></span>Student</li>
                          <li class="star-menus">
                            <a href="javascript:;"
                              ><i class="fas fa-ellipsis-v"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <apexchart
                      type="line"
                      height="350"
                      :options="studentDash.sline"
                      :series="studentDash.series"
                    >
                    </apexchart>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-12 col-xl-12 d-flex">
                <div class="card flex-fill comman-shadow">
                  <div class="card-header d-flex align-items-center">
                    <h5 class="card-title">Teaching History</h5>
                    <ul class="chart-list-out student-ellips">
                      <li class="star-menus">
                        <a href="javascript:;"
                          ><i class="fas fa-ellipsis-v"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <div class="teaching-card">
                      <ul class="steps-history">
                        <li>Sep22</li>
                        <li>Sep23</li>
                        <li>Sep24</li>
                      </ul>
                      <ul class="activity-feed">
                        <li class="feed-item d-flex align-items-center">
                          <div class="dolor-activity">
                            <span class="feed-text1"><a>Mathematics</a></span>
                            <ul class="teacher-date-list">
                              <li>
                                <i class="fas fa-calendar-alt me-2"></i
                                >September 5, 2022
                              </li>
                              <li>|</li>
                              <li>
                                <i class="fas fa-clock me-2"></i>09:00 am -
                                10:00 am (60 Minutes)
                              </li>
                            </ul>
                          </div>
                          <div class="activity-btns ms-auto">
                            <b-button type="submit" variant="info">
                              In Progress
                            </b-button>
                          </div>
                        </li>
                        <li class="feed-item d-flex align-items-center">
                          <div class="dolor-activity">
                            <span class="feed-text1"><a>Geography </a></span>
                            <ul class="teacher-date-list">
                              <li>
                                <i class="fas fa-calendar-alt me-2"></i
                                >September 5, 2022
                              </li>
                              <li>|</li>
                              <li>
                                <i class="fas fa-clock me-2"></i>09:00 am -
                                10:00 am (60 Minutes)
                              </li>
                            </ul>
                          </div>
                          <div class="activity-btns complete ms-auto">
                            <b-button type="submit" variant="info">
                              Completed
                            </b-button>
                          </div>
                        </li>
                        <li class="feed-item d-flex align-items-center">
                          <div class="dolor-activity">
                            <span class="feed-text1"><a>Botony</a></span>
                            <ul class="teacher-date-list">
                              <li>
                                <i class="fas fa-calendar-alt me-2"></i
                                >September 5, 2022
                              </li>
                              <li>|</li>
                              <li>
                                <i class="fas fa-clock me-2"></i>09:00 am -
                                10:00 am (60 Minutes)
                              </li>
                            </ul>
                          </div>
                          <div class="activity-btns ms-auto">
                            <b-button type="submit" variant="info">
                              In Progress
                            </b-button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-12 col-xl-4 d-flex">
            <div class="card flex-fill comman-shadow">
              <div class="card-body">
                <v-calendar is-expanded :attributes="attributes" />

                <studentevents />
              </div>
            </div>
          </div>
        </div>
        <!-- /Student Dashboard -->
      </div>

      <layout-footer></layout-footer>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>

<script>
import { studentDash } from './data';
import { defineComponent, ref } from 'vue';
import CircleProgress from 'vue3-circle-progress';
import 'vue3-circle-progress/dist/circle-progress.css';
import 'v-calendar/dist/style.css';
import studentdashboard from '../../../../../assets/json/studentdashboard.json';
import lessonone from '../../../../../assets/json/lessonone.json';
import lessontwo from '../../../../../assets/json/lessontwo.json';

export default defineComponent({
  components: {
    CircleProgress,
  },
  data() {
    return {
      studentdashboard: studentdashboard,
      lessonone: lessonone,
      lessontwo: lessontwo,
      studentDash: studentDash,
      title: 'Welcome Bruklin!',
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Student',
          active: true,
        },
      ],
      attributes: [
        {
          key: 'today',
          highlight: true,
          dates: new Date(),
        },
      ],
    };
  },

  mounted() {
    const percent = ref(75);
    setInterval(() => {
      if (percent.value === 25) {
        percent.value = 75;
      } else {
        percent.value = 25;
      }
    }, 1000);
  },
});
</script>
