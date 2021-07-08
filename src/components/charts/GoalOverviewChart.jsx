import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["abc", "xyz"],
  datasets: [
    {
      labels: ["83%"],
      data: [83, 17],
      backgroundColor: ["#4FDEA0", "#EEECF3"],
      hoverBackgroundColor: ["#4FDEA0", "#EEECF3"],
      cutout: "92%",
      borderRadius: [100, 0],
      rotation: -180,
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
};

const GoalOverviewChart = () => {
  return (
    <div className='select-none'>
      <Doughnut height='180' width='100%' data={data} options={options} />
    </div>
  );
};

export default GoalOverviewChart;
