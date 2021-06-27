import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import Button from "./Button";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@tailwindui/react";
import RevenueReportChart from "./charts/RevenueReportChart";
import BudgetChart from "./charts/BudgetChart";

const NavItem = (props) => {
  const { text, href } = props;
  return (
    <>
      <Link href={href}>
        <a className='text-gray-500 text-sm py-2 text-left px-4 hover:bg-indigo-50 hover:text-indigo-500'>
          {text}
        </a>
      </Link>
    </>
  );
};
const RevenueReport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);

  // Allow for outside click
  useEffect(() => {
    function handleOutsideClick(event) {
      if (!container.current.contains(event.target)) {
        if (!isOpen) return;
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, container]);

  return (
    <div className='relative rounded-md shadow-sm bg-white h-full'>
      <div className='md:flex'>
        <div className='py-5 px-5 sm:px-6 md:w-8/12 border-r space-y-8'>
          <div className='sm:flex justify-between'>
            <h4 className='font-medium  text-gray-600 tracking-wide text-lg mb-1.5 sm:mb-0'>
              Revenue Report
            </h4>
            <div className='text-gray-500 flex text-sm space-x-7'>
              <div className='space-x-2'>
                <span className='bg-indigo-500 p-1.5 inline-block rounded-full'></span>
                <span>Eearning</span>
              </div>
              <div className='space-x-2'>
                <span className='bg-yellow-500 p-1.5 inline-block rounded-full'></span>
                <span> Expense</span>
              </div>
            </div>
          </div>
          <RevenueReportChart />
        </div>
        <div
          className='pt-0 pb-7
         md:py-7 px-10 flex-auto'
        >
          <div className='text-center'>
            <button
              ref={container}
              type='button'
              className='py-1.5  relative px-2.5 border border-opacity-90 border-indigo-500 rounded-md font-medium text-xs inline-block mb-7 text-indigo-500 focus:outline-none'
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <div className='flex'>
                <span>2020</span>
                <span>
                  <FiChevronDown className='text-indigo-500 h-3.5 w-3.5 ml-1' />
                </span>
              </div>
              <Transition
                show={isOpen}
                enter='transition-opacity duration-75'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity duration-150'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <ul className='absolute top-10 border flex flex-col bg-white py-1 -left-1 w-36 rounded-md  z-10'>
                  <NavItem text='2021' href='/' />
                  <NavItem text='2022' href='/' />
                  <NavItem text='2023' href='/' />
                </ul>
              </Transition>
            </button>

            <h4 className='font-medium  text-gray-500 tracking-wide text-2xl'>
              $25,852
            </h4>
            <div>
              <span className='text-gray-500 font-semibold text-sm'>
                Budget:{" "}
              </span>
              <span className='text-sm text-gray-500'>56,800</span>
            </div>
            <div className='my-4'>
              <BudgetChart />
            </div>
            <Button text='Increase Budget' />
          </div>
        </div>
      </div>
      <div className='py-4 hidden md:block'></div>
    </div>
  );
};

export default RevenueReport;
