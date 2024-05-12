"use client"
import Login from "@features/auth/login"
import Meta from "../../../components/meta"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const Index = () => {

  const profileData = useSelector((state) => state?.profile?.profile)

  const router = useRouter()
  if (profileData?.token) {
    router.push("/")
  } else {
    return (
      <Meta title="Login" description="Login page">
        <Login />
      </Meta>
    )
  }
}

export default Index
