import ProfilePic from '../ProfiePic'
import { FaPencilAlt } from 'react-icons/fa'
import { useGlobalStore } from '../../context/useGlobalStore'


const User = () => {
    const { setIsEditProfile, isEditProfile} = useGlobalStore()

    const toogleEditProfile = () => setIsEditProfile(!isEditProfile)
    // Toogle State Showing EditProfile Components

  return (
    <div>
         <div className=' border dark:border-gray-900'>
            <div className='flex justify-end'>
          <button type='button' onClick={toogleEditProfile} className="flex items-center gap-3 py-1.5 mt-4 mr-4 px-3 border border-black/10 dark:border-white/10 text-sm rounded-lg text-black/70 dark:text-white/60">
        <FaPencilAlt size={12} />
        <span>Edit</span>
      </button>
                </div>
                <div className='flex gap-5 pb-4 px-6 sm:gap-10 items-start'>
                  <ProfilePic />
                  <div className='mt-3'>
                    {/*  You can change the Value of john doe if the app has cookies for user */}
                    <h2 className='text-2xl font-medium'>John Doe</h2>
                    <p className='dark:text-white/60 text-black/70 text-[12px] sm:text-sm'>samijack09</p>
                    <p className='dark:text-white/60 text-black/70 text-[12px] sm:text-sm'>
                      Los Angeles, California, USA
                    </p>
                  </div>
                </div>
              </div>
              <div className='card border py-4 pl-6 dark:border-gray-900'>
                <div className='flex justify-end'>
                  <button type='button' onClick={toogleEditProfile} className="flex items-center gap-3 py-1.5 mt-4 mr-4 px-3 border border-black/10 dark:border-white/10 text-sm rounded-lg text-black/70 dark:text-white/60">
        <FaPencilAlt size={12} />
        <span>Edit</span>
      </button>
                </div>
                <p className='text-lg font-semibold'>Personal Information</p>
                <div className='grid grid-cols-2 sm:grid-cols-3 mt-4'>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold dark:text-white/60 text-black/70'>First Name</p>
                      <p className='text-[12px] sm:text-sm dark:text-white/60 text-black/70'>Sami</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold dark:text-white/60 text-black/70'>Email</p>
                      <p className='text-[12px] sm:text-sm dark:text-white/60 text-black/70'>email@gmail.com</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold dark:text-white/60 text-black/70'>
                        Working Professional
                      </p>
                      <p className='text-[12px] sm:text-sm dark:text-white/60 text-black/70'>Information Technology</p>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold dark:text-white/60 text-black/70'>Surname</p>
                      <p className='text-[12px] sm:text-sm dark:text-white/60 text-black/70'>Joe</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold dark:text-white/60 text-black/70'>
                        Mobile Phone
                      </p>
                      <p className='text-[12px] sm:text-sm dark:text-white/60 text-black/70'>(213) 555-1234</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold dark:text-white/60 text-black/70'>
                        Educational Institution
                      </p>
                      <p className='text-[12px] sm:text-sm dark:text-white/60 text-black/70'>Graduated</p>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold dark:text-white/60 text-black/70'>Username</p>
                      <p className='text-[12px] sm:text-sm dark:text-white/60 text-black/70'>samijack09</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card border py-4 pl-6 dark:border-gray-900'>
                <div className='flex justify-end'>
                  <button type='button' onClick={toogleEditProfile} className="flex items-center gap-3 py-1.5 mt-4 mr-4 px-3 border border-black/10 dark:border-white/10 text-sm rounded-lg text-black/70 dark:text-white/60">
        <FaPencilAlt size={12} />
        <span>Edit</span>
      </button>
                </div>
                <p className='text-lg font-semibold'>Address Details</p>
                <div className='grid grid-cols-2 mt-4'>
                  <div className='space-y-3'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>Country</p>
                      <p className='text-[12px] sm:text-sm text-2'>United States of America</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>
                        Postal Code
                      </p>
                      <p className='text-[12px] sm:text-sm text-2'>ERT 62574</p>
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>City/State</p>
                      <p className='text-[12px] sm:text-sm text-2'>Califonia, USA</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>Tax ID</p>
                      <p className='text-[12px] sm:text-sm text-2'>AS564178969</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default User