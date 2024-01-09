import React from 'react'

const NotificationPreferences = () => {
    
  // Array of options for enabling or disabling a feature
  const enableDisabled = ['Enabled', 'Disabled']

  //
  return (
    <div className='p-4 flex flex-col gap-4'>
      <h1 className='font-semibold'>Notification Preferences</h1>
      <div className="max-w-[300px] flex flex-col gap-3">
        <select className='w-full text-[12px] py-2 px-2 border border-black/20 rounded-lg dark:border-white/10 bg-white dark:bg-[#0b0908]' >
          {enableDisabled.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <select className='w-full text-[12px] py-2 px-2 border border-black/20 rounded-lg dark:border-white/10 bg-white dark:bg-[#0b0908]' >
          {enableDisabled.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
       <button className='bg-primary text-[12px] py-1.5 rounded-lg px-3 mt-2'>Save</button>
      </div>
    </div>
  )
}

export default NotificationPreferences