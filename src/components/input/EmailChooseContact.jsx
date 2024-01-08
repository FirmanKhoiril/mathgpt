import React from "react";
import Input from "./Input";
import Button from "../button/Button";
import { FiSearch } from "react-icons/fi";

const EmailChooseContact = () => {
  const handleSubmitChoosenContact = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmitChoosenContact} className="form__email__choose__contact">
      <h1 className="font-semibold font-openSans py-2">Choose Contact</h1>
      <div className="relative">
        <Input placeholder={"Search Contact"} required inputStyle={"input__email__choose__contact"} />
        <Button type={"button"} icon={<FiSearch size={16} color="white" />} className={"absolute top-3 left-6"} />
      </div>
      <Button className={"bg-primary font-semibold rounded-[5px]  text-white w-[120px] h-10 text-center ml-auto"} text={"Validate"} type={"submit"} />
    </form>
  );
};

export default EmailChooseContact;
