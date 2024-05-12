import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"
import { useState } from "react"
import Loading from "../../components/loading/loading"
const Profile = ({ userProfile, loading }) => {
  const [firstName, setFirstName] = useState("")
  const data = [
    {
      label: "Account Profile",
      value: "profile",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Password",
      value: "password",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ]
  return (
    <>
      <div className="container h-auto lg:h-[500px] bg-white mt-1 mx-auto flex justify-center items-center">
        <Tabs value="profile" className="max-w-[40rem] sm:h-[400px]  mt-5">
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: "bg-blue-500/10 shadow-none text-blue-500",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel key={`profile`} value={`profile`}>
              <div className="w-full sm:w-[400px]">
                <div className="w-full sm:w-[400px] flex flex-col lg:flex-row justify-around items-center">
                  <div className="w-full sm:w-[400px] lg:w-2/4 flex flex-col p-2 ">
                    <label
                      htmlFor="Name"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      value={userProfile?.name}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your Enter"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label
                      htmlFor="Name"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Gender "
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full lg:w-2/4 flex flex-col p-2 ">
                    <label
                      htmlFor="Email"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      value={userProfile?.email}
                      placeholder="Enter your Email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label
                      htmlFor="Name"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Phone number "
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <button className=" text-center px-6 py-2 ml-2 bg-indigo-600 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                  Update
                </button>
              </div>
            </TabPanel>
            <TabPanel key={`password`} value={`password`}>
              <div className="w-full sm:w-[400px]">
                <div className="w-full sm:w-[400px] flex flex-col ">
                  <div className="w-full sm:w-[400px]  flex flex-col p-2 ">
                    <label
                      htmlFor="Current password"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Current password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Current password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full  flex flex-col p-2 ">
                    <label
                      htmlFor="New password"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      New password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your New password"
                      className="bg-gray-50 border w-full border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label
                      htmlFor="Confirm password"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Confirm password "
                      className="bg-gray-50 border w-full border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <button className="px-6 text-center py-2 ml-2 bg-indigo-600 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                  Update
                </button>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div></>
  )
}

export default Profile
