import React, {useEffect, useRef} from "react"
import Chart from "chart.js/auto"
import "../css/pieChart.css"

export default function PieChart ()  {
    const chartRef = useRef(null)

    useEffect(() => {
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
          ];
          const chartOptions = {
            type: "pie",
            responsive: true,
            maintainAspectRatio: false,
            data: {
                labels: data.map((row) => row.year),
                datasets: [
                    {
                        label: "Acquisitions by year",
                        data : data.map((row) => row.count)
                    }
                ]
            }
        }
    
        const chart = new Chart(chartRef.current, chartOptions)
        return () => {
            chart.destroy()
        }
    },[])

   
    return (
      <div className="flex" style={{width:"300px"}} >
    <canvas ref = {chartRef} id="acquisitions"/>
    </div>
    )

};