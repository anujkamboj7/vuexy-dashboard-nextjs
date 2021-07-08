import usFlag from "../images/flags/united.png";
import franceFlag from "../images/flags/france.png";
import germanyFlag from "../images/flags/germany.png";
import portugalFlag from "../images/flags/portugal.png";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwtich";

import {
  FiMail,
  FiCalendar,
  FiShoppingCart,
  FiCheckSquare,
  FiMessageSquare,
  FiStar,
  FiMoon,
  FiSun,
  FiSearch,
  FiBell,
  FiUser,
  FiSettings,
  FiCreditCard,
  FiHelpCircle,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";

import { Transition } from "@tailwindui/react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Flags Dropdown data
const dropdownFlags = [
  {
    flags: usFlag,
    text: "English",
    href: "/",
  },
  {
    flags: franceFlag,
    text: "French",
    href: "/",
  },
  {
    flags: germanyFlag,
    text: "German",
    href: "/",
  },
  {
    flags: portugalFlag,
    text: "Protuguese",
    href: "/",
  },
];

// flag dropdown component
const MapItems = () => {
  return (
    <>
      {dropdownFlags.map((data, index) => {
        const { flags, text, href } = data;
        return (
          <li
            className='px-4 py-2.5  hover:bg-indigo-50  dark:hover:bg-dark-heavy text-gray-500  dark:text-gray-300  hover:text-indigo-500'
            key={index}
          >
            <Link href={href}>
              <a className='flex items-center'>
                {<Image src={flags} alt={text} width={20} height={20} />}
                <span className='text-sm ml-2.5'>{text}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

// profile dropdown component
const Dropdown = (props) => {
  const { text, icon, href } = props;
  return (
    <li className='px-4 py-2.5 text-gray-500 dark:text-gray-300  hover:bg-indigo-50 dark:hover:bg-dark-heavy hover:text-indigo-500'>
      <Link href={href}>
        <a className='flex space-x-2.5 text-sm items-center'>
          <span>{icon}</span>
          <span className='text-sm'>{text}</span>
        </a>
      </Link>
    </li>
  );
};

// navbar items component

const NavItem = (props) => {
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

  // props
  const { href, icon, badgeText, badgeStyles, flag, text, classes } = props;

  return (
    <li className={`px-2 ${classes} dark:text-gray-300`}>
      <Link href={href}>
        <a
          className='relative block'
          onClick={(e) => {
            e.preventDefault();
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <span>{icon}</span>

          <span className={badgeStyles}>{badgeText}</span>
          <div
            className='relative hidden flagsWidth:flex items-center'
            ref={container}
          >
            {flag && (
              <>
                <Image src={flag} alt={text} width={20} height={20} />
                <Transition
                  show={isOpen}
                  enter='transition ease-out duration-300'
                  enterFrom='transform opacity-0  translate-y-8'
                  enterTo='transform opacity-100  translate-y-0'
                  leave='transition ease-out duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                  className='absolute top-12 border flex flex-col  border-gray-400 border-opacity-20 bg-white dark:bg-dark-medium py-1.5 sm:right-0 w-max rounded-md'
                >
                  <MapItems />
                </Transition>
                <span className='text-sm text-gray-500 dark:text-gray-300 ml-2.5'>
                  {text}
                </span>
              </>
            )}
          </div>
        </a>
      </Link>
    </li>
  );
};

// navbar component
const Navbar = ({ open, setOpen, checked }) => {
  // Theme switch
  const [colorTheme, setTheme] = ThemeSwitch();
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
    <div
      className={`flex items-center justify-between bg-white dark:bg-dark-medium px-4 py-3 fixed ${
        !checked ? "w-fullSize" : "w-almostsm sm:w-almostMd desktop:w-almost"
      } z-10 rounded-md shadow-md`}
    >
      {/* menu icon */}
      <span
        className='cursor-pointer block lg:hidden text-gray-500'
        onClick={() => setOpen((open) => !open)}
      >
        <FiMenu className='h-5 w-5' />
      </span>
      <ul className='items-center  text-gray-500 hidden lg:flex'>
        {/* menu icon */}
        <span
          className='cursor-pointer block desktop:hidden px-2 text-gray-500'
          onClick={() => setOpen((open) => !open)}
        >
          <FiMenu className='h-5 w-5' />
        </span>
        <NavItem href='/' icon={<FiCalendar className='h-5 w-5' />} />
        <NavItem href='/' icon={<FiMessageSquare className='h-5 w-5' />} />
        <NavItem href='/' icon={<FiMail className='h-5 w-5' />} />
        <NavItem href='/' icon={<FiCheckSquare className='h-5 w-5' />} />
        <NavItem
          href='/'
          icon={<FiStar className='h-5 w-5 text-amber-500' />}
        />
      </ul>
      <ul className='flex items-center text-gray-500'>
        <NavItem href='#' flag={usFlag} text='English' />
        <span className='cursor-pointer' onClick={() => setTheme(colorTheme)}>
          {colorTheme === "light" ? (
            <NavItem
              href='javascript:void(0)'
              classes='hidden sm:block'
              icon={<FiSun className='h-5 w-5' />}
            />
          ) : (
            <NavItem
              href='javascript:void(0)'
              classes='hidden sm:block'
              icon={<FiMoon className='h-5 w-5' />}
            />
          )}
        </span>
        <NavItem href='/' icon={<FiSearch className='h-5 w-5' />} />
        <NavItem
          href='/'
          icon={<FiShoppingCart className='h-5 w-5' />}
          badgeText='5'
          badgeStyles='text-white bg-indigo-500 px-1.5 font-semibold  min-h-20 min-w-20 flex items-center justify-items-center absolute -top-3 -right-2   z-10  text-xs  rounded-full'
        />
        <NavItem
          href='/'
          icon={<FiBell className='h-5 w-5' />}
          badgeText='6'
          badgeStyles='text-white bg-red-500 px-1.5 font-semibold min-h-20  min-w-20 flex items-center justify-items-center absolute -top-3 -right-2   z-10  text-xs  rounded-full'
        />

        <button
          className='focus:outline-none relative'
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <div
            ref={container}
            className='flex flex-wrap items-center justify-items-center space-x-2 px-2'
          >
            <div className='hidden md:block'>
              <h4 className='font-semibold text-sm text-gray-500 dark:text-gray-300 leading-5'>
                Jhon Doe
              </h4>
              <p className='text-xs text-right text-gray-500 dark:text-gray-300'>
                admin
              </p>
            </div>
            <div className='relative inline-block'>
              <img
                src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'
                alt=''
                className='h-10 w-10 rounded-full inline-block'
              />
              <span className='h-3 w-3 inline-block absolute  bottom-0 right-0 border border-white border-1.5 bg-green-500 rounded-full'></span>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter='transition ease-out duration-300'
            enterFrom='transform opacity-0  translate-y-8'
            enterTo='transform opacity-100  translate-y-0'
            leave='transition ease-out duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            className='absolute top-14 border  border-gray-400 border-opacity-20 bg-white dark:bg-dark-medium py-1.5  rounded-md right-0  z-10 w-44'
          >
            <Dropdown
              text='Profile'
              href='/'
              icon={<FiUser className='w-4 h-4' />}
            />
            <Dropdown
              text='Inbox'
              href='/'
              icon={<FiMail className='w-4 h-4' />}
            />
            <Dropdown
              text='Task'
              href='/'
              icon={<FiCheckSquare className='w-4 h-4' />}
            />
            <Dropdown
              text='Chat'
              href='/'
              icon={<FiMessageSquare className='w-4 h-4' />}
            />

            <hr className='my-2 block border-gray-150 dark:border-gray-600 dark:border-opacity-70' />

            <Dropdown
              text='Settings'
              href='/'
              icon={<FiSettings className='w-4 h-4' />}
            />
            <Dropdown
              text='Pricing'
              href='/'
              icon={<FiCreditCard className='w-4 h-4' />}
            />
            <Dropdown
              text='FAQ'
              href='/'
              icon={<FiHelpCircle className='w-4 h-4' />}
            />
            <Dropdown
              text='Logout'
              href='/'
              icon={<FiLogOut className='w-4 h-4' />}
            />
          </Transition>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
