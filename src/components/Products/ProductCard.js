import { Rating } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import { useRouter } from "next/router"
const ProductCard = ({ data, ind }) => {
  const router = useRouter();
  const handleNavigation = (data) => {
    router.push(`/category/${data.category}`)
  }
  return (
    <>
      <Slide index={ind} key={ind}>
        <div className="flex flex-col shadow-lg items-center rounded-lg transform bg-white transition duration-500 hover:scale-95 p-2 cursor-pointer">

          <div className="w-full h-full" onClick={() => handleNavigation(data)}>
            <img
              className="w-[200px] h-[200px] object-contain"
              src={data?.thumbnail}
              alt="product image"
            />
          </div>
          <h5 className="text-base font-semibold line-clamp-2  h-5  text-black dark:text-white mt-2 mb-2">
            {data?.title}
          </h5>
        </div>
      </Slide>
    </>
  )
}

export default ProductCard
