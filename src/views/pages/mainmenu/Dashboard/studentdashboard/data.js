const studentDash = {
  sline: {
    chart: {
      id: 'vuechart-example',
    },

    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
  },
  series: [
    {
      name: 'Teachers',
      color: '#3D5EE1',
      data: [45, 60, 75, 51, 42, 42, 30],
    },
    {
      name: 'Students',
      color: '#70C4CF',
      data: [24, 48, 56, 32, 34, 52, 25],
    },
  ],
};
export { studentDash };
