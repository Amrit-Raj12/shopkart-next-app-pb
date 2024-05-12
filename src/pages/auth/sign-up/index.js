import Register from "@features/auth/register";
import Meta from "../../../components/meta";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Index = () => {
  const profileData = useSelector((state) => state?.profile?.profile)
  const router = useRouter()
  if (profileData?.token) {
    router.push("/")
  } else {
    return (
      <Meta title="Signup" description="Signup page">
        <Register />
      </Meta>
    )
  }

};

export default Index;
