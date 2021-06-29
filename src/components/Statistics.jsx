import { FiBox, FiDollarSign, FiTrendingUp, FiUser } from "react-icons/fi";

const StaticsData = [
  {
    id: 1,
    sales: "230K",
    icon: [<FiTrendingUp className='h-6 w-6' />],
    title: "Sales",
    styles: "bg-indigo-50 text-indigo-500 p-3 inline-block rounded-full",
  },
  {
    id: 2,
    sales: "8.549k",
    icon: [<FiUser className='h-6 w-6' />],
    title: "Customers",
    styles: "bg-cyan-50 text-cyan-500 p-3 inline-block rounded-full",
  },
  {
    id: 3,
    sales: "230K",
    icon: [<FiBox className='h-6 w-6' />],
    title: "Products",
    styles: "bg-red-50 text-red-500 p-3 inline-block rounded-full",
  },
  {
    id: 4,
    sales: "$9745",
    icon: [<FiDollarSign className='h-6 w-6' />],
    iconStyles: "h-6 w-6",
    title: "Revenue",
    styles: "bg-green-50 text-green-500 p-3 inline-block rounded-full",
  },
];

const StaticBlocks = () => {
  return (
    <>
      {StaticsData.map((data, index) => {
        const { sales, icon, title, styles } = data;
        return (
          <div
            className='flex space-x-5 px-0 lg:px-3 w-3/6 desktop:w-3/12'
            key={index}
          >
            <span className={styles}>{icon}</span>
            <div>
              <h4 className='text-gray-500 font-semibold text-lg'>{sales}</h4>
              <p className='text-xs text-gray-700 tracking-normal'>{title}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Statistics = () => {
  return (
    <div className='relative rounded-md shadow-sm bg-white h-full'>
      <div className='flex items-center justify-between py-4 px-5 lg:py-5 lg:px-8'>
        <h4 className='font-medium  text-gray-600 tracking-wide text-lg'>
          Statistics
        </h4>
        <span className='text-gray-400 text-11.2'>Updated 1 month ago</span>
      </div>
      <div className='sm:flex items-center p-5 desktop:px-7 desktop:py-8  w-full flex-wrap justify-between space-y-6 desktop:space-y-0'>
        <StaticBlocks />
      </div>
    </div>
  );
};

export default Statistics;
