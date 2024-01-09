import { RiLogoutBoxLine } from 'react-icons/ri'
import { useState,useEffect } from 'react'
import useInputChange from '../hooks/useInput'
import {HelpAndSupport, ChangePassword, User, BillingInformation, PrivacyPolicy, NotificationPreferences} from '../components/profile'
import { TabList } from '../constants/DummyData'

export default function Profile() {
   // Destructuring values and input handlers from custom hook
  const {  handleCustomChange } =
    useInputChange()

  useEffect(() => {
    // set default User
    handleCustomChange({
      name: 'John doe',
      email: 'example@email.com',
      username: 'johndoe189',
      number: '0534392329',
      surname: 'John',
    })
  }, [])

  // State for the currently selected tab
  const [currentTab, setCurrentTab] = useState("Profile")

  return ( 
    <main className='px-3 min-h-screen pt-10 pb-20  w-full h-full'>
      <div className='card flex flex-col-reverse gap-10 sm:grid grid-cols-12'>
        <div className='col-span-2 '>
           {/* Navigation section with a list of tabs */}
          <nav className='flex flex-col gap-y-3'>
               {/* Mapping through tabList to render individual tabs */}
            {TabList.map((tab, i) => {
              return (
                <button
                  key={i}
                  className={`text-left font-medium px-3 py-2 rounded-md text-[12px] sm:text-sm ${
                    currentTab ===  tab
                      ? 'bg-[#3A7FE133] text-primary'
                      : 'dark:text-white/60 text-black/60'
                  }`}
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab}
                </button>
              )
            })}
            {/* Logout button section */}
            <div className='mt-10'>
              <button className='text-[12px] sm:text-sm px-4 py-2 rounded-md border-2 border-[#15C7B3] text-primary font-bold flex gap-3 items-center'>
                <RiLogoutBoxLine />
                Log Out
              </button>
            </div>
          </nav>
        </div>
        
        <div className='col-span-10 card border dark:border-gray-900 shadow'>
          {/* Rendering content based on the currently selected tab */}
          {currentTab === TabList[0] && <User />}
          {currentTab === TabList[1] && <NotificationPreferences />}
          {currentTab === TabList[2] && <ChangePassword />}
          {currentTab === TabList[3] && <BillingInformation />}
          {currentTab === TabList[4] && <PrivacyPolicy />}
          {currentTab === TabList[5] && <HelpAndSupport />}
          {/* {/* {currentTab === TabList.SocialMediaIntegration && <SosialMediaIntegration />} */}
         
        </div>
      </div>
    </main>
  )
}
