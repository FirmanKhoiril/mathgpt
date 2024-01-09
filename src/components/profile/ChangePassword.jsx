import React from 'react'
import Input from '../input/Input'

const ChangePassword = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <h1 className='font-semibold'>Change Password</h1>
      <div className="flex flex-col gap-4">
      <div className="flex flex-row-reverse justify-between gap-1 max-w-[350px]">
                <Input text={"Current Password"} id={"currentPassword"} inputStyle={"input__edit__profile w-[280px]"} labelStyle={"font-semibold text-black/80 dark:text-white/80 text-[12px]"} type={"text"} placeholder={"Current Password"}  />
            </div>
            <div className="flex flex-row-reverse justify-between gap-1 max-w-[350px]">
                <Input text={"New Password"} id={"newPassword"} inputStyle={"input__edit__profile w-[258px]"} labelStyle={"font-semibold text-black/80 dark:text-white/80 text-[12px]"} type={"text"} placeholder={"New Password"}  />
            </div>
      </div>
      <div>
       <button className='bg-primary text-[12px] py-1.5 rounded-lg px-3 mt-2'>Update Password</button>
      </div>
    </div>
  )
}

export default ChangePassword