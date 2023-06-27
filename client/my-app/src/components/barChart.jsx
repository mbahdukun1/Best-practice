import React, {useEffect, useRef} from "react"
import Chart from "chart.js/auto"

export default function BarChart ()  {
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
            type: "bar",
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

   
    return <canvas ref = {chartRef} id="acquisitions"/>
    

};