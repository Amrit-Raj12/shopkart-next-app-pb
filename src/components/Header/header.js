import { useState, memo } from "react"
import { Dialog, Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useSelector } from "react-redux"
import ProfileDropdown from "../ProfileDropdown"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid"
import { ShoppingBagIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import SearchBar from "../SearchBar"
import { Menu } from "@headlessui/react"
import Image from "next/image"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Mobileheader from "./Mobileheader"
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const profileData = useSelector((state) => state?.profile?.profile)
  const items = useSelector((state) => state.cart)

  return (
    <>
      <header className=" bg-[#0F172A] shadow-lg border-none mt-0">
        <div className=" container mx-auto">
          <div
            className="mx-auto flex w-full items-center justify-between px-4 py-2  lg:px-0"
            aria-label="Global"
          >
            <div className="flex items-center justify-center lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
              <Link href="/" >

                <Image
                  className="w-[15%]; aspect-[3/2] object-contain "
                  src="/logo.png"
                  alt="logo"
                  width="50"
                  height="50"
                />

              </Link>
            </div>

            <div className="items-center hidden  lg:flex">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  className="w-[15%]; aspect-[3/2] object-contain "
                  src="/logo.png"
                  alt="logo"
                  width="50"
                  height="50"
                />
              </Link>
              <span className="text-lg font-semibold leading-6 ml-1 text-white">
                Ecommerce app
              </span>
            </div>

            <div className="hidden lg:flex  lg:justify-end md:flex justify-center items-center">
              <SearchBar />
            </div>
            <div className="flex items-center justify-between sm:ml-8 sm:min-w-[115px]">
              <div className="mr-0 lg:mr-2">
                {profileData?.user?.name ? (
                  <ProfileDropdown profileData={profileData} />
                ) : (
                  <Link
                    href="/auth/sign-in"
                    className="text-base flex items-center mr-2 sm:mr-0  leading-6 text-white  hover:text-purple-600"
                  >
                    Login
                  </Link>
                )}
              </div>
              <div className="flex justify-end   lg:flex lg:flex-1 lg:justify-end  items-center">

                <Menu as="div" className="relative hidden sm:block text-left">
                  <Link href="/wishlist">
                    <div className="relative">
                      <FavoriteBorderRoundedIcon className="text-2xl mr-q sm:mr-3  cursor-pointer text-white  hover:text-purple-600 transition transform duration-200" />
                    </div>
                  </Link>
                </Menu>
                <Menu as="div" className="relative inline-block text-left">
                  <Link href="/cart">
                    <div className="relative">
                      <ShoppingBagIcon className="w-6 h-6 text-white hover:text-purple-600" />
                      {true > 0 && (
                        <div className="absolute bg-purple-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce -top-2 -right-2 rounded-full top- text-white">
                          {items?.length}
                        </div>
                      )}
                    </div>
                  </Link>
                </Menu>
              </div>
            </div>
          </div>
          <Dialog
            as="div"
            className="lg:hidden ease-in duration-500 z-99"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 w-3/5 left-0 z-10 mobile-menu-wrapper ease-in duration-500   overflow-y-auto bg-[#0F172A] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between text-white">
                <h1>Ecommerce App</h1>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <Mobileheader
                setMobileMenuOpen={setMobileMenuOpen}
                profile={profileData}
              />
            </Dialog.Panel>
          </Dialog>
        </div>
      </header >
    </>
  )
}
export default memo(Header)
