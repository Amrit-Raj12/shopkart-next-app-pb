import { Rating, Slider } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

const MobileFilter = ({
  setfilterActive,
  uniqueBrands,
  priceFilter,
  handleChange,
  valuetext,
  setPriceFilter,
  category,
  getPriceFilter,
  handleCheckboxChange,
  selectedBrands,
  setRatingFilter,
}) => {

  
  useEffect(() => {
    getPriceFilter(category);
  }, [category, setPriceFilter]);

  return (
    <>
      <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>

        <div className="fixed inset-0 z-40 flex">
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <OutsideClickHandler
              onOutsideClick={() => {
                setfilterActive(false);
              }}
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  onClick={() => setfilterActive(false)}
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only text-black">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  <li>
                    <Link href={`/category/${category}`} className="block px-2 py-3 hover:text-blue-200">{category}</Link>
                  </li>
                </ul>

                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-2"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900">Price</span>
                    </button>
                  </h3>

                  <div className="pt-6" id="filter-section-mobile-2">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <Slider
                          aria-label="Small steps"
                          defaultValue={priceFilter?.min}
                          name="price"
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          min={priceFilter?.min}
                          step={priceFilter?.step}
                          max={priceFilter?.max}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      aria-controls="F-section-mobile-0"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900">Brand</span>
                      {/* <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>

                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span> */}
                    </button>
                  </h3>

                  <div className="pt-6" id="filter-section-mobile-0">
                    {uniqueBrands?.map((item, index) => (
                      <div key={index} className="space-y-6">
                        <div className="flex items-center">
                          <input
                            id={`filter-color-${index}`}
                            name="brand"
                            value={item}
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            checked={selectedBrands.some(
                              (brand) => brand.value === item
                            )}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-mobile-color-0"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            {item}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-1"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900">Rating</span>
                      {/* <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>

                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span> */}
                    </button>
                  </h3>

                  <div className="pt-6" id="filter-section-mobile-1">
                    <div className="space-y-6">
                      <div
                        className="flex items-center"
                        onClick={() => {
                          setRatingFilter({
                            name: "Rating",
                            value: 4,
                          });
                        }}
                      >
                        <Rating name="rating" defaultValue={4} readOnly />
                      </div>

                      <div
                        className="flex items-center"
                        onClick={() => {
                          setRatingFilter({
                            name: "Rating",
                            value: 3,
                          });
                        }}
                      >
                        <Rating name="rating" defaultValue={3} readOnly />
                      </div>

                      <div
                        className="flex items-center"
                        onClick={() => {
                          setRatingFilter({
                            name: "Rating",
                            value: 2,
                          });
                        }}
                      >
                        <Rating name="rating" defaultValue={2} readOnly />
                      </div>

                      <div
                        className="flex items-center"
                        onClick={() => {
                          setRatingFilter({
                            name: "Rating",
                            value: 1,
                          });
                        }}
                      >
                        <span className="hover:text-blue-200 cursor-pointer">
                          Show All
                        </span>
                        {/* <Rating name="rating" defaultValue={1} readOnly /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFilter;
