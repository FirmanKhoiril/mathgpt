import React from 'react'
import Input from '../input/Input'

const HelpAndSupport = () => {
  return (
    <div className='flex flex-col gap-4 p-4'> 
      <h1 className='font-semibold'>Help Center Acccess</h1>
      <div className="flex flex-col gap-2 max-w-[500px]">
        <Input  id={"billingInstution"} inputStyle={"input__edit__profile"} labelStyle={"font-semibold text-black/80 dark:text-white/80 text-[12px]"} type={"text"} placeholder={"Your Billing Institution"}  />
        <textarea id="description" placeholder='Description' className='input__edit__profile' rows={5}></textarea>
        <div className='flex justify-end'>
         <button className='bg-primary text-[12px] py-1.5 rounded-lg px-3 mt-2'>Submit</button>
      </div>
      </div>
      <p className='text-sm'>
      You may have a common question. You may find it in the
      <a href="https://fgw.vercel.app/faq" target='_blank' className='text-blue ml-1'>FAQ</a>
      </p>
    </div>
  )
}

export default HelpAndSupport