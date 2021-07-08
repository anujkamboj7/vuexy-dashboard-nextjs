import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Series-1",
    "Series-2",
    "Series-3",
    "Series-4",
    "Series-5",
    "Series-6",
  ],
  datasets: [
    {
      label: "0",
      data: [0, 20, 5, 35, 20, 45],
      backgroundColor: ["#30D7E9"],
      borderColor: "#30D7E9",
      borderRadius: 10,
      maxBarThickness: 9,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      display: false,
    },
    y: {
      stacked: true,
      display: false,
      max: 50,
      ticks: {
        stepSize: 10,
      },
    },
  },
};

const ProfitChart = () => {
  return (
    <div className='select-none'>
      <Line height='65' width='100%' data={data} options={options} />
    </div>
  );
};

export default ProfitChart;
