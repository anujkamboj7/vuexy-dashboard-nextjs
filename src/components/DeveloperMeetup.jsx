import { useState } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const Avatar = (props) => {
  const [show, setShow] = useState(false);
  const { src, tooltip } = props;

  return (
    <span className='cursor-pointer relative'>
      <img
        className="w-10 h-10 inline-block rounded-full border-white dark:border-dark-light border-2 ease-linear hover:z-10 transform hover:-translate-y-1 hover:scale-110 hover:relative transition duration-150'"
        src={src}
        alt=''
        onMouseOver={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      />

      {show && (
        <div
          className={`mt-1  absolute py-1.5 transform -translate-x-1/2 left-1/2 z-10 w-32  px-2 text-xs ease-linear transition duration-150 text-center leading-tight text-white   bg-gray-800 rounded-md shadow-lg`}
        >
          {tooltip}
          <svg
            className='absolute  z-10 w-6 h-6  left-12 text-gray-800  top-0 -mt-1.5 fill-current stroke-current'
            width='8'
            height='8'
          >
            <rect x='12' y='-10' width='8' height='8' transform='rotate(45)' />
          </svg>
        </div>
      )}
    </span>
  );
};

const DeveloperMeetup = () => {
  return (
    <div className='shadow-sm rounded-md bg-white dark:bg-dark-medium h-full'>
      <div className='bg-indigo-100 dark:bg-dark-light text-center'>
        <img
          src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/email.de935b8f.svg'
          alt=''
          className='inline-block h-170'
        />
      </div>
      <div className='p-5'>
        <div className='flex items-center mb-7'>
          <div className='border-r pr-4 mr-4 text-center'>
            <h4 className='text-sm text-gray-600 dark:text-gray-300'>THU</h4>
            <p className='font-medium text-gray-500 dark:text-gray-300 text-xl'>
              24
            </p>
          </div>
          <div>
            <h4 className='font-medium text-gray-500 dark:text-gray-300 text-lg'>
              Developer Meetup
            </h4>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Meet world popular developers
            </p>
          </div>
        </div>
        <div className='flex space-x-3.5 mb-3.5'>
          <span className='bg-indigo-100 dark:bg-indigo-500 dark:bg-opacity-10 text-indigo-500 h-8 w-8 justify-center flex items-center rounded-md'>
            <FiCalendar className='h-4 w-4' />
          </span>
          <div>
            <h5 className='text-sm text-gray-500 dark:text-gray-300 font-medium tracking-normal'>
              Sat, May 25, 2020
            </h5>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              10:AM to 6:PM
            </p>
          </div>
        </div>
        <div className='flex space-x-3.5 mb-7'>
          <span className='bg-indigo-100 dark:bg-indigo-500 dark:bg-opacity-20 text-indigo-500 h-8 w-8 justify-center flex items-center rounded-md'>
            <FiMapPin className='h-4 w-4' />
          </span>
          <div>
            <h5 className='text-sm text-gray-500 dark:text-gray-300 font-medium tracking-normal'>
              Central Park
            </h5>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Manhattan, New york City
            </p>
          </div>
        </div>
        <div>
          <span className='-space-x-4'>
            <Avatar
              src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/avatar-s-9.397f0acd.jpg'
              tooltip='Adelaide Howell'
            />
            <Avatar
              src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/avatar-s-6.0f4533ab.jpg'
              tooltip='Wayne Myers'
            />
            <Avatar
              src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/avatar-s-8.d6c23222.jpg'
              tooltip='Rachel Wallace'
            />
            <Avatar
              src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/avatar-s-7.cb1b1e65.jpg'
              tooltip='Iva Foster'
            />
            <Avatar
              src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/avatar-s-20.32972323.jpg'
              tooltip='Ola Doyle'
            />
          </span>
          <span className='pl-2 text-gray-500 dark:text-gray-300 text-sm font-medium cursor-pointer'>
            +42
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeveloperMeetup;
