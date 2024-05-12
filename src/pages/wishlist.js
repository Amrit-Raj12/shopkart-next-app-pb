import { Rating } from "@mui/material"
import Link from "next/link"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { cartSliceAction } from "../redux/cartSlice"
import { wishlistSliceAction } from "../redux/wishlistSlice"
import { useRouter } from "next/router"
const Wishlist = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state?.cart)
  const wishlistItem = useSelector((state) => state?.wishlist?.wishlistItems)
  const handleMovetoCart = (val) => {
    dispatch(wishlistSliceAction.removeFromWishlist(val?._id))
    dispatch(cartSliceAction.addItem(val))
  }
  return (

    wishlistItem.length > 0 ? <> <div className="container mx-auto text-center mt-2"><h1 className="text-3xl flex justify-center gap-2 font-semibold">Wishlist <img src="   https://cdn-icons-png.flaticon.com/512/4379/4379680.png " alt="" width="35" height="30" /></h1></div>

      <div className="grid   grid-flow-row gap-8 mb-10 text-neutral-600 container mx-auto sm:grid-cols-1 md:grid-cols-2 justify-center sm:justify-end lg:grid-cols-3 xl:grid-cols-4">
        {wishlistItem?.map((val, index) => (
          <div
            key={index}
            className="group w-[280px] sm:w-auto hover:scale-102 shadow-lg transition duration-300 ease-in flex flex-col bg-white  object-contain gap-3 py-6 sm:py-4 px-4  h-[355px] sm:h-[340px] mt-10 ml-5 box rounded-xl"
          >
            <div className="h-[180px]">
              <Link href={`/productDetail/${val?._id}`}>
                <img
                  src={val?.thumbnail}
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>
            <div>
              <h1 className="w-full mt-3 text-gray-700 line-clamp-2 text-sm ">
                {val.title}
              </h1>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center justify-between">
              <Rating
                name="size-small"
                defaultValue={val?.rating}
                size="small"
              />
              <button onClick={() => handleMovetoCart(val)} className="  text-center w-full sm:w-auto sm:px-6 py-2 ml-2 bg-indigo-600 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div> </> : <div className="flex flex-col container mx-auto h-[100vh] gap-5 items-center"> <div className="flex justify-center mt-8 ">
        <img className="w-[300px] h-[300px] sm:w-auto sm:h-[400px]" src="/wish.PNG" alt="" />
      </div>
      <p className="text-red-500 text-xl font-bold">Your Wishlist is Empty!</p>
      <p className="text-blue-600 text-sm font-semibold text-center">seems like you dont have any wishes here. <br /> Make a wish! </p>
      <Link href='/' className="flex	items-center justify-center leading-none py-4	text-white bg-blue-600 px-5 mt-8 shadow-lg text-base">
        Create new Wish
      </Link>
    </div>

  )
}

export default Wishlist
