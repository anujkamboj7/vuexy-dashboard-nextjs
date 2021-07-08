import { useState, useRef, useEffect } from "react";
import {
  FiCheck,
  FiCreditCard,
  FiDollarSign,
  FiMoreVertical,
  FiPocket,
  FiTrendingUp,
} from "react-icons/fi";

import { Transition } from "@tailwindui/react";
import Link from "next/link";
const TransactionData = [
  {
    payment: {
      type: "Wallet",
      merchantName: "Starbucks",
    },
    transactionInfo: {
      totalPrice: {
        debit: "-$74",
      },
    },
  },
  {
    payment: {
      type: "Bank Transfer",
      merchantName: "Add Money",
    },
    transactionInfo: {
      totalPrice: {
        credit: "+$480",
      },
    },
  },
  {
    payment: {
      type: "Paypal",
      merchantName: "Add Money",
    },
    transactionInfo: {
      totalPrice: {
        credit: "+$480",
      },
    },
  },
  {
    payment: {
      type: "Mastercard",
      merchantName: "Ordered Food",
    },
    transactionInfo: {
      totalPrice: {
        debit: "-$23",
      },
    },
  },
  {
    payment: {
      type: "Transfer",
      merchantName: "Refund",
    },
    transactionInfo: {
      totalPrice: {
        debit: "+$98",
      },
    },
  },
];

const TransanctionListing = (props) => {
  const { transaction, payment } = props;
  return (
    <div className='flex items-center justify-between'>
      <div className='flex space-x-3.5'>
        {payment.type === "Wallet" && (
          <span className='bg-indigo-50 dark:bg-indigo-500 dark:bg-opacity-10 text-indigo-500 h-9 w-9 justify-center flex items-center rounded-md'>
            <FiPocket className='h-4 w-4' />
          </span>
        )}
        {payment.type === "Bank Transfer" && (
          <span className='bg-green-50 dark:bg-green-500 dark:bg-opacity-10  text-green-500 h-9 w-9 justify-center flex items-center rounded-md'>
            <FiCheck className='h-4 w-4' />
          </span>
        )}
        {payment.type === "Paypal" && (
          <span className='bg-red-50 dark:bg-red-500 dark:bg-opacity-10 text-red-500 h-9 w-9 justify-center flex items-center rounded-md'>
            <FiDollarSign className='h-4 w-4' />
          </span>
        )}
        {payment.type === "Mastercard" && (
          <span className='bg-amber-50 dark:bg-amber-500 dark:bg-opacity-10 text-amber-500 h-9 w-9 justify-center flex items-center rounded-md'>
            <FiCreditCard className='h-4 w-4' />
          </span>
        )}
        {payment.type === "Transfer" && (
          <span className='bg-cyan-50 dark:bg-cyan-500 dark:bg-opacity-10 text-cyan-500 h-9 w-9 justify-center flex items-center rounded-md'>
            <FiTrendingUp className='h-4 w-4' />
          </span>
        )}
        <div>
          <h5 className='text-gray-500 dark:text-gray-300 text-sm font-medium'>
            {payment.type}
          </h5>
          <p className='text-xs text-gray-400'>{payment.merchantName}</p>
        </div>
      </div>
      <div className='flex items-center'>
        {transaction.totalPrice.debit && (
          <span className='text-sm text-red-500 font-semibold'>
            {transaction.totalPrice.debit}
          </span>
        )}
        {transaction.totalPrice.credit && (
          <span className='text-sm text-green-500 font-semibold'>
            {transaction.totalPrice.credit}
          </span>
        )}
      </div>
    </div>
  );
};

const Transaction = () => {
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
    <div className='rounded-md shadow-sm bg-white dark:bg-dark-medium  h-full'>
      <div className='relative flex justify-between items-center p-5'>
        <div>
          <h4 className='font-medium  text-gray-600 dark:text-gray-300 tracking-wide text-lg'>
            Transactions
          </h4>
        </div>
        <div
          className='relative text-gray-500 dark:text-gray-300 flex text-sm'
          ref={container}
        >
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
            className='absolute top-10 -right-2 -mt-3 border border-gray-400 border-opacity-20 shadow-sm flex  flex-col bg-white dark:bg-dark-medium py-1.5  w-max rounded-md z-10'
          >
            <Link href='/'>
              <a className='text-gray-500 dark:text-gray-300 text-sm py-2 text-left px-4 hover:bg-indigo-50 dark:hover:bg-dark-heavy hover:text-indigo-500'>
                Last 28 Days
              </a>
            </Link>
            <Link href='/'>
              <a className='text-gray-500 dark:text-gray-300 text-sm py-2 text-left px-4 hover:bg-indigo-50 dark:hover:bg-dark-heavy  hover:text-indigo-500'>
                Last Month
              </a>
            </Link>
            <Link href='/'>
              <a className='text-gray-500 dark:text-gray-300 text-sm py-2 text-left px-4 hover:bg-indigo-50 dark:hover:bg-dark-heavy  hover:text-indigo-500'>
                Last Year
              </a>
            </Link>
          </Transition>
        </div>
      </div>
      <div className='px-5 pb-5 space-y-6'>
        {TransactionData.map((data, index) => {
          const { payment, transactionInfo } = data;
          return (
            <TransanctionListing
              payment={payment}
              transaction={transactionInfo}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Transaction;
