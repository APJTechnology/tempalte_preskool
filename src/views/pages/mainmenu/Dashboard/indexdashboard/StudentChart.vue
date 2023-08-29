<template>
  <!-- Student Chart -->
  <div class="card card-chart">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col-6">
          <h5 class="card-title">Number of Students</h5>
        </div>
        <div class="col-6">
          <ul class="chart-list-out">
            <li><span class="circle-blue"></span>Girls</li>
            <li><span class="circle-green"></span>Boys</li>
            <li class="star-menus">
              <a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card-body">
      <apexchart
        type="bar"
        height="350"
        :options="studentChart.sline"
        :series="studentChart.series"
      ></apexchart>
    </div>
  </div>
  <!-- /Student Chart -->
</template>
<script>
import { studentChart } from './data';

export default {
  data() {
    return {
      studentChart: studentChart,
    };
  },
  mounted() {},
};
</script>
