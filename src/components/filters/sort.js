import React, { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler"

const Sort = ({ handleLowToHigh, handleHighToLow, handleRating }) => {
  const [sort, setSort] = useState(false)
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setSort(false)
        }}
      >
        <div className="relative inline-block text-left">
          <div>
            <button
              className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
              id="menu-button"
              onClick={handleSort}
            >
              Sort
              <svg
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-900"
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
            </button>
          </div>

          {sort ? (
            <div
              className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <p

                  className="font-medium text-gray-900 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Most Popular
                </p>

                <button
                  onClick={() => {
                    handleRating()
                    setSort(!sort)
                  }}
                  className="text-gray-900 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-2"
                  id="menu-item-2"
                >
                  Best Rating
                </button>



                <button
                  onClick={() => {
                    handleLowToHigh()
                    setSort(!sort)
                  }}
                  className="text-gray-900 block px-4 py-2 text-sm"

                >
                  Price: Low to High
                </button>

                <button
                  onClick={() => {
                    handleHighToLow()
                    setSort(!sort)
                  }}
                  className="text-gray-900 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-4"
                >
                  Price: High to Low
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </OutsideClickHandler>
    </>
  )
}

export default Sort
