import React from 'react'
import ReactApexChart from 'react-apexcharts'

const Linechart = () => {

    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }]
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Active Members Growth',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }



    return (
        <>
            <div id="chart" className='bg-white rounded mt-5'>
                <ReactApexChart options={options} series={series} type="line" height={400} 
                />
            </div>
        </>
    )
}

export default Linechart
