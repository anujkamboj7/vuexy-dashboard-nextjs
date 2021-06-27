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
} from "react-icons/fi";

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
          className={`pl-4 pr-2 py-3 flex justify-between items-center mb-1 text-sm transition-all rounded-md ease-linear duration-150 hover:pl-6 ${
            textwhite ? "text-white" : "text-gray-700"
          } ${bgIndgo ? "bg-indigo-400" : "bg-white"} ${
            bgGray ? "bg-gray-100" : "bg-white"
          }`}
        >
          <div className='flex items-center space-x-3.5'>
            <span>{icon}</span>
            <span>{text}</span>
          </div>
          <div className='flex items-center space-x-2.5'>
            {notificationText && (
              <span className='h-5 w-5 text-xs font-medium flex items-center justify-center text-red-400 bg-red-100 rounded-full'>
                {notificationText}
              </span>
            )}

            {arrowIcon && <span>{arrowIcon}</span>}
          </div>
        </a>
      </Link>
    </li>
  );
};

const Sidebar = ({ isOpen, setIsOpen, navBar }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

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
        className={`w-64 fixed bottom-0 top-0 bg-white z-1000 overflow-hidden shadow-light`}
      >
        <div>
          <div className='flex items-center justify-between space-x-3 pt-5 mb-3 pr-4 pl-6 h-16'>
            <div className='flex items-center space-x-3'>
              <img
                src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg'
                alt='branding'
                className='h-9 w-9'
              />
              <span className='text-indigo-500 font-semibold text-xl'>
                Vuexy
              </span>
            </div>
            <input
              type='radio'
              className='h-3.5 w-3.5 cursor-pointer  border-indigo-600 hidden desktop:block'
            />
            <span
              className='text-indigo-500 cursor-pointer desktop:hidden'
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <FiX className='w-5 h-5' />
            </span>
          </div>
          <ul className='pl-3.5 pr-2 pb-4  scrollbox'>
            <NavItem
              text='DashBoards'
              classes='bg-gray-100 rounded mb-1'
              notificationText='2'
              bgGray
              arrowIcon={<FiChevronDown className='text-gray-500' />}
              href='/'
              icon={<FiHome className='h-5 w-5' />}
            />
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
            <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
              <span>APPS & PAGES</span>
            </div>
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
              arrowIcon={<FiChevronRight className='text-gray-500' />}
            />
            <NavItem
              text='eCommerce'
              href='/'
              icon={<FiShoppingCart className='h-5 w-5' />}
              arrowIcon={<FiChevronRight className='text-gray-500' />}
            />
            <NavItem
              text='User'
              href='/'
              icon={<FiUser className='h-5 w-5' />}
              arrowIcon={<FiChevronRight className='text-gray-500' />}
            />
            <NavItem
              text='Pages'
              href='/'
              icon={<FiFile className='h-5 w-5' />}
              arrowIcon={<FiChevronRight className='text-gray-500' />}
            />
            <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
              <span className='uppercase'>User Interface</span>
            </div>
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
              arrowIcon={<FiChevronRight className='text-gray-500' />}
            />
            <NavItem
              text='Cards'
              href='/'
              icon={<FiCreditCard className='h-5 w-5' />}
              arrowIcon={<FiChevronRight className='text-gray-500' />}
            />
            <NavItem
              text='Components'
              href='/'
              icon={<FiArchive className='h-5 w-5' />}
              arrowIcon={<FiChevronRight className='text-gray-500' />}
            />
            <NavItem
              text='Extensions'
              href='/'
              icon={<FiPlusCircle className='h-5 w-5' />}
              arrowIcon={<FiChevronRight className='text-gray-500' />}
            />
            <NavItem
              text='Page Layouts'
              href='/'
              icon={<FiLayout className='h-5 w-5' />}
              arrowIcon={<FiChevronRight className='text-gray-500' />}
            />
            <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
              <span className='uppercase'>Forms & Table</span>
            </div>
            <NavItem
              text='Forms elements'
              href='/'
              icon={<FiCopy className='h-5 w-5' />}
              arrowIcon={<FiChevronRight className='text-gray-500' />}
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
            <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
              <span className='uppercase'>Charts & Maps</span>
            </div>
            <NavItem
              text='Charts'
              notificationText='3'
              arrowIcon={<FiChevronRight className='text-gray-500' />}
              href='/'
              icon={<FiPieChart className='h-5 w-5' />}
            />
            <NavItem
              text='Leaflet'
              href='/'
              icon={<FiMap className='h-5 w-5' />}
            />
            <div className='text-xs text-gray-400 mt-8 mb-3 mx-4 font-medium'>
              <span className='uppercase'>Others</span>
            </div>
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
