const barflotChart = {
  flotbar1: {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: ['#44c4fa'],
    dataLabels: {
      enabled: false,
    },

    grid: {
      borderWidth: 1,
      borderColor: 'rgba(67, 87, 133, .09)',
      hoverable: true,
    },
    yaxis: {
      tickColor: 'rgba(67, 87, 133, .09)',
      font: {
        color: '#8e9cad',
        size: 10,
      },
    },
    xaxis: {
      tickColor: 'rgba(67, 87, 133, .09)',
      font: {
        color: '#8e9cad',
        size: 10,
      },
    },
  },
  series: [
    {
      data: [
        [0, 20],
        [1, 35],
        [2, 25],
        [3, 22],
        [4, 18],
        [5, 27],
        [6, 34],
        [7, 35],
        [8, 48],
        [9, 30],
      ],
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: '#44c4fa',
        barWidth: 0.4,
      },
      highlightColor: '#7cd6fc',
    },
  ],
};
const bar2flotChart = {
  flotbar2: {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: ['#664dc9', '#44c4fa'],
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      tickColor: 'rgba(67, 87, 133, .09)',
      font: {
        color: '#8e9cad',
        size: 10,
      },
    },
    xaxis: {
      categories: ['0.0', '2.5', '5.0', '7.5', '10.0', '12.5', '15.0'],
      tickColor: 'rgba(67, 87, 133, .09)',
      font: {
        color: '#8e9cad',
        size: 10,
      },
    },
  },
  series: [
    {
      data: [30, 15, 45, 22, 18, 27, 34, 35, 48],
    },
    {
      data: [80, 20, 24, 17, 10, 24, 30, 16],
    },
  ],
};
const lineflotChat = {
  flotline1: {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#664dc9', '#44c4fa'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },

    grid: {
      hoverable: true,
      clickable: true,
      borderWidth: 0,
      labelMargin: 5,
    },
    yaxis: {
      min: 0,
      max: 40,
      color: 'rgba(67, 87, 133, .09)',
      font: {
        size: 10,
        color: '#8e9cad',
      },
    },
    xaxis: {
      color: 'rgba(67, 87, 133, .09)',
      font: {
        size: 10,
        color: '#8e9cad',
      },
    },
  },
  series: [
    {
      name: 'Sales',
      data: [10, 15, 25, 22, 18, 27, 36],
    },
    {
      name: 'Customer',
      data: [8, 17, 28, 20, 16, 24, 36],
    },
  ],
};
const linepointflotChart = {
  flotline2: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#664dc9', '#44c4fa'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColors: ['#664dc9', '#44c4fa'],
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },

    grid: {
      hoverable: true,
      clickable: true,
      borderWidth: 0,
      labelMargin: 5,
    },
    yaxis: {
      min: 0,
      max: 40,
      color: 'rgba(67, 87, 133, .09)',
      font: {
        size: 10,
        color: '#8e9cad',
      },
    },
    xaxis: {
      color: 'rgba(67, 87, 133, .09)',
      font: {
        size: 10,
        color: '#8e9cad',
      },
    },
  },
  series: [
    {
      name: 'Sales',
      data: [10, 15, 25, 22, 18, 27, 36],
    },
    {
      name: 'Customer',
      data: [8, 17, 28, 20, 16, 24, 36],
    },
  ],
};
const areaflotChart = {
  flotarea1: {
    chart: {
      height: 350,
      type: 'area',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#664dc9', '#44c4fa'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },

    grid: {
      hoverable: true,
      clickable: true,
      borderWidth: 0,
      labelMargin: 5,
    },
    yaxis: {
      min: 0,
      max: 40,
      color: 'rgba(67, 87, 133, .09)',
      font: {
        size: 10,
        color: '#8e9cad',
      },
    },
    xaxis: {
      color: 'rgba(67, 87, 133, .09)',
      font: {
        size: 10,
        color: '#8e9cad',
      },
    },
  },
  series: [
    {
      name: 'Sales',
      data: [10, 15, 25, 22, 18, 27, 36],
    },
    {
      name: 'Customer',
      data: [8, 17, 28, 20, 16, 24, 36],
    },
  ],
};
const areapointflotChart = {
  flotarea2: {
    chart: {
      height: 350,
      type: 'area',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#664dc9', '#44c4fa'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },

    grid: {
      hoverable: true,
      clickable: true,
      borderWidth: 0,
      labelMargin: 5,
    },
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColors: ['#664dc9', '#44c4fa'],
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: 40,
      color: 'rgba(67, 87, 133, .09)',
      font: {
        size: 10,
        color: '#8e9cad',
      },
    },
    xaxis: {
      color: 'rgba(67, 87, 133, .09)',
      font: {
        size: 10,
        color: '#8e9cad',
      },
    },
  },
  series: [
    {
      name: 'Sales',
      data: [10, 15, 25, 22, 18, 27, 36],
    },
    {
      name: 'Customer',
      data: [8, 17, 28, 20, 16, 24, 36],
    },
  ],
};
const pieflotChart = {
  flotpie1: {
    chart: {
      height: 300,
      type: 'pie',
      toolbar: {
        show: false,
      },
    },
    colors: ['#664dc9', '#44c4fa', '#38cb89', '#ef4b4b', '#ffab00'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  },
  series: [10, 50, 30, 30, 60],
};
const donutflotChart = {
  flotpie2: {
    chart: {
      height: 300,
      type: 'donut',
      toolbar: {
        show: false,
      },
    },
    colors: ['#664dc9', '#44c4fa', '#38cb89', '#ef4b4b', '#ffab00'],
  },
  series: [10, 50, 30, 30, 60],
};
export {
  barflotChart,
  bar2flotChart,
  lineflotChat,
  linepointflotChart,
  areaflotChart,
  areapointflotChart,
  pieflotChart,
  donutflotChart,
};
