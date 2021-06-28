import { useState, useEffect, useRef } from "react";
import { FiMoreVertical } from "react-icons/fi";
import BrowerStateChart from "./charts/BrowserStateChart";
import { Transition } from "@tailwindui/react";
const BrowserData = [
  {
    browser: {
      name: "Google Chrome",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAMAAACqEUSYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHaADAAQAAAABAAAAHAAAAADjGz/hAAACalBMVEUAAAD///+A/4BVqqr/Zmb/VVX/1VX/SUn/20n/41Uas2b/1VX/10Mapmb/0UbeTkP/2EXjTEL/1kreTkEXpGD1xL9YhlPkaWAWo1zdSD3/zkQWoF/meHEVn1x8qvjeS0HfST3/z0YWoV7fST4Un13/z0T84+P/z0NTkfT/z0MVoFz/zkYUoV4WoV7/z0X////eST250/3cSjzdSD3cSj342tgVoV7Wq5//z0RHiPP/0EXeTz7/////z0PdSjzeSD2Wu/ncSTzdSD3cST0Vn1wUoF4kp2j/8ML3/PpHiPPcST3dSD3/z0MVoF3E2fzdSj3/z0PS7ODf6f0Vn13cST0Vn13dSDzshD//z0TzpEH/zkRRjfT///7/++z/zkTynUJVg1FpslRzdk0VoF3dSTz/z0Q5p1jD2PvP4Pz/01IxlFeBb0z/z0MVoFykvU4Un1wrpFqLs/jcSD3j7P7/z0SjY0bdSDz7/f+9wU3/zkQXoV5Hh/TI2/vcSDyu38cem1v/56PVx0ndST3//fZHh/P///8aomBJiPT/z0MZoFzp9/D/9+DS7d/DVEAoqGqyzfsWnVvkyka70/vdST3/z0MVoF1HiPRiwJPdSDwWn122z/v+//8VoFzdSTz/z0YUoF3dST1wwY0Un13//PEVoFwVoF1CsnxKifRPjPR1pffG2vzUTT0VoFzV4/2L0bAVn135zkX/z0R8yqXo24j/0EjcSDz/0U/cSD1IiPRPjfRfl/Wdv/ndST3/zkQUn12ArPepyPrcSjzr8v7+z0T/z0RHiPTdSDz/z0MUn1xHh/PcSDz/zkP/67D/+eX3Y1OKAAAAyHRSTlMAAQIDBQYGBwcJCgwTFBYXGhsfJy00Nzg6Q0RGRkhOTlBQUVdYWltbX19hY2Rna2tsbW5xdXV6fYCBgoSEhYeKi4yNk5WWlpaZmpqfn6Gjo6OlpaioqqqqqrCxs7W7vL6/v8HDw8PExMTExcXFx8jKzMzNzs7P0NDS0tPT1NTV19jZ2dnb3N7f3+Hh4eLj5OTm5ufn6Onp6enq6urr7u7v7/Hy8vP09PT09PX19vb3+Pj4+fn5+vr7/Pz8/Pz8/f39/f39/f7+/onfHhMAAAGeSURBVCjPY2CAAVZl/9q52xc0hRjwM6ADQbsZp2Bge5gwqqTC3FPIYI8xkhyL8yl04M0Kl/U6hQlS2KGSRqewASeIpNh2rLLHJEGSjPnZMIEiRxPr8HgYiOQEysqemLAaLDdZXr941dpy98rTUKAOlA0+cSIBJFkmWrPr5MmTKyY1Z0Jl4xgYmBadOLGm99SpreKzjp4Eg8LF8yCyxwUYRE4AQdapU/ZBOyGSJ3dkNEA1SzEogWRPlJ6SOXASBqLPQmW1GXTAsvUH1fbDZVtat0BkrRi0wLInkkxXwmWrY6CytkAPgcFM891wWc9uqMl6EFcBgduh5TBXyZ2ByioyMM2ByK4P7If6yDJ2G0TyCB8Dgy9Uc1VXejtQbpqGx2ao1lRgWElDZU+01c32czC06Vl4GG4tECTDpE/0TV+3adm+CqhkBxtIVmLfCWSQBosEVUgEmyFLLp0IlfSBpg3GUCTZRKhkDgcsXTG7wCU7N0Ako7iRUqXufKhsHlhuowUjSoLmdV0CkiwAye0NEMLIDVwqvrlTG6eURGjywMUA8rmxs40KLQEAAAAASUVORK5CYII=",
    },
    count: {
      percent: "54.4%",
    },
    chart: [
      <BrowerStateChart
        backgroundColor={["#8480EC", "#ECEFF1"]}
        hoverBackgroundColor={["#8480EC", "#ECEFF1"]}
        dataText={[54.4, 45.6]}
      />,
    ],
  },
  {
    browser: {
      name: "Mozila Firefox",
      logo: "data:image/png;base64,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",
    },
    count: {
      percent: "6.1%",
    },
    chart: [
      <BrowerStateChart
        backgroundColor={["#FBAA64", "#ECEFF1"]}
        hoverBackgroundColor={["#8480EC", "#ECEFF1"]}
        dataText={[8, 92]}
      />,
    ],
  },
  {
    browser: {
      name: "Apple Safari",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAHgAAAACyl2QUAAAAbFBMVEUAAAD///+A//9An/8imfslmvkjmfkjm/kjmfkjmvkjmfojmfkjmvgimvkjmfgjmfgjmvkjmfkimfg0kug0ofhofblpfbhquvmxYXez2/q02/rVUlbY7Pvlc3PmS0fq9PzuaGL4RDf88vL8/PxrgQw9AAAAEnRSTlMAAQIIPFN2hIWLjKi/2eLp8vNALlxxAAAA+0lEQVQoz5VT7ZKDIAzUitZa0DOi6N31g+P937HRUhsMnfb2hyOzm9mwCUmyYicqqdpWyUrsEo6saGBFU2RbPq8hQJ0HdFoCwz4l/BEiOD4VJURRrv4Rsuvx4/vIas73P93c6f0uBS8f7bD8FEs+zZYfznb0ecyJCV5uz50/CBRUrNx6A0SFArkttw8DhESBIrw+zfxqAKBQ0BLB9HelBgBtKDDOoWIkFV+Bhb44VJw6IlBBkxPy7lvTpiW9Jhq4iwkvfSBBzQaT3qQmSNQTK/dR+2EZXu6HdR+3/jV86H7cy8IYHdma/M3K7T9f2ujal+l/Hs4HT+/l470BD/Y004J14jYAAAAASUVORK5CYII=",
    },
    count: {
      percent: "14.6%",
    },
    chart: [
      <BrowerStateChart
        backgroundColor={["#92969A", "#ECEFF1"]}
        hoverBackgroundColor={["#92969A", "#ECEFF1"]}
        dataText={[15, 85]}
      />,
    ],
  },
  {
    browser: {
      name: "Internet Explorer",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAMAAABluEcAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAH6ADAAQAAAABAAAAHQAAAAAKR4aWAAABrVBMVEUAAAAA//8A//8A//8AzP8A1f8A2/8Av/8Axv8A0f8Av/8Au/8Axv8AvP8Av/8Awv8Awv8AvfYAwfYAu/cAvfcAv/cAvPgAwfgAv/kAvvkAvPkAv/oAu/oAvvUAv/UAvfYAvvYAv/YAvvYAu/cAvPcAvfcAvvcAu/cAvPcAvPgAvfgAvvgAu/gAvvUAu/UAvPUAvvYAu/YAvfYAvvYAvPYAvfYAu/cAvPcAvfcAvPcAvfcAu/cAvPcAvfcAvfcAvPUAu/UAvPUAu/YAvPYAvPYAvfYAvPYAvfYAvPcAu/cAvPcAvPcAvfcAvPUAvPUAu/YAvPYAvfYAvPYAvPYAvfYAvPYAu/cAvPUAvPUAu/UAvPUAu/YAvPYAu/YAvPYAvPYAvPYAu/UAvPUAvPUAvPYAvPYAvPYAu/YAvPYAu/YAvPYAu/YAvPUAvPUAu/UAvPUAu/UAvPUAu/YAvPYAu/YAvPYAvPYAvPYAvPYAu/YAu/UAvPUAvPUAvPUAvPUAu/UAvPUAu/UAu/UAvPYAvPYAu/YAu/YAu/YAu/YAvPYAvPYAu/YAu/YAvPYAu/Usg2eMAAAAjnRSTlMAAQIDBQYHCAkLDA8SExQVGRsdHh8gIiUoKy4wMTM0Njc4Ozw9Pj9AQUVGSktOT1BSU1VWWFlaXF1fYGJjZGVmaWttbm9wcnR5fH1+f4GGi4yOkJGSlJaZnJ6hoqOmqKuwtLa7vb/CxMbHysvMzs/R09XX2Nvf4OPk5ebn6Ovs7e7w8fLz9PX4+fr7/P3+32gvlAAAAYFJREFUKM9jYCAdsGkHZJS3V6dbsmBIMQvLaAbU9YFBV18kqiS3c2IjRKqvN0qVjVmrXhlJliuguQ8OOn3ZgEL+jghpldI+FFAozsDg7AOX1u3oQwMNSgzB5jBpjc6+0mx0BZL6glBp/qp2T6tukGBxfFI13ApWmPbwalmbHqBIhSaIp1YCVeABlRYtEnHsBfJLeCB8zkKIfA3UACcJdZDuXiWYedK9EAX6EK4gXyWIl4fwbQFEPhTKTQTzcr3gIB8inwmRdunDAarA0gKtuOTbwfIRuKT7OkDSwl1QXpwCOpAHyQfCVKdhTS0s9XDbxOCC8qpgIAFk6iCsS2GEShtCBayB7JC+viZY1CXwQqShHqpmB3Ky+vr0hJugCqr9jI3cM2DmmYAU1/alMzDYYvNdHNiwzj4HIBmEKZ3KBpav6FMHUa49aNLRHBC3xvbZg2mdImTZMlOYV6Vamuzkpc3CVJkMc6CSXckWbIgAkkusaSuIMQAZJ2Tk6u1mpciOkAQAdXQF0tDLauQAAAAASUVORK5CYII=",
    },
    count: {
      percent: "4.2%",
    },
    chart: [
      <BrowerStateChart
        backgroundColor={["#2DD5E7", "#ECEFF1"]}
        hoverBackgroundColor={["#2DD5E7", "#ECEFF1"]}
        dataText={[8, 92]}
      />,
    ],
  },
  {
    browser: {
      name: "Opera Mini",
      logo: "data:image/png;base64,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",
    },
    count: {
      percent: "8%",
    },
    chart: [
      <BrowerStateChart
        backgroundColor={["#E96A6D", "#ECEFF1"]}
        hoverBackgroundColor={["#E96A6D", "#ECEFF1"]}
        dataText={[8, 92]}
      />,
    ],
  },
];

const BrowserStateListing = (props) => {
  const { browser, count, chart } = props;

  return (
    <div className='flex items-center first:mt-0 justify-between'>
      <div className='flex space-x-3 font-medium'>
        <img src={browser.logo} alt='' />
        <span className='text-sm text-gray-500 break-normal'>
          {browser.name}
        </span>
      </div>
      <div className='flex items-center space-x-4'>
        <span className='text-sm text-gray-500 font-medium'>
          {count.percent}
        </span>
        <span>{chart}</span>
      </div>
    </div>
  );
};

const BrowserStates = () => {
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
    <div className='rounded-md shadow-sm bg-white -mb-px h-full'>
      <div className='relative flex justify-between items-center p-5'>
        <div>
          <h4 className='font-medium  text-gray-600 tracking-wide text-lg'>
            Browser States
          </h4>
          {/*  todo fixed paragraph font size bellow */}
          <p className='text-xs text-gray-500'>Counter August 2020</p>
        </div>
        <div ref={container} className='relative text-gray-500 flex text-sm'>
          <FiMoreVertical
            className='h-5 w-5 cursor-pointer select-none'
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
          <Transition
            show={isOpen}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            className="absolute top-10 -right-2 lg:left-0 -mt-3 border border-gray-400 border-opacity-20  shadow-sm flex   flex-col bg-white py-1.5  w-max rounded-md z-10'"
          >
            <a
              className='text-gray-500 text-sm py-2 text-left px-5 hover:bg-indigo-50 hover:text-indigo-500'
              href='/'
            >
              Last 28 Days
            </a>
            <a
              className='text-gray-500 text-sm py-2 text-left px-5 hover:bg-indigo-50 hover:text-indigo-500'
              href='/'
            >
              Last Month
            </a>
            <a
              className='text-gray-500 text-sm py-2 text-left px-5 hover:bg-indigo-50 hover:text-indigo-500'
              href='/'
            >
              Last Year
            </a>
          </Transition>
        </div>
      </div>
      <div className='px-5 pb-5 space-y-7'>
        {BrowserData.map((data, index) => {
          const { browser, count, chart } = data;
          return (
            <BrowserStateListing
              browser={browser}
              count={count}
              chart={chart}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrowserStates;
