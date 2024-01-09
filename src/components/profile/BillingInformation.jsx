import React from 'react'
import Input from '../input/Input'

const BillingInformation = () => {

  const paymentOptions = ["Paypal", "Card"]
  return (
    <div className='flex flex-col gap-4 p-4'>
      <h1 className='font-semibold'>Billing Information</h1>
          <div className="flex flex-col gap-2">
          <select className='select__edit__profile max-w-[300px]'>
                 <option value="">Payment Method</option>
                 {paymentOptions.map((item) => (
                     <option value={item}>{item}</option>
                 ))}
             </select>
             <div className="flex flex-col-reverse gap-1 max-w-[300px]">
                <Input text={"Billing Adress"} id={"billingInstution"} inputStyle={"input__edit__profile"} labelStyle={"font-semibold text-black/80 dark:text-white/80 text-[12px]"} type={"text"} placeholder={"Your Billing Institution"}  />
            </div>
          </div>
       <div>
       <button className='bg-primary text-[12px] py-1.5 rounded-lg px-3 mt-2'>Save</button>
      </div>
    </div>
  )
}

export default BillingInformation