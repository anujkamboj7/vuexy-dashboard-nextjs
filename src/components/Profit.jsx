import ProfitChart from "./charts/ProfitChart";
const Profit = () => {
  return (
    <div className='pt-5 px-5 pb-3 relative rounded-md shadow-sm bg-white dark:bg-dark-medium h-full'>
      <h4 className='font-medium  text-gray-600 tracking-wide text-sm dark:text-gray-300 mb-1'>
        Profit
      </h4>
      <h4 className='text-gray-500 font-semibold text-2xl mt-1 mb-5 dark:text-gray-300'>
        6,24k
      </h4>
      <ProfitChart />
    </div>
  );
};

export default Profit;
