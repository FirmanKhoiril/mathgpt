import { useGlobalStore } from '../context/useGlobalStore'
import { IoClose } from "react-icons/io5";
import Input from './input/Input';
import { currentLevelOfEducation, examLists, professionalFields, studentType } from '../constants/DummyData'
import { useState } from 'react';
import { countries } from 'countries-list';


const EditProfilePopup = () => {
    const {setIsEditProfile, isEditProfile} = useGlobalStore()

    const toogleEditProfile = () => setIsEditProfile(!isEditProfile)

    
    const countryNames = Object.values(countries).map((country) => country.name)
    const countryNamesArray = countryNames.map((country) => country)

    const [userType, setUserType] = useState('')
    const student = userType === 'student'
    const job = userType === 'job'

    const handleSubmit = (e) => {
        e.preventDefault()
        // all logic after Submitting Edit Profile goes beyond this comments
    }
    console.log(userType)

  return (
    <>
    <div className='fixed h-screen w-full z-10  bg-black/90' onClick={toogleEditProfile} />
    <form onSubmit={handleSubmit} className="edit__profile__section">
        <div className="flex w-full justify-between">
        <h1 className='font-semibold text-sm'>Edit Profile</h1>
        <button type='button' onClick={toogleEditProfile}><IoClose size={15} /></button>
        </div>
        <p className='opacity-60 text-[12px]'>Make changes to your profile here. Click save when you're done.</p>
        <div className="max-h-[290px] h-full w-full pl-2 flex flex-col gap-2 overflow-y-auto">
            <div className="flex flex-col-reverse gap-1 w-full">
                <Input text={"Name"} id={"name"} inputStyle={"input__edit__profile"} labelStyle={"font-semibold text-[12px]"} type={"text"} placeholder={"New Name"}  />
            </div>
            <div className="flex flex-col-reverse gap-1 w-full">
                <Input text={"Surname"} id={"surname"} inputStyle={"input__edit__profile"} labelStyle={"font-semibold text-[12px]"} type={"text"} placeholder={"New Surname"}  />
            </div>
            <div className="flex flex-col-reverse gap-1 w-full">
                <Input text={"Email"} id={"email"} inputStyle={"input__edit__profile"} labelStyle={"font-semibold text-[12px]"} type={"email"} placeholder={"example@gmail.com"}  />
            </div>
            <div className="flex flex-col-reverse gap-1 w-full">
                <Input text={"Number"} id={"number"} inputStyle={"input__edit__profile"} labelStyle={"font-semibold text-[12px]"} type={"text"} placeholder={"0123456789"}  />
            </div>
            <select className='select__edit__profile'>
                <option value="">Preparing for</option>
                {examLists.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
            <div className="bg-[#eefcef] dark:bg-[#111827] rounded-lg py-2 flex flex-col gap-2 px-2.5">
                <h1 className='font-semibold text-[12px] opacity-80'>Contact Information</h1>
                <div className="flex flex-col gap-2">
                <div className="flex flex-col-reverse gap-1 w-full">
                <Input text={"Address"} id={"address"} inputStyle={"input__edit__profile"} labelStyle={"font-semibold text-[12px]"} type={"text"} placeholder={"New Address"}  />
            </div>
            <div className="flex flex-col-reverse gap-1 w-full">
                <Input text={"Phone Number"} id={"Phone Number"} inputStyle={"input__edit__profile"} labelStyle={"font-semibold text-[12px]"} type={"text"} placeholder={"0123456789"}  />
            </div>
                </div>
            </div>
            <select onChange={(e) => setUserType(e.currentTarget.value)} className='select__edit__profile'>
                <option value="">User Type</option>
                <option value="student">Student</option>
                <option value="job">Working Professional</option>
            </select>
            {student && (
            <select className='select__edit__profile'>
                 <option value="">Field of Study</option>
                 {studentType.map((item) => (
                     <option value={item}>{item}</option>
                 ))}
             </select>
            )}
            {student && (
            <select className='select__edit__profile'>
                 <option value="">Current Level of Education</option>
                 {currentLevelOfEducation.map((item) => (
                     <option value={item}>{item}</option>
                 ))}
             </select>
            )}
            {job && (
            <select className='select__edit__profile'>
                 <option value="">Professional Field</option>
                 {professionalFields.map((item) => (
                     <option value={item}>{item}</option>
                 ))}
             </select>
            )}
             {student && (
                   <div className="flex flex-col-reverse gap-1 w-full">
                   <Input text={"Educational Institution"} id={"institution"} inputStyle={"input__edit__profile"} labelStyle={"font-semibold text-[12px]"} type={"text"} placeholder={"Your Educational Institution"}  />
               </div>
            )}
            <select className='select__edit__profile'>
                <option value="">Country of Residence</option>
                {countryNamesArray.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
           
        </div>
        <div className="flex justify-end">
        <button className='bg-primary px-2.5 text-[12px] py-1.5 rounded-sm text-white' type='submit'>Save</button>
        </div>
    </form>
    </>
  )
}

export default EditProfilePopup