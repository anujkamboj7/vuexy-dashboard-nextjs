import Link from "next/link";
import { Transition } from "@tailwindui/react";
import { useMediaQuery } from "react-responsive";

import {
  FiHome,
  FiMail,
  FiCalendar,
  FiUser,
  FiType,
  FiDroplet,
  FiEye,
  FiCreditCard,
  FiArchive,
  FiPlusCircle,
  FiLayout,
  FiCopy,
  FiPackage,
  FiCheckCircle,
  FiServer,
  FiGrid,
  FiMap,
  FiPieChart,
  FiShoppingCart,
  FiCheckSquare,
  FiMessageSquare,
  FiCircle,
  FiFileText,
  FiChevronDown,
  FiChevronRight,
  FiFile,
  FiShield,
  FiMenu,
  FiEyeOff,
  FiLifeBuoy,
  FiX,
  FiMoreHorizontal,
} from "react-icons/fi";
import { useState } from "react";

export function Sidebarwidth() {
  const [checked, setChecked] = useState(true);

  return [checked, setChecked];
}

const Sidebar = ({ isOpen, setIsOpen, navBar, checked, setChecked }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const [showDropdown, setshowDropdown] = useState(true);
  const [isHovering, setIsHovering] = useState();

  const NavItem = (props) => {
    const {
      text,
      href,
      icon,
      notificationText,
      arrowIcon,
      bgGray,
      textwhite,
      bgIndgo,
    } = props;
    return (
      <li>
        <Link href={href}>
          <a
            className={`pl-4 pr-2 py-3 flex justify-between items-center  text-sm rounded-md hover:pl-6 ${
              textwhite ? "text-white" : "text-gray-700  dark:text-gray-300"
            } ${
              bgIndgo ? "bg-indigo-400 dark:bg-indigo-400" : "bg-transparent"
            } ${
              bgGray
                ? "bg-gray-200 bg-opacity-40 dark:bg-dark-heavy"
                : "bg-transparent"
            }`}
            onClick={() => {
              setshowDropdown(!showDropdown);
            }}
          >
            <div className='flex items-center space-x-3.5'>
              <span>{icon}</span>
              {(isHovering || checked) && <span>{text}</span>}
            </div>

            {(isHovering || checked) && (
              <div className='flex items-center space-x-2.5'>
                {notificationText && (
                  <span className='h-5 w-5 text-xs font-medium flex items-center justify-center text-red-400 dark:text-amber-400  bg-red-100 dark:bg-amber-100  dark:bg-opacity-20 rounded-full'>
                    {notificationText}
                  </span>
                )}

                {arrowIcon && <span>{arrowIcon}</span>}
              </div>
            )}
          </a>
        </Link>
      </li>
    );
  };

  return (
    <div ref={navBar}>
      <Transition
        show={isDesktopOrLaptop ? !isOpen : isOpen}
        enter='transition ease-out duration-300'
        enterFrom='transform opacity-0  -translate-x-8'
        enterTo='transform opacity-100  -translate-x-0'
        leave='transition ease-out duration-300'
        leaveFrom='transform opacity-100 -translate-x-8'
        leaveTo='transform opacity-0 -translate-x-full'
        className={`${
          checked || isHovering ? "w-64" : "w-auto"
        }  fixed bottom-0 top-0 bg-white dark:bg-dark-medium z-1000 overflow-hidden shadow-light`}
        onMouseLeave={() => setIsHovering("")}
        onMouseEnter={() => setIsHovering("w-64")}
      >
        <div>
          <div className='flex items-center justify-between space-x-3 pt-2 mb-3 pr-4 pl-6 h-16'>
            <div className='flex items-center space-x-3'>
              <img
                src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg'
                alt='branding'
                className='h-9 w-9'
              />
              {(isHovering || checked) && (
                <span className='text-indigo-500 font-semibold text-xl'>
                  Vuexy
                </span>
              )}
            </div>
            {(isHovering || checked) && (
              <input
                type='radio'
                className='h-4 w-4 cursor-pointer hover:bg-transparent focus:outline-none border-indigo-500 border-2 text-indigo-500
                dark:checked:bg-transparent dark:bg-dark-light   dark:border-indigo-300 hidden desktop:block'
                onClick={() => setChecked(!checked)}
                checked={checked}
              />
            )}
            <span
              className='text-indigo-500 cursor-pointer desktop:hidden'
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiX className='w-5 h-5' />
            </span>
          </div>

          <ul className={`pl-3.5 pr-1.5  pb-3 -mt-2 relative scrollbox`}>
            <NavItem
              text='DashBoards'
              classes='bg-gray-100 rounded'
              notificationText='2'
              bgGray
              arrowIcon={
                showDropdown ? (
                  <FiChevronDown className='text-gray-500 dark:text-gray-400' />
                ) : (
                  <FiChevronRight className='text-gray-500 dark:text-gray-400' />
                )
              }
              href='javascript:void(0)'
              icon={<FiHome className='h-5 w-5' />}
            />
            {(isHovering || checked) && (
              <Transition
                show={showDropdown}
                enter='transition-opacity ease-linear duration-150'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity ease-linear duration-150'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                className='dropdown mt-1'
              >
                <NavItem
                  text='eCommerce'
                  classes='bg-indigo-400 text-white rounded shadow-lg'
                  href='/'
                  textwhite
                  bgIndgo
                  icon={<FiCircle className='text-white h-3 w-3' />}
                />
                <NavItem
                  text='Analytics'
                  href='/'
                  icon={<FiCircle className='text-gray-500 h-3 w-3' />}
                />
              </Transition>
            )}
            {isHovering || checked ? (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span>APPS & PAGES</span>
              </div>
            ) : (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span>{<FiMoreHorizontal className='h-5 w-5' />}</span>
              </div>
            )}
            <NavItem
              text='Email'
              href='/'
              icon={<FiMail className='h-5 w-5' />}
            />
            <NavItem
              text='Chat'
              href='/'
              icon={<FiMessageSquare className='h-5 w-5' />}
            />
            <NavItem
              text='Todo'
              href='/'
              icon={<FiCheckSquare className='h-5 w-5' />}
            />
            <NavItem
              text='Calendar'
              href='/'
              icon={<FiCalendar className='h-5 w-5' />}
            />
            <NavItem
              text='Invoice'
              href='/'
              icon={<FiFileText className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            <NavItem
              text='eCommerce'
              href='/'
              icon={<FiShoppingCart className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            <NavItem
              text='User'
              href='/'
              icon={<FiUser className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            <NavItem
              text='Pages'
              href='/'
              icon={<FiFile className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            {isHovering || checked ? (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span className='uppercase'>User Interface</span>
              </div>
            ) : (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span>{<FiMoreHorizontal className='w-5 h-5' />}</span>
              </div>
            )}
            <NavItem
              text='Typograpy'
              href='/'
              icon={<FiType className='h-5 w-5' />}
            />
            <NavItem
              text='Colors'
              href='/'
              icon={<FiDroplet className='h-5 w-5' />}
            />
            <NavItem
              text='Feather'
              href='/'
              icon={<FiEye className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            <NavItem
              text='Cards'
              href='/'
              icon={<FiCreditCard className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            <NavItem
              text='Components'
              href='/'
              icon={<FiArchive className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            <NavItem
              text='Extensions'
              href='/'
              icon={<FiPlusCircle className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            <NavItem
              text='Page Layouts'
              href='/'
              icon={<FiLayout className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            {isHovering || checked ? (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span className='uppercase'>Forms & Table</span>
              </div>
            ) : (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span>{<FiMoreHorizontal className='w-5 h-5' />}</span>
              </div>
            )}
            <NavItem
              text='Forms elements'
              href='/'
              icon={<FiCopy className='h-5 w-5' />}
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
            />
            <NavItem
              text='Form Layout'
              href='/'
              icon={<FiCopy className='h-5 w-5' />}
            />
            <NavItem
              text='Form Wizard'
              href='/'
              icon={<FiPackage className='h-5 w-5' />}
            />
            <NavItem
              text='Form Validation'
              href='/'
              icon={<FiCheckCircle className='h-5 w-5' />}
            />
            <NavItem
              text='Form Repeater'
              href='/'
              icon={<FiCopy className='h-5 w-5' />}
            />
            <NavItem
              text='BS Table'
              href='/'
              icon={<FiServer className='h-5 w-5' />}
            />
            <NavItem
              text='Good Table'
              href='/'
              icon={<FiGrid className='h-5 w-5' />}
            />
            {isHovering || checked ? (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span className='uppercase'>Charts & Maps</span>
              </div>
            ) : (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span>{<FiMoreHorizontal className='w-5 h-5' />}</span>
              </div>
            )}
            <NavItem
              text='Charts'
              notificationText='3'
              arrowIcon={
                <FiChevronRight className='text-gray-500 dark:text-gray-400' />
              }
              href='/'
              icon={<FiPieChart className='h-5 w-5' />}
            />
            <NavItem
              text='Leaflet'
              href='/'
              icon={<FiMap className='h-5 w-5' />}
            />
            {isHovering || checked ? (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span className='uppercase'>Others</span>
              </div>
            ) : (
              <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
                <span>{<FiMoreHorizontal className='w-5 h-5' />}</span>
              </div>
            )}
            <NavItem
              text='Access Control'
              href='/'
              icon={<FiShield className='h-5 w-5' />}
            />
            <NavItem
              text='Menu Levels'
              href='/'
              icon={<FiMenu className='h-5 w-5' />}
            />
            <NavItem
              text='Disabled Menu'
              href='#'
              icon={<FiEyeOff className='h-5 w-5' />}
              classes='cursor-not-allowed disabled:opacity-75'
            />
            <NavItem
              text='Raise Support'
              href='/'
              icon={<FiLifeBuoy className='h-5 w-5' />}
            />
            <NavItem
              text='Documentation'
              href='/'
              icon={<FiFileText className='h-5 w-5' />}
            />
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default Sidebar;
