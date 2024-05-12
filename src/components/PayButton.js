import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router'
import { API_BASE_URL_AUTH } from '../constants/APIConstants';

const PayButton = () => {

    const items = useSelector((state) => state?.cart)
    const [loading, setloading] = useState(false)
    const profileData = useSelector((state) => state?.profile?.profile)
    const cartItems = items ? items : []

    const stripePromise = loadStripe('pk_test_51N1sTXSGLzKrHE9v83gHnBgs5oc1W4971x5cUeLhtBV9vgsP4fNtKxftlksJAOnlueIm28R2kab0mBAM7UfTG59M00rckxiEET')
    const dispatch = useDispatch()
    const router = useRouter()

    const handleCheckout = () => {
        if (!profileData?.token) {
            router.push("/auth/sign-in")
        }
        else {

            setloading(true)
            axios.post(`${API_BASE_URL_AUTH}/api/stripe/create-checkout-session`, { cartItems, userId: profileData?.user?._id })
                .then((res) => {
                    console.log('res', res)
                    if (res.data?.url) {
                        // // clear cart
                        // dispatch(cartSliceAction.clearCart())

                        window.location.href = res.data?.url

                    }
                })
                .catch((err) => console.log('Error:', err.message))
        }
    }

    //     const handleCheckout = async () => {
    //         setloading(true)
    //         const lineItems = cartItems.map((item) => {
    //             console.log(item.price)
    //             return {
    //                 price_data: {
    //                     currency: 'INR',
    //                     product_data: {
    //                         name: item.title,
    //                         images: [item?.thumbnail],
    //                         description: item?.description,
    //                         metadata: {
    //                             id: item?._id
    //                         }
    //                     },
    //                     unit_amount: item.price  // because stripe interprets price in cents
    //                 },
    //                 quantity: item.quantity
    //             }
    //         })
    //         const { data } = await axios.post('https://auth-task-app.up.railway.app/api/stripe/create-checkout-session', { lineItems })
    //         const stripe = await stripePromise
    //         await stripe.redirectToCheckout({ sessionId: data?.id })
    //         setloading(false)
    //     }

    return (
        <>
            {loading ?
                <button type="button"
                    className=" hidden lg:inline-flex items-center justify-center w-full px-4 py-3  font-semibold leading-6 text-white transition duration-150 ease-in-out bg-indigo-700 rounded-md shadow cursor-not-allowed hover:bg-indigo-400"
                    disabled="">
                    <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Checkout
                </button> :
                <button className="mt-6 w-full hidden lg:block md:block bg-indigo-700 py-3 font-medium text-blue-50" onClick={() => handleCheckout()}>Check Out</button>}
            {loading ?
                <button type="button"
                    className=" inline-flex fixed z-5 bottom-0 left-0 right-0 md:hidden items-center justify-center w-full px-4 py-3  font-semibold leading-6 text-white transition duration-150 ease-in-out bg-indigo-700 rounded-md shadow cursor-not-allowed hover:bg-indigo-400"
                    disabled="">
                    <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Checkout
                </button> :
                <button className="fixed  z-5 bottom-0 left-0 right-0 py-3 bg-indigo-700 text-white text-center sm:hidden rounded-md " onClick={() => handleCheckout()} >
                    Checkout
                </button>}
        </>

    )
}

export default PayButton
