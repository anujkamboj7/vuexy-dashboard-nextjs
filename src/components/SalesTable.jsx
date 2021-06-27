import {
  FiCoffee,
  FiMonitor,
  FiTrendingDown,
  FiTrendingUp,
  FiWatch,
} from "react-icons/fi";

import SalesTableData from "../pages/api/SalesTableData.json";

const tableHeadingData = ["COMPANY", "CATEGORY", "VIEWS", "REVENUE", "SALES"];

const TableHeading = (props) => {
  const { heading } = props;
  return (
    <th className='font-semibold text-xs text-gray-500 px-7 py-2.5 text-left'>
      {heading}
    </th>
  );
};

const TableBody = (props) => {
  const { company, category, views, revenue, sales } = props;

  return (
    <>
      <td className='px-7 py-2.5 text-left last:rounded-bl-md'>
        <div className='flex items-center space-x-6'>
          <div className='px-1 py-1.5 bg-gray-50 rounded-md'>
            <img src={company.logo} alt='logo' />
          </div>
          <div>
            <h4 className='text-sm font-semibold text-gray-500'>
              {company.name}
            </h4>
            <p className='text-11.2 whitespace-nowrap text-gray-400'>
              {company.email}
            </p>
          </div>
        </div>
      </td>
      <td className='px-7 py-2.5 text-left'>
        <div className='flex space-x-4 items-center'>
          {category.name == "Technology" && (
            <span className='text-sm p-2 text-indigo-500 bg-indigo-50 rounded-full'>
              <FiMonitor className='w-5 h-5' />
            </span>
          )}

          {category.name == "Grocery" && (
            <span className='text-sm p-2 text-green-500 bg-green-50 rounded-full'>
              <FiCoffee className='w-5 h-5' />
            </span>
          )}
          {category.name == "Fashion" && (
            <span className='text-sm p-2 text-amber-500 bg-amber-50 rounded-full'>
              <FiWatch className='w-5 h-5' />
            </span>
          )}
          <span className='text-sm text-gray-500'>{category.name}</span>
        </div>
      </td>
      <td className='px-7 py-2.5 text-left'>
        <p className='text-sm text-gray-500 font-semibold'>{views.total}</p>
        <p className='text-11.2 text-gray-400 mt-1 whitespace-nowrap'>
          {views.time}
        </p>
      </td>
      <td className='px-7 py-2.5 text-left text-gray-500 text-sm'>
        <span>{revenue.total}</span>
      </td>
      <td className='px-7 py-2.5 text-left text-gray-500 text-sm last:rounded-br-md'>
        <div className='flex space-x-3 items-center'>
          <span className='text-sm font-semibold text-gray-500'>
            {sales.percent}
          </span>
          {sales.price == "down" && (
            <span className='text-red-500'>
              <FiTrendingDown />
            </span>
          )}
          {sales.price == "up" && (
            <span className='text-green-500'>
              <FiTrendingUp />
            </span>
          )}
        </div>
      </td>
    </>
  );
};

// todo Border radius of table need to be fix
const SalesTable = () => {
  return (
    <div className='block overflow-x-auto shadow-sm border-none rounded-md'>
      <table className='w-full  whitespace-pre-wrap h-full'>
        <thead className='bg-dolphin'>
          <tr>
            {tableHeadingData.map((data) => {
              return (
                <>
                  <TableHeading heading={data} />
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {SalesTableData.map((data) => {
            const { company, category, views, revenue, sales } = data;
            return (
              <>
                <tr className='bg-white  border-t'>
                  <TableBody
                    company={company}
                    category={category}
                    views={views}
                    revenue={revenue}
                    sales={sales}
                  />
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
