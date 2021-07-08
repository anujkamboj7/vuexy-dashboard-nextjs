import { FiHelpCircle } from "react-icons/fi";
import GoalOverviewChart from "./charts/GoalOverviewChart";

const GoalOverview = () => {
  return (
    <div className='rounded-md shadow-sm bg-white dark:bg-dark-medium -mb-px h-full'>
      <div className='relative flex justify-between items-center p-5'>
        <div>
          <h4 className='font-medium  text-gray-600 dark:text-gray-300 tracking-wide text-lg'>
            Goal Overview
          </h4>
        </div>
        <div className='relative text-gray-400 flex text-sm'>
          <FiHelpCircle className='h-5 w-5 cursor-pointer' />
        </div>
      </div>
      <div className='my-6'>
        <GoalOverviewChart />
      </div>
      <div className='flex border-t dark:border-opacity-10'>
        <div className='p-4 text-center flex-1 border-r dark:border-opacity-10'>
          <p className='text-sm text-gray-400 dark:text-gray-400'>Completed</p>
          <h4 className='text-gray-500 dark:text-gray-300 font-semibold text-xl'>
            786,617
          </h4>
        </div>
        <div className='p-4 text-center flex-1'>
          <p className='text-sm text-gray-400 dark:text-gray-400'>
            In Progress
          </p>
          <h4 className='text-gray-500 dark:text-gray-300 font-semibold text-xl'>
            13,561
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GoalOverview;
