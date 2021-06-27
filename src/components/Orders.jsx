import OrdersChart from "./charts/OrdersChart";

const Orders = () => {
  return (
    <div className='pt-5 px-5 pb-2 relative rounded-md shadow-sm bg-white h-full'>
      <h4 className='font-medium  text-gray-600 tracking-wide text-sm'>
        Orders
      </h4>
      <h4 className='text-gray-500 font-semibold text-xl mt-1 mb-4'>2,76k</h4>
      <OrdersChart />
    </div>
  );
};

export default Orders;
