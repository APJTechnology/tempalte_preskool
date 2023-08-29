const revenueChart = {
  sline: {
    chart: {
      id: 'vuechart-example',
    },

    chart: {
      type: 'line',
      height: 350,
      zoom: {
        enabled: false,
      },
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

const studentChart = {
  sline: {
    chart: {
      id: 'vuechart-example',
    },

    chart: {
      type: 'bar',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    labels: [
      2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
    ],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#777',
        },
      },
    },
    title: {
      text: '',
      align: 'left',
      style: {
        fontSize: '18px',
      },
    },
  },
  series: [
    {
      name: 'Boys',
      color: '#70C4CF',
      data: [420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551],
    },
    {
      name: 'Girls',
      color: '#3D5EE1',
      data: [336, 612, 344, 647, 345, 563, 256, 344, 323, 300, 455, 456],
    },
  ],
};

export { revenueChart, studentChart };
