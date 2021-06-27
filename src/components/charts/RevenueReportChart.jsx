import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "Dataset 1",
      data: [-170, -100, -80, -200, -100, -50, -80, -100, -100],
      backgroundColor: ["#FCAA64"],
      hoverBackgroundColor: ["#fdc493"],
      borderRadius: 10,
      maxBarThickness: 9,
    },
    {
      label: "Dataset 2",
      data: [170, 180, 280, 250, 100, 50, 140, 180, 50],
      backgroundColor: ["#8782EE"],
      hoverBackgroundColor: ["#a1a6f4"],
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

      display: true,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      stacked: true,
      display: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      max: 300,
      ticks: {
        // forces step size to be 50 units
        stepSize: 100,
      },
    },
  },
};

const RevenueReportChart = () => {
  return (
    <div className='select-none'>
      <Bar height='230' data={data} options={options} />
    </div>
  );
};

export default RevenueReportChart;
