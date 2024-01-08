import { allContacts } from "../constants/DummyData";
import { Button, CContact, ContactMessageDetail } from "../components";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import { RiFlag2Line } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Server, duotone, expandLeft, expandRight, meetballMenu, stackframe } from "../assets";
import { useSelectedContact } from "../hooks/useSelectedContact";

const Contact = () => {
  const navigate = useNavigate();
  const { selectedContact } = useSelectedContact();
  const handleBack = () => {
    navigate(-1);
  };

  const selectedContactValue = selectedContact.get("id");

  return (
    <section className="contact__container">
      {/* Contact Small Devices */}
      <div className={` ${selectedContactValue && "sm:inline-block hidden"} contact__container__small__devices`}>
        <div className="flex pr-8 pt-10 pb-4 justify-end w-full">
          <Button type="button" className="contact__button__goback" icon={<BiMenuAltLeft size={22} color="#A0A7B5" />} />
        </div>
        <div className="w-[250px] my-4 rounded-full flex items-center justify-around bg-[rgba(217,_217,_217,_0.80)] mx-auto h-10 px-1">
          <Button type={"button"} text={"Inbox"} className="w-20 h-[30px] text-white rounded-[15px] bg-[#040C34]" />
          <Button type={"button"} text={"Send"} className="w-20 h-[30px] text-black rounded-[15px]" />
          <Button type={"button"} text={"Chat"} className="w-20 h-[30px] text-black rounded-[15px]" />
        </div>
        <div className="w-full flex flex-col pt-8 pb-2">
          {allContacts.map((item, idx) => (
            <CContact key={`${item.name + idx}`} {...item} />
          ))}
        </div>
      </div>

      {/* Left section All Contact */}
      <div className={`  ${selectedContactValue ? "flex border-y " : "sm:flex hidden border"} contact__container__medium__large__devices`}>
        <div className="contact__left__section">
          {/* Left  */}

          <div className="flex items-center gap-5 lg:gap-10">
            <Button type={"button"} onClick={handleBack} icon={<IoMdArrowBack size={24} />} />
            <Button type="button" icon={<img src={duotone} alt="Server" width={28} height={28} />} />
            <Button type={"button"} icon={<RiFlag2Line size={24} color="#A0A7B5" />} />
            <Button type={"button"} icon={<GoTrash size={24} color="#A0A7B5" />} />
            <Button type="button" icon={<img src={Server} alt="Server" width={28} height={28} />} />
            <Button type="button" icon={<img src={stackframe} alt="StackFrame" width={28} height={28} />} />
          </div>

          {/* Right */}
          <div className={`${selectedContactValue ? " sm:flex hidden" : "flex"} items-center gap-5 lg:gap-10 pr-6 lg:pr-10`}>
            <Button text={"01 of 200"} type="button" className="text-[12px] text-gray" />
            <Button type="button" icon={<img src={expandLeft} alt="expandLeft" width={28} height={28} />} />
            <Button type="button" icon={<img src={expandRight} alt="expandRight" width={28} height={28} />} />
            <Button type="button" icon={<img src={meetballMenu} alt="Menu" width={28} height={28} />} />
          </div>
        </div>
        {/*  Right Section Email Message */}
        <ContactMessageDetail />
      </div>
    </section>
  );
};

export default Contact;
