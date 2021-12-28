import React from 'react'
import ReactApexChart from 'react-apexcharts'

const PieChart = () => {
    const series = [91,9]
    const options = {
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }



    return (
        <>
            <div id="chart" className='py-10 bg-white rounded mt-5 ml-5'>
                <ReactApexChart options={options} series={series} type="donut"  height={400}/>
            </div>
        </>
    )
}

export default PieChart
