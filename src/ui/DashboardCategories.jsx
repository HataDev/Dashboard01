import React from 'react'

import Chart from 'react-apexcharts'

function DashboardCategories({props}) {

  const seriesCategories = Object.values(props)
  const labelsCategories = Object.keys(props)

  const chartOptions = {
    series: seriesCategories,
    options: {
      labels: labelsCategories,
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show:true,
                fontSize: '30px',
                color: '#ff9900'
              }
            }
          }
        }
      }
    },
  }

  return (
    <Chart
      options={chartOptions.options}
      series={chartOptions.series}
      type='donut'
      height={'100%'}
      width={'100%'}
  />
  )
}

export default DashboardCategories