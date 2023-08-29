<template>
  <!-- Revenue Chart -->
  <div class="card card-chart">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col-6">
          <h5 class="card-title">Overview</h5>
        </div>
        <div class="col-6">
          <ul class="chart-list-out">
            <li><span class="circle-blue"></span>Teacher</li>
            <li><span class="circle-green"></span>Student</li>
            <li class="star-menus">
              <a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div id="apexcharts-area"></div>
      <apexchart
        type="line"
        height="350"
        :options="revenueChart.sline"
        :series="revenueChart.series"
      ></apexchart>
    </div>
  </div>
  <!-- /Revenue Chart -->
</template>
<script>
import { revenueChart } from './data';

export default {
  data() {
    return {
      revenueChart: revenueChart,
    };
  },
  mounted() {},
};
</script>
