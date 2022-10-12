import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ stats }) => {
  const data = {
    labels: stats.labels,
    datasets: [
      {
        label: "Employees",
        data: stats.values,
        backgroundColor: ["red", "green", "orange"],
        borderColor: ["red", "green", "orange"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: "300px" }}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
