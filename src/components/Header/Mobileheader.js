import { Disclosure } from "@headlessui/react"
import Link from "next/link"
import React, { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useDispatch, useSelector } from "react-redux"
import { profileAction } from "../../redux/profileSlice"
import Cookies from "js-cookie"
import { API_BASE_URL_AUTH } from "../../constants/APIConstants"

const Mobileheader = ({ setMobileMenuOpen, profile }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  const dispatch = useDispatch()
  const profileData = useSelector((state) => state?.profile?.profile)
  const handleSignOut = async () => {
    await fetch(`${API_BASE_URL_AUTH}/api/users/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
        Authorization: `Bearer ${profileData.token}`,
      },
    })
      .then(async (response) => {
        Cookies.remove("tokken")
        Cookies.remove("userName")
        dispatch(profileAction.setProfile({}))
        setMobileMenuOpen(false)
        router.push("/")
      })
      .catch(function (error) { })
  }
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <Disclosure as="div" className="-mx-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white">
                  All categories
                  <ChevronDownIcon
                    className={classNames(
                      open ? "rotate-180" : "",
                      "h-5 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2 mx-3">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/category/Fashions"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
                  >
                    Fashion
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/category/Electronics"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
                  >
                    Electronics
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/category/Laptop"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
                  >
                    Laptop
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/category/Gaming"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
                  >
                    Gaming
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/category/Women"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
                  >
                    Women
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/category/Men"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
                  >
                    Men
                  </Link>

                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/category/Smartphones"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
                  >
                    Smartphones
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/account"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
          >
            Account
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/wishlist"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
          >
            Wishlist
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/cart"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
          >
            Cart
          </Link>
        </div>
        <div className="py-6">
          {profileData?.user?.name ? (
            <Link
              href="/auth/sign-in"
              className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              onClick={handleSignOut}
            >
              Sign Out
            </Link>
          ) : (
            <Link
              href="/auth/sign-in"
              className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Mobileheader
