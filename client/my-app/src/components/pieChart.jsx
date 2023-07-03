import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/actionProduct";
import "../css/pieChart.css";

export default function BarChart() {
  const chartRef = useRef(null);
  const products = useSelector((state) => state.productsReducer.products);
  console.log(products, "<<< ini products");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0 && chartRef.current) {
      const chartOptions = {
        type: "pie",
        data: {
          labels: products.map((row) => row.name),
          datasets: [
            {
              label: "Acquisitions by Stock",
              data: products.map((row) => row.stock),
            },
          ],
        },
      };

      const chart = new Chart(chartRef.current, chartOptions);
      return () => {
        chart.destroy();
      };
    }
  }, [products]);

  return (
    <div className="chart-pie" style={{ width: "500px" }}>
      <canvas ref={chartRef} id="acquisitions" />
    </div>
  );
}
