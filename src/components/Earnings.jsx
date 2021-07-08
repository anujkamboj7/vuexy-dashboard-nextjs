import EarningsChart from "./charts/EarningsChart";

const Earnings = () => {
  return (
    <div className='p-5 flex items-center relative rounded-md shadow-sm bg-white dark:bg-dark-medium h-full'>
      <div className='flex-1'>
        <h4 className='font-medium  text-gray-600 dark:text-gray-300 tracking-wide text-lg mb-4'>
          Earnings
        </h4>
        <p className='text-11.2 tracking-wide text-gray-500 dark:text-gray-400'>
          This Month
        </p>
        <p className='text-nr tracking-wide text-gray-600 font-medium mb-5 dark:text-gray-300'>
          $4055.56
        </p>
        <p className='text-11.2 tracking-wide text-gray-400 dark:text-gray-400'>
          <span className='font-semibold'>68.2% </span> more earnings than last
          month.
        </p>
      </div>
      <div className='flex-1'>
        <EarningsChart />
      </div>
    </div>
  );
};

export default Earnings;
