import { Send } from "../../assets";
import Button from "../button/Button";
import { MdMicNone } from "react-icons/md";
import "//unpkg.com/mathlive";
import  { useEffect, useRef, useState } from "react";
import { PiMathOperationsFill } from "react-icons/pi";
import {useGlobalStore} from '../../context/useGlobalStore'

const SendingProblems = ({  isPlaceholder }) => {
  const {dark} = useGlobalStore()
  const [isMathKeyboard, setIsMathKeyboard] = useState(false)
    // Open math keyboard when pressing the pi math icon on mobile devices

  const firstMathfieldRef = useRef();
  const [mathValue, setMathValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission, if needed, examp: after user submitting a problem that they have
  };

  // Customize the mathfield when it is created
  useEffect(() => {
    try {
      firstMathfieldRef.current.mathVirtualKeyboardPolicy = "manual";
    firstMathfieldRef.current.addEventListener("focusin", (evt) => 
      window.mathVirtualKeyboard.show()
    );
    firstMathfieldRef.current.addEventListener("focusout", (evt) => 
      window.mathVirtualKeyboard.hide()
    );
    } catch (error) {
      console.log(error)
    }
  }, []);

  const toogleIsMathKeyboard = () => setIsMathKeyboard(!isMathKeyboard)

  return (
    <form onSubmit={handleSubmit} className="relative pb-1 px-1">
      {/* Input Field for Math Problems */}
      <Button icon={<PiMathOperationsFill size={20} color={isMathKeyboard && "#15C7B3"} />} className={`absolute left-[22px] bottom-4 z-20`} onClick={toogleIsMathKeyboard} />
    {isMathKeyboard ? (
       <div className="bg-white dark:bg-foobar w-full">
       {/* Math Live */}
       <math-field 
        ref={firstMathfieldRef} 
        style={{fontSize: "1.5rem", color: dark ? "white" : "black", display: 'block', outline: 'none', border: dark ?  '1px solid white' : '1px solid black', paddingLeft: '56px', paddingRight: '4.5rem', backgroundColor: dark ? "#040C34" : "white" }}

        onInput={evt => setMathValue(evt.target.value)}
      >
        {mathValue}
      </math-field>
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
