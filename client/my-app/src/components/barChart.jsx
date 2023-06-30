import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";

export default function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { stock: 53, merk: "audi" },
      { stock: 134, merk: "toyota" },
      { stock: 22, merk: "bmw" },
      { stock: 152, merk: "audi" },
      { stock: 234, merk: "nissan" },
      { stock: 345, merk: "bmw" },
      { stock: 133, merk: "toyota" },
    ];
    const chartOptions = {
      type: "bar",
      data: {
        labels: data.map((row) => row.merk),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.stock),
          },
        ],
      },
    };

    const chart = new Chart(chartRef.current, chartOptions);
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} id="acquisitions" />
    </div>
  );
}
