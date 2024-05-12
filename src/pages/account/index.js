import { useEffect, useState } from "react"
import axios from "axios"
import Loading from "../../components/loading/loading"
import { useSelector } from "react-redux"
import { useCallback, memo, lazy } from "react"
import { Suspense } from "react"
import { useRouter } from "next/router"
import { API_BASE_URL_AUTH } from "../../constants/APIConstants"

const Profile = lazy(() => import("../../features/Profile"))
const Index = () => {
  const router = useRouter()
  const profileData = useSelector((state) => state?.profile?.profile)
  const tokenString = profileData?.token
  const [userProfile, setUserProfile] = useState()
  const [loading, setLoading] = useState(false)
  const fetchData = useCallback(async () => {
    try {
      const response = await axios(`${API_BASE_URL_AUTH}/api/users/v1/me`, {
        headers: { Authorization: `Bearer ${tokenString}` },
      });
      setUserProfile(response.data);
      setLoading(true);
    } catch (error) {
      // handle error
    }
  }, [tokenString]);

  useEffect(() => {
    fetchData();
  }, [tokenString]);

  if (!profileData?.token) {
    router.push("auth/sign-in")
  } else {
    return (
      <Suspense fallback={<h1><Loading /></h1>}>
        <Profile userProfile={userProfile} loading={loading} />
      </Suspense>)
  }


}
export default memo(Index);