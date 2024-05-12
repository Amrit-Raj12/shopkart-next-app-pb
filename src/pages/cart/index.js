import { useSelector } from "react-redux"
import Cart from "../../features/Cart/index"
import Link from "next/link";

const Index = () => {
    const items = useSelector((state) => state?.cart)

    return items.length > 0 ? <Cart /> : <>
        <div className="flex justify-center items-center">
            <div className="container flex mt-10 items-center flex-col w-[390px] h-[100vh]">
                <img src="https://img.freepik.com/free-vector/add-cart-concept-illustration_114360-1435.jpg?w=360&t=st=1683202559~exp=1683203159~hmac=6321f0edcb933fb99792546a75a6c0cf475b1eef68d19ebc9797651adb9d73d0" alt="empty cart" />
                <h1 className="text-2xl font-semibold tracking-wide font-sans mt-3 text-gray-950"> Your Cart is Empty </h1>
                <p className="text-base font-sans mt-2 mb-2 text-gray-800 text-center"> Looks like you have not added anything to your cart. Go ahead & explore top categories.</p>
                <Link href='/' className="flex	items-center justify-center leading-none py-4	text-white bg-indigo-700 px-5 mt-3 shadow-lg text-base">
                    Continue shopping
                </Link>
            </div>
        </div>


    </>


}

export default Index
