import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Dataset 1",
      data: [-80, -80, -80, -80, -80],
      backgroundColor: ["#FCAA64"],
      hoverBackgroundColor: ["#fdc493"],
      borderRadius: 10,
      maxBarThickness: 9,
    },
    {
      label: "Dataset 2",
      data: [80, 80, 80, 80, 80],
      backgroundColor: ["#F3F3F3"],
      hoverBackgroundColor: ["#F3F3F3"],
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
      max: 80,
      stepSize: 20,
    },
  },
};

const OrdersChart = () => {
  return (
    <div className='select-none'>
      <Bar height='65' width='100%' data={data} options={options} />
    </div>
  );
};

export default OrdersChart;
