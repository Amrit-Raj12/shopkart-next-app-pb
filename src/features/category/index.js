import React, { useEffect, useState } from "react";
import MobileFilter from "../../components/filters/mobileFilter";
import Sort from "../../components/filters/sort";
import { Rating, Slider } from "@mui/material";
import Link from "next/link";
import Loader from "../../components/loading/loading";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";

const Index = ({
  valuetext,
  filterActive,
  toggleBrand,
  toggleRating,
  setfilterActive,
  setToggleBrand,
  setToggleRating,
  products,
  handleRating,
  handleChange,
  handleHighToLow,
  handleLowToHigh,
  grid,
  setGrid,
  uniqueBrands,
  selectedBrands,
  setSelectedBrands,
  brandData,
  handleFilters,
  loadingProduct,
}) => {
  const router = useRouter();

  const category = router.query.category;

  const [priceFilter, setPriceFilter] = useState();
  const [ratingFilter, setRatingFilter] = useState(null);

  const handleProductDetails = (id) => {
    router.push(`/productDetail/${id}`);
  };

  const getPriceFilter = (type) => {
    if (type === "Fashion") {
      setPriceFilter({
        min: 0,
        max: 10000,
        step: 100,
      });
    } else if (type === "Laptop") {
      setPriceFilter({
        min: 10000,
        max: 500000,
        step: 1000,
      });
    } else if (type === "Smartphones") {
      setPriceFilter({
        min: 1000,
        max: 200000,
        step: 1000,
      });
    }
  };

  useEffect(() => {
    getPriceFilter(category);
  }, [category]);

  useEffect(() => {
    brandData.length = 0; // Clear the array
    brandData.push(...selectedBrands.map((brand) => brand.value));

    if (brandData?.length > 0) {
      handleFilters({
        category: category,
        filterName: selectedBrands[0].name,
        data: {
          brand: brandData,
        },
      });
    }

    if (ratingFilter) {
      handleFilters({
        category: category,
        filterName: ratingFilter.name,
        data: {
          rating: ratingFilter.value,
        },
      });
    }
  }, [selectedBrands, ratingFilter]);

  const handleCheckboxChange = (event) => {
    const selectedBrand = event.target.value;
    const isChecked = event.target.checked;

    // Update selectedBrands state based on checkbox change
    if (isChecked) {
      setSelectedBrands((prevSelectedBrands) => [
        ...prevSelectedBrands,
        { name: "brand", value: selectedBrand },
      ]);
    } else {
      setSelectedBrands((prevSelectedBrands) =>
        prevSelectedBrands.filter((brand) => brand.value !== selectedBrand)
      );
    }
    handleChange(event);
  };

  const mobilFilterProps = {
    setfilterActive,
    uniqueBrands,
    handleChange,
    priceFilter,
    setPriceFilter,
    category,
    getPriceFilter,
    handleCheckboxChange,
    selectedBrands,
    setRatingFilter
  };

  return (
    <>
      <div className="">
        <div>
          {filterActive ? <MobileFilter {...mobilFilterProps} /> : ""}

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6 sm:pt-24">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Category
              </h1>

              <div className="flex items-center">
                <Sort
                  handleLowToHigh={handleLowToHigh}
                  handleHighToLow={handleHighToLow}
                  handleRating={handleRating}
                />

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                  onClick={() => setGrid(!grid)}
                >
                  <span className="sr-only">View grid</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setfilterActive(!filterActive)}
                >
                  <span className="sr-only">Filters</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="conatiner mx-auto flex justify-between ">
                <form className="hidden lg:block w-1/4">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    <li>
                      <Link href={`/category/${category}`} className="hover:text-blue-200">{category}</Link>
                    </li>
                  </ul>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white p-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Price</span>
                      </button>
                    </h3>

                    <div className="pt-6" id="filter-section-0">
                      <div className="space-y-4">
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
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white p-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                        onClick={() => setToggleBrand(!toggleBrand)}
                      >
                        <span className="font-medium text-gray-900">Brand</span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    {toggleBrand ? (
                      <div className="pt-6" id="filter-section-0">
                        {uniqueBrands?.map((item, index) => (
                          <div key={index} className="space-y-4">
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
                                htmlFor={`filter-color-${index}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {item}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white p-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-1"
                        aria-expanded="false"
                        onClick={() => setToggleRating(!toggleRating)}
                      >
                        <span className="font-medium text-gray-900">Rating</span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    {toggleRating ? (
                      <div className="pt-6" id="filter-section-1">
                        <div className="space-y-4">
                          <div
                            className="flex items-center cursor-pointer"
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
                            className="flex items-center cursor-pointer"
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
                            className="flex items-center cursor-pointer"
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
                            className="flex items-center cursor-pointer"
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
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  {/* <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-2"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900">Size</span>
                      <span className="ml-6 flex items-center">
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
                      </span>
                    </button>
                  </h3>

                  <div className="pt-6" id="filter-section-2">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-size-0"
                          name="size[]"
                          value="2l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-0"
                          className="ml-3 text-sm text-gray-600"
                        >
                          2L
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-1"
                          name="size[]"
                          value="6l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-1"
                          className="ml-3 text-sm text-gray-600"
                        >
                          6L
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-2"
                          name="size[]"
                          value="12l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-2"
                          className="ml-3 text-sm text-gray-600"
                        >
                          12L
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-3"
                          name="size[]"
                          value="18l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-3"
                          className="ml-3 text-sm text-gray-600"
                        >
                          18L
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-4"
                          name="size[]"
                          value="20l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-4"
                          className="ml-3 text-sm text-gray-600"
                        >
                          20L
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-5"
                          name="size[]"
                          value="40l"
                          type="checkbox"
                          checked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-5"
                          className="ml-3 text-sm text-gray-600"
                        >
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div> */}
                </form>
                <div className=" w-full">
                  <div className="flex flex-row flex-wrap w-full items-center  md:justify-start gap-y-10">
                    {loadingProduct ? (
                      <div className="container mx-auto flex justify-center items-center h-[600px]">
                      <PuffLoader
                        color={'blue'}
                        loading={loadingProduct}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </div>
                    ) : products?.map((val, index) => (
                      <div
                        key={index}
                        onClick={() => handleProductDetails(val?._id)}
                        className="group  shadow-md flex flex-col object-contain p-2 sm:p-4 w-[130px] sm:w-[206px] h-[210px] sm:h-[250px] bg-white  ml-5 box rounded-sm cursor-pointer"
                      >
                        <div className="h-[134px] sm:h-[180px]">
                          <img
                            src={val?.thumbnail}
                            className="h-full w-full object-contain "
                          />
                        </div>
                        <div>
                          <h1 className="w-full mt-3 text-gray-700 line-clamp-2 text-sm ">
                            {val.title}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Index;
