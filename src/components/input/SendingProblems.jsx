import { Send } from "../../assets";
import Button from "../button/Button";
import { MdMicNone } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa6";
import MathInput from "react-math-keyboard";
import React, { useRef, useState } from "react";


const SendingProblems = ({ isMic, isPlaceholder }) => {
  const [isMathKeyboard, setIsMathKeyboard] = useState(false)
  const firstMathfieldRef = useRef();
  const [mathValue, setMathValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission, if needed, examp: after user submitting a problem that they have
  };

  const toogleIsMathKeyboard = () => setIsMathKeyboard(!isMathKeyboard)

  return (
    <form onSubmit={handleSubmit} className="relative pb-1 px-1">
      {/* Input Field for Math Problems */}
      <Button icon={<FaRegKeyboard size={20} color={isMathKeyboard && "#15C7B3"} />} className={`absolute left-6 ${isMathKeyboard ? "bottom-5" : "bottom-4"} z-20`} onClick={toogleIsMathKeyboard} />
    {isMathKeyboard ? (
       <div className=" pl-14 bg-white dark:bg-foobar w-full max-w-[99%]">
       {/* Math Live */}
                   <MathInput
                     setValue={setMathValue}
                    
                     setMathfieldRef={(mathfield) =>
                       (firstMathfieldRef.current = mathfield)
                     }
                     
                     divisionFormat="obelus"
                   />
            </div>
    ) : (
      <input type="text" className="input__sending__problems" placeholder={isPlaceholder ? `${isPlaceholder}` : "Write a math Problem..."} />
    
    )}
       {/* Microphone Button (Optional) in home Email page */}
     <Button type={"button"} className={`absolute ${isMathKeyboard ? "bottom-[18px]" : "bottom-[15px]"} z-20 right-14`} icon={<MdMicNone color="#A0A7B5" size={19} />} /> 
      {/* Send Button */}

      <Button type="submit" icon={<img src={Send} width={30} height={30} alt="Sending problem" />} className={`absolute ${isMathKeyboard ? "bottom-[12px]" : "bottom-2.5"} z-20 right-4`} />
    </form>
  );
};

export default SendingProblems;
