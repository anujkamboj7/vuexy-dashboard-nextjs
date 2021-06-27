import ProfitChart from "./charts/ProfitChart";
const Profit = () => {
  return (
    <div className='pt-5 px-5 pb-2 relative rounded-md shadow-sm bg-white h-full'>
      <h4 className='font-medium  text-gray-600 tracking-wide text-sm'>
        Profit
      </h4>
      <h4 className='text-gray-500 font-semibold text-xl mt-1 mb-4'>6,24k</h4>
      <ProfitChart />
    </div>
  );
};

export default Profit;
