import OrdersChart from "./charts/OrdersChart";

const Orders = () => {
  return (
    <div className='pt-5 px-5 pb-3 relative rounded-md shadow-sm bg-white dark:bg-dark-medium h-full'>
      <h4 className='font-medium  text-gray-600 tracking-wide text-sm mb-1 dark:text-gray-300'>
        Orders
      </h4>
      <h4 className='text-gray-500 font-semibold text-2xl mt-1 mb-5 dark:text-gray-300'>
        2,76k
      </h4>
      <OrdersChart />
    </div>
  );
};

export default Orders;
