import axios from "axios"
import { useEffect } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { lazy } from "react"
import Loading from "../components/loading/loading"
import SearchBar from "../components/SearchBar"
import Mobileview from "../components/Homepage/mobile"
import Image from "next/image"
import Banner from "../components/banner"
import { API_BASE_URL_AUTH } from "../constants/APIConstants"

const ProductCateogry = lazy(() => import("../components/Products/Productcatogry"))
const ProductsCarousel = lazy(
  () => import("../components/Products/ProductsCarousel"),
  { suspense: true }
)
const Highlight = lazy(() => import("../components/Highlights"), {
  suspense: true,
})
const Carousel = lazy(() => import("../components/Carousel"), { suspense: true })
export async function getServerSideProps(context) {
  let carouselData = []
  // const API_BASE_URL_AUTH = 'https://auth-task-app.up.railway.app'
  const urls = [
    `${API_BASE_URL_AUTH}/api/products/search/fashion`,
    `${API_BASE_URL_AUTH}/api/products/search/laptop`,
    `${API_BASE_URL_AUTH}/api/products/search/Smartphones`,
    `${API_BASE_URL_AUTH}/api/products/search/Electronics`,
  ]
  try {
    const response = await Promise.all(urls.map((url) => axios.get(url)))
    const data = response.map((res) => res.data)
    carouselData = data
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      carouselData,
    },
  }
}
export default function Index({ carouselData }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="lg:hidden sm:block md:hidden  w-full ">
          <SearchBar />
        </div>
        <div className="container mx-auto mt-1">
          <Carousel />
        </div>
        <Banner />
        <ProductCateogry />
        <div className=" block lg:hidden md:hidden">
          <Mobileview carouselData={carouselData} />
        </div>
        {carouselData?.length > 0 ? (
          <div className="container mx-auto mt-1">
            {carouselData?.map((val, ind) => (
              <Suspense fallback={<Loading />} key={ind}>
                <ProductsCarousel data={val} key={ind} />
              </Suspense>
            ))}
          </div>
        ) : (
          <div className="container mx-auto flex justify-center">
            <Image
              src="/nproduct.png"
              alt="no-product"
              width={600}
              height={200}
            />
          </div>
        )}

        <Highlight />
      </Suspense>
    </>
  )
}
