import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Series-1",
    "Series-2",
    "Series-3",
    "Series-4",
    "Series-5",
    "Series-6",
    "Series-7",
    "Series-8",
    "Series-9",
    "Series-10",
    "Series-11",
  ],
  datasets: [
    {
      label: "0",
      data: [20, 0, 40, 0, 15, -20, 60, 20, 20, -10, 40],
      backgroundColor: ["#8685EA"],
      borderColor: "#8685EA",
      borderRadius: 2,
      lineTension: 0.3,
      borderWidth: 2,
    },
  ],
};

const options = {
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
      max: 100,
      ticks: {
        // forces step size to be 50 units
        stepSize: 50,
      },
    },
  },
};

const BudgetChart = () => {
  return (
    <div className='select-none'>
      <Line height='70px' width='100%' data={data} options={options} />
    </div>
  );
};

export default BudgetChart;
