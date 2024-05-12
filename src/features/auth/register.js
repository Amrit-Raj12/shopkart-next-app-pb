import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"
import { API_BASE_URL_AUTH } from "../../constants/APIConstants"

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [password, setPassword] = useState("")
  // const API_BASE_URL_AUTH = 'https://auth-task-app.up.railway.app'
  const API_REGISTER_URL = '/api/users'
  function togglePasswordVisibility(event) {
    event.stopPropagation()
    setIsPasswordVisible((prevState) => !prevState)
  }
  const router = useRouter()
  const handleSignUp = async (e) => {
    e.preventDefault()

    axios
      .post(`${API_BASE_URL_AUTH}${API_REGISTER_URL}`, user)
      .then(function (response) {
        router.push("/auth/sign-in")
      })
      .catch(function (error) {
        let errorMessage = error?.response?.data
        if (errorMessage && errorMessage.includes("duplicate")) {
          errorMessage = "Email already exist"
        } else if (errorMessage.includes("password")) {
          errorMessage = "Password length must be greater than 7"
        }
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      })
  }
  const getStrengthClassColor = (password) => {
    if (password.length === 0) {
      return "text-gray-200"
    } else if (password.length < 8) {
      return "text-red-200"
    } else if (!/\d/.test(password)) {
      return "text-orange-800"
    } else if (!/[a-z]/.test(password)) {
      return "text-orange-800"
    } else if (!/[A-Z]/.test(password)) {
      return "text-orange-800"
    } else if (!/[@#$%^&+=]/.test(password)) {
      return "text-orange-800"
    } else {
      return "text-green-600"
    }
  }
  const getStrengthClass = (password) => {
    if (password.length === 0) {
      return "bg-gray-200"
    } else if (password.length < 8) {
      return "bg-red-200"
    } else if (!/\d/.test(password)) {
      return "bg-yellow-200"
    } else if (!/[a-z]/.test(password)) {
      return "bg-yellow-200"
    } else if (!/[A-Z]/.test(password)) {
      return "bg-yellow-200"
    } else if (!/[@#$%^&+=]/.test(password)) {
      return "bg-yellow-200"
    } else {
      return "bg-green-200"
    }
  }
  const getStrengthText = (password) => {
    if (password.length === 0) {
      return "Please enter a password"
    } else if (password.length < 8) {
      return "Password should be at least 8 characters long"
    } else if (!/\d/.test(password)) {
      return "Password should contain at least one number"
    } else if (!/[a-z]/.test(password)) {
      return "Password should contain at least one lowercase letter"
    } else if (!/[A-Z]/.test(password)) {
      return "Password should contain at least one uppercase letter"
    } else if (!/[@#$%^&+=]/.test(password)) {
      return "Password should contain at least one special character"
    } else {
      return "Password is strong!"
    }
  }
  return (
    <>
      <div className="h-[85vh] sm:h-full w-screen mx-auto flex items-center justify-center   py-16 px-4">
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:w-[430px] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
              <div>
                <label
                  htmlFor="Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="Name"
                  name="Name"
                  id="Name"
                  placeholder="Name"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  required
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />

              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  placeholder="name@company.com"
                  required
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative w-full container mx-auto">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    required
                    placeholder="Password"
                    className={`${getStrengthClass(
                      password
                    )} bg-gray-200  rounded border-gray-300 focus:outline-none font-medium leading-none text-gray-800 text-xs mt-2  focus:ring-primary-600 pl-3 focus:border-primary-600 block w-full py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value })
                      setPassword(e.target.value)
                    }}
                  />

                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={(e) => togglePasswordVisibility(e)}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {password.length > 1 ? (
                  <p className={`${getStrengthClassColor(password)} mt-1`}>
                    {getStrengthText(password)}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                Create an account
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <Link
                  href={"/auth/sign-in"}
                  className="font-medium  text-blue-500  hover:underline dark:text-primary-500 ml-1"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Register
