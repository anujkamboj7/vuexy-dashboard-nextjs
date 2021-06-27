import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Apps", "Series", "Products"],
  datasets: [
    {
      label: "53% Apps",
      data: [53, 16, 31],
      backgroundColor: ["#AAE8C7", "#D5F4E3", "#31C675"],
      hoverBackgroundColor: ["#c3eed7", "#ebf9f2", "#88dcaf"],
      borderWidth: 0,
      cutout: 35,
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

const EarningsChart = () => {
  return (
    <div className='select-none'>
      <Doughnut height='110' width='100%' data={data} options={options} />
    </div>
  );
};

export default EarningsChart;
