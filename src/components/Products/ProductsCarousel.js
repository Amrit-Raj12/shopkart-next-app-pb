import React, { useState } from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import Rating from "@mui/material/Rating"
import { styled } from "@mui/material/styles"
import ProductCard from "./ProductCard"
import { memo } from "react"
/* Install pure-react-carousel using -> npm i pure-react-carousel */

function ProductsCarousel({ data }) {
  const shopBy = [...data].reverse()

  return (
    <>
      <div className="container mx-auto mt-1 mb-2 ">
        <div className="flex items-center justify-center w-full  sm:py-4  ">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={data?.length}
            visibleSlides={5}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex flex-col">
              <div className=" flex justify-between container px-6">
                <div>
                  <h1 className="text-3xl lg:text-2xl font-semibold text-black dark:text-white">
                    Shop by {data[0]?.category.charAt(0).toUpperCase() + data[0]?.category.slice(1)}
                  </h1>
                </div>
                <div className=" flex flex-row justify-between ">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="  bg-white dark:bg-slate-800 p-2 w-6 h-6 ring-1 ring-slate-900/5 dark:ring-slate-200/20 transform transition duration-500 hover:scale-110 shadow-lg rounded-full flex items-center justify-center mr-2 ml-2"
                    id="prev"
                  >
                    <svg
                      width={6}
                      height={8}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className=" bg-white dark:bg-slate-800 p-2 w-6 h-6 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg transform transition duration-500 hover:scale-110 rounded-full flex items-center justify-center "
                    id="next"
                  >
                    <svg
                      width={6}
                      height={8}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </div>

              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden  mt-2">
                <Slider>
                  <div
                    id="slider"
                    className="h-auto p-4  flex lg:gap-10 md:gap-6 gap-14  items-center justify-start transition ease-out duration-700"
                  >
                    {shopBy.map((val, ind) => {
                      return (
                        <ProductCard data={val} ind={ind} key={ind} />
                      )
                    })}
                  </div>
                </Slider>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  )
}
export default memo(ProductsCarousel)