import axios from "axios"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler"
import { API_BASE_URL_AUTH } from "../constants/APIConstants"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [searchProductsData, setSearchProductsData] = useState([])
  const [prevSearchTerm, setPrevSearchTerm] = useState(true)
  useEffect(() => {
    let isMounted = true
    const term = searchTerm || prevSearchTerm
    setTimeout(() => {
      if (searchTerm) {
        axios
          .get(
            `${API_BASE_URL_AUTH}/api/products/search/${term}`
          )
          .then((response) => {
            if (isMounted) {
              setSearchProductsData(response?.data)
              setLoading(true)
            }
          })
          .catch((error) => {
            console.error(error)
            // Handle error by showing error message or reporting to server etc.
          })
      } else {
        setLoading(false)

        return
      }
    }, 2000)

    return () => {
      isMounted = false
    }
  }, [searchTerm, prevSearchTerm])

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setLoading(false)
        }}
      >
        <div className="relative w-full lg:w-[480px] inline-block text-left">
          <div className=" w-full justify-center bg-[#0F172A] p-2 lg:p-0 sm:w-full items-center">
            <form>
              <div className="relative lg:w-full  sm:w-full p-0 rounded-md">

                <input
                  value={searchTerm}
                  type="search"
                  id="default-search"
                  className="block w-full p-2 pl-14  bg-gray-200 text-sm text-gray-900 border border-gray-300  focus:outline-0  "
                  placeholder="Search Products,Brands & More..."
                  required
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setPrevSearchTerm(!prevSearchTerm)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3  pointer-events-none px-2">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </form>
          </div>
          {loading ? (
            <>
              <div
                className="absolute w-full lg:w-[480px] right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className={`py-1 h-[220px] overflow-y-scroll ${searchProductsData?.length > 4 ? "sm:h-[450px]" : "sm:h-auto"} `} role="none">
                  {searchProductsData?.map((val, index) => {
                    return (
                      <div key={index} onClick={() => setLoading(false)}>
                        {val.title ? (
                          <Link
                            href={`/productDetail/${val._id}`}
                            className="text-gray-700 block px-4 py-4 text-sm hover:bg-gray-200 border-b"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            <div className="w-full flex-row flex items-center">
                              <img
                                src={val?.thumbnail}
                                alt=""
                                srcSet=""
                                className="w-10 h-10 mr-2 object-contain"
                              />
                              <p className="line-clamp-2">{val?.title}</p>
                            </div>
                          </Link>
                        ) : (
                          <>
                            <div role="status">
                              <svg
                                aria-hidden="true"
                                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"
                                />
                              </svg>
                              <span className="sr-only">Loading...</span>
                            </div>
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </OutsideClickHandler>
    </>
  )
}
export default React.memo(SearchBar)
