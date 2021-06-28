import { useState, useEffect, useRef } from "react";
import BrowserStates from "../components/BrowserStates";
import Congratulation from "../components/Congratulation";
import DeveloperMeetup from "../components/DeveloperMeetup";
import Earnings from "../components/Earnings";
import GoalOverview from "../components/GoalOverview";
import Navbar from "../components/Navbar";
import Orders from "../components/Orders";
import Profit from "../components/Profit";
import RevenueReport from "../components/RevenueReport";
import SalesTable from "../components/SalesTable";
import Sidebar from "../components/Sidebar";

import Statistics from "../components/Statistics";
import Transaction from "../components/Transaction";

import { Transition } from "@tailwindui/react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const navBar = useRef(null);

  // Allow for outside click
  useEffect(() => {
    function handleOutsideClick(event) {
      if (!navBar.current.contains(event.target)) {
        if (!isOpen) return;
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, navBar]);

  return (
    <div className='font-body antialiased relative'>
      {/* Background Overlay */}

      <Transition
        show={isOpen}
        enter='transition ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-0'
        leave='transition ease-out duration-300'
        leaveFrom='opacity-0'
        leaveTo='opacity-0'
        className='h-full w-full bg-gray-900 opacity-50  z-20 fixed top-0 left-0'
      ></Transition>
      {/* Show left sidebare when menu icon clicked  */}

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} navBar={navBar} />

      {/* hide left sidebare when menu icon  not clicked  */}

      <div className='desktop:ml-64 relative  min-h-screen bg-gray-light p-4 sm:py-5 sm:px-7'>
        <Navbar setOpen={setIsOpen} open={isOpen} />
        <div className='pt-20 sm:pt-24'>
          <div className='grid gap-6 grid-cols-4 desktop:grid-cols-3'>
            <div className='col-span-4 md:col-span-2 desktop:col-span-1'>
              <Congratulation />
            </div>
            <div className='col-span-4 md:col-span-2 desktop:col-span-2'>
              <Statistics />
            </div>
          </div>
          <div className='grid gap-6 grid-cols-4 lg:grid-cols-3 mt-7'>
            <div className='grid gap-6 md:grid-cols-4 lg:grid-cols-2 col-span-4 lg:col-span-1'>
              <div className='grid gap-6 grid-cols-2 col-span-4 md:col-span-2'>
                <div className='lg:col-span-1'>
                  <Orders />
                </div>
                <div className='lg:col-span-1'>
                  <Profit />
                </div>
              </div>
              <div className='col-span-4 md:col-span-2 lg:col-span-2'>
                <Earnings />
              </div>
            </div>
            <div className='lg:col-span-2  col-span-4'>
              <RevenueReport />
            </div>
            <div className='col-span-4 lg:col-span-2'>
              <SalesTable />
            </div>
            <div className='col-span-4 md:col-span-2  lg:col-span-1'>
              <DeveloperMeetup />
            </div>
            <div className='col-span-4 md:col-span-2 lg:col-span-1'>
              <BrowserStates />
            </div>
            <div className='col-span-4 md:col-span-2 lg:col-span-1'>
              <GoalOverview />
            </div>
            <div className='col-span-4 md:col-span-2 lg:col-span-1'>
              <Transaction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
