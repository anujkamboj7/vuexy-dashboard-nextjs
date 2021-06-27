import EarningsChart from "./charts/EarningsChart";

const Earnings = () => {
  return (
    <div className='p-5 flex items-center relative rounded-md shadow-sm bg-white h-full'>
      <div className='flex-1'>
        <h4 className='font-medium  text-gray-600 tracking-wide text-lg mb-4'>
          Earnings
        </h4>
        <p className='text-xs tracking-wide text-gray-500'>This Month</p>
        <p className='text-sm tracking-wide text-gray-600 font-medium mb-5'>
          $4055.56
        </p>
        <p className='text-11.2 tracking-wide text-gray-400'>
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
