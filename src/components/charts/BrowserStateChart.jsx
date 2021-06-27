import { Doughnut } from "react-chartjs-2";

const BrowserStateChart = (props) => {
  const { backgroundColor, hoverBackgroundColor, dataText } = props;

  const data = {
    labels: dataText,
    datasets: [
      {
        data: dataText,
        backgroundColor: backgroundColor,
        hoverBackgroundColor: hoverBackgroundColor,
        cutout: "74%",
        borderWidth: 0,
        borderRadius: 100,
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

  return (
    <div className='select-none'>
      <Doughnut width='30' height='30' data={data} options={options} />
    </div>
  );
};

export default BrowserStateChart;
