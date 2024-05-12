import React, { Fragment } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useDispatch, useSelector } from "react-redux"
import Cookies from "js-cookie"
import { profileAction } from "../redux/profileSlice"
import { useRouter } from "next/router"
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import Link from "next/link"
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react"
import { Cog6ToothIcon, PowerIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { API_BASE_URL_AUTH } from "../constants/APIConstants"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
export default function Example() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const closeMenu = () => setIsMenuOpen(false)
  const profileData = useSelector((state) => state?.profile?.profile)
  const router = useRouter()
  const dispatch = useDispatch()
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

        router.push("/")
        setIsMenuOpen(false)
      })
      .catch(function (error) { })
  }
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <p className="hidden lg:block md:block">{profileData?.user?.name}</p>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <Link href="/account" className="border-none hover:border-none focus:outline-0">
          <MenuItem
            onClick={closeMenu}
            className="flex items-center gap-2 rounded  "
          >
            {React.createElement(Cog6ToothIcon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              color="inherit"
            >
              Edit Profile
            </Typography>
          </MenuItem>
        </Link>
        <Link href="/wishlist" className="border-none hover:border-none focus:outline-0">
          <MenuItem
            onClick={closeMenu}
            className="flex items-center gap-2 rounded "
          >
            {React.createElement(HeartIcon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              color="inherit"
            >
              Wishlist
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem
          className="flex items-center gap-2 rounded 
             "
        >
          {React.createElement(ShoppingBagIcon, {
            className: "h-4 w-4 ",
            strokeWidth: 2,
          })}
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="inherit"
          >
            Orders
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleSignOut}
          className="flex items-center gap-2 rounded 
            hover:bg-red-500/10 focus:bg-red-500/10 "
        >
          {React.createElement(PowerIcon, {
            className: "h-4 w-4 text-red-500",
            strokeWidth: 2,
          })}
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="red"
          >
            Sign out
          </Typography>
        </MenuItem>

      </MenuList>
    </Menu>
  )
}
