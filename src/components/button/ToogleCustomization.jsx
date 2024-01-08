import React from "react";
import { useGlobalStore } from "../../context/useGlobalStore";
import { MdArrowDropDown } from "react-icons/md";
import { Customization, Button } from "../";

const ToogleCustomization = () => {
  const { showCustomization, setShowCustomization } = useGlobalStore();

  const toogleCustomization = () => {
    setShowCustomization(!showCustomization);
    // Handle toogle show Customization
  };

  return (
    <>
      <Button text={"Customization"} onClick={toogleCustomization} icon={<MdArrowDropDown size={25} color="#15C7B3" className=" sm:hidden block" />} type="button" className="btn__toogle__customization" />
      {/* state to toogle Customization */}
      {showCustomization ? <Customization /> : ""}
    </>
  );
};

export default ToogleCustomization;
