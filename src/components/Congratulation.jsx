import Button from "./Button";
import Image from "next/image";

const Congratulation = () => {
  return (
    <div className='p-5 relative rounded-md shadow-sm bg-white h-full'>
      <div className='absolute hidden small:block  w-20 h-20 lg:w-auto lg:h-auto right-0 lg:right-12 top-0'>
        <Image
          src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/badge.0fa134b5.svg'
          alt=''
          layout='fill'
        />
      </div>
      <h4 className='text-nr text-gray-700 font-medium mb-2'>
        Congratulations 🎉 John!
      </h4>
      <p className='text-xs tracking-wide text-gray-500 mb-7'>
        You have won gold medal
      </p>
      <h3 className='text-xl text-indigo-500 font-medium mb-2'>$48.9k</h3>
      <Button type='button' text='View Sales' />
    </div>
  );
};

export default Congratulation;
