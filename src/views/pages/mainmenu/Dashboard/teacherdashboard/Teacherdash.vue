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
            v-for="item in teacherdashoard"
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

        <!-- Teacher Dashboard -->
        <div class="row">
          <div class="col-12 col-lg-12 col-xl-8">
            <div class="row">
              <div class="col-12 col-lg-8 col-xl-8 d-flex">
                <div class="card flex-fill comman-shadow">
                  <div class="card-header">
                    <div class="row align-items-center">
                      <div class="col-6">
                        <h5 class="card-title">Upcoming Lesson</h5>
                      </div>
                      <div class="col-6">
                        <span class="float-end view-link"
                          ><a href="javascript:;">View All Courses</a></span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="pt-3 pb-3">
                    <div class="table-responsive lesson">
                      <table class="table table-center">
                        <tbody>
                          <tr v-for="item in teacherlesson" :key="item.id">
                            <td>
                              <div class="date">
                                <b>{{ item.title }}</b>
                                <p>{{ item.introduction }}</p>
                                <ul class="teacher-date-list">
                                  <li>
                                    <i class="fas fa-calendar-alt me-2"></i
                                    >{{ item.date }}
                                  </li>
                                  <li>|</li>
                                  <li>
                                    <i class="fas fa-clock me-2"></i
                                    >{{ item.timing }}
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td>
                              <div class="lesson-confirm">
                                <a href="javascript:;">{{ item.process }}</a>
                              </div>
                              <b-button type="submit" variant="info">
                                {{ item.button }}
                              </b-button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 col-xl-4 d-flex">
                <div class="card flex-fill comman-shadow">
                  <div class="card-header">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <h5 class="card-title">Semester Progress</h5>
                      </div>
                    </div>
                  </div>
                  <div class="dash-widget">
                    <div class="circle-bar circle-bar1">
                      <div class="circle-graph1">
                        <circle-progress :percent="50" />
                        <div class="progress-less">
                          <b>55/60</b>
                          <p>Lesson Progressed</p>
                        </div>
                      </div>
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
                        <h5 class="card-title">Teaching Activity</h5>
                      </div>
                      <div class="col-6">
                        <ul class="chart-list-out">
                          <li><span class="circle-blue"></span>Teacher</li>
                          <li><span class="circle-green"></span>Students</li>
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
                      type="area"
                      height="350"
                      :options="teacherDash.sline"
                      :series="teacherDash.series"
                    ></apexchart>
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
                          <div class="activity-btns ms-auto">
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
        <!-- /Teacher Dashboard -->
      </div>

      <layout-footer></layout-footer>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>

<script>
import { teacherDash } from './data';

import CircleProgress from 'vue3-circle-progress';
import 'vue3-circle-progress/dist/circle-progress.css';
import { ref } from 'vue';
import teacherdashoard from '../../../../../assets/json/teacherdashboard.json';
import teacherlesson from '../../../../../assets/json/teacherlesson.json';

export default {
  components: {
    CircleProgress,
  },
  data() {
    return {
      teacherDash: teacherDash,
      teacherdashoard: teacherdashoard,
      teacherlesson: teacherlesson,
      title: 'Welcome Jonathan!',
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Teacher',
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
};
</script>
