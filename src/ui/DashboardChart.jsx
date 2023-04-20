import React from 'react'

import Chart from 'react-apexcharts'

function DashboardChart({props}) {

  const datasetsChart = props.datasets
  // // const seriesChart = []
  // // for (let i = 0; i <= datasetsChart.length; i++) {
  // //   // delete datasetsChart['borderColor']
  // //   // delete datasetsChart['backgroundColor']
  //   delete datasetsChart.borderColor
  //   delete datasetsChart.backgroundColor
  // //   console.log(datasetsChart[i])
  // // }

  // console.log(typeof(datasetsChart))
  // console.log(datasetsChart.length)
  console.log(datasetsChart)

  const chartOptions = {
    series: [{
      label: 'Dataset 1',
      data: [100, 200, 300, 400, 500],
      borderColor: 'rgb(255, 99, 132)'
      }, {
      label: 'Dataset 2',
      data: [300, 100, 200, 400, 700],
      borderColor: 'rgb(255, 99, 132)'
    }],

    options: {
      // color: ['#ff6384','#35a2eb'],
      chart: {
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
        ]
      },
      legend: {
        position: 'top'
      },
      grid: {
        show: false
      }
    }
  }

  return (
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type='line'
        height={'100%'}
        // width={'100%'}
      />
  )
}

export default DashboardChart