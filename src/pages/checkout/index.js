import React, { useState } from "react"
import HttpsIcon from "@mui/icons-material/Https"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"
import EventIcon from "@mui/icons-material/Event"
import Payement from "../../components/checkoutpayement/payement"
import { Button } from "@material-tailwind/react";
const Index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <div className="container mx-auto flex justify-center items-center flex-col   mt-2 mb-2 ">
        <div className=" w-full lg:w-3/4 flex flex-col  justify-center mx-auto   ">
          <div className=" w-full lg:w-3/5  flex flex-col justify-center  p-10 mx-auto shadow-xl bg-white">
            <div className="w-2/4 mb-2">
              <h1 className="text-lg font-semibold">Billing details</h1>
            </div>

            <div className="  ">
              <h1 className="text-lg">Personal information</h1>
              <label
                htmlFor="Email"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="">
              <label
                htmlFor="Name"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="">
              <label
                htmlFor="Mobile No."
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile No.
              </label>
              <input
                type="text"
                placeholder="Enter your Mobile No. "
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="">
              <label
                htmlFor="Address"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your Address "
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="">
              <label
                htmlFor="Landmark"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Landmark
              </label>
              <input
                type="text"
                placeholder="Enter your Landmark "
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <Button onClick={handleOpen} className="mt-4">Checkout</Button>
          </div>
          <div className="w-full lg:w-3/5 flex flex-col justify-center  mx-auto  bg-white">
            {/* <div className="">
            <h1 className="text-lg">Payment</h1>
            <label
              htmlFor="Email"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Card Number
            </label>
            <input
              type="text"
              placeholder="Card Number"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div> */}
            {/* 
          <div className="flex flex-row items-center justify-between ">
            <div className="w-1/4 flex flex-col justify-center">
              <label
                htmlFor="Email"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Month
              </label>
              <input
                type="text"
                placeholder="MM"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-1/4 flex flex-col justify-center">
              <label
                htmlFor="Email"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Year
              </label>
              <input
                type="text"
                placeholder="YYYY"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-1/4 flex flex-col justify-center">
              <label
                htmlFor="Email"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                CVV
              </label>
              <input
                type="text"
                placeholder="123"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div> */}


          </div>
        </div>
      </div>

      <div className="w-full container ">
        <Payement open={open}
          handler={handleOpen}
          setOpen={setOpen}
        />
      </div>
    </>
  )
}

export default Index
