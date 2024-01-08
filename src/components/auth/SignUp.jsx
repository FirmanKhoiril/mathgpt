import { useGlobalStore } from "../../context/useGlobalStore";
import { google, facebook, apple } from "../../assets";
import { MdEmail } from "react-icons/md";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { Button, Input } from "../";

const SignUp = () => {
  const { setIsSignup, showPassword, setShowPassword } = useGlobalStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPassword(false);
    // to clear show password state and doing stuff like fecthing to backend
  };

  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
    // handle show password
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 flex flex-col gap-6 sm:gap-3">
      {/* Full Name Input Section */}
      <div className="relative w-full flex flex-col-reverse gap-2 h-[57px] sm:h-auto">
        <Input text={"Full Name"} inputStyle={"register__input"} required placeholder="Enter Full Name" type="text" id="fullName" labelStyle={"register__input__label"} />
        <Button icon={<FaUser size={24} color="#01092A" />} className="absolute sm:block hidden left-4 bottom-[18px]" type="button" />
      </div>
      {/* Email Input Section */}
      <div className="relative w-full flex flex-col-reverse gap-2 h-[57px] sm:h-auto">
        <Input required labelStyle={"register__input__label"} text={"Email"} type="email" id={"email"} placeholder="Enter email address" inputStyle={"register__input"} />
        <Button icon={<MdEmail size={24} color="#01092A" />} className="absolute sm:block hidden left-4 bottom-[18px]" type="button" />
      </div>
      {/* Password Input Section */}
      <div className="relative w-full flex flex-col-reverse gap-2 h-[57px] sm:h-auto">
        <Input required type={showPassword ? "text" : "password"} placeholder="Enter password" id="password" text={"Password"} labelStyle={"register__input__label"} inputStyle={"register__input"} />
        <Button className="absolute sm:block hidden left-4 bottom-[18px]" type="button" onClick={toogleShowPassword} icon={showPassword ? <IoMdUnlock size={24} color="#01092A" /> : <IoMdLock size={24} color="#01092A" />} />
      </div>
      {/* Sign Up Button */}
      <Button text={"Sign Up"} type="submit" className="w-full h-[57px] text-white sm:font-[600] font-normal rounded-[20px] my-1 bg-black" />

      <div className="w-full py-1 z-10 flex justify-center relative mx-auto h-[10px]">
        <p className="text-center  bg-white sm:hidden block h-[20px] text-sm w-[93px] text-black/60">Sign In With</p>
        <p className="text-center  bg-rightRegister sm:block hidden  h-[20px] text-sm w-[53px] text-black/60">or</p>
        <div className="absolute border-b top-3 -z-10  border-black/50 w-full h-[1px] " />
      </div>
      {/* Social Media Buttons */}
      <div className="sosial__media__container">
        <Button type="button" icon={<img src={google} alt="Sign in with Google" width={30} height={30} />} className="sosial__media__container__button" />
        <Button type="button" icon={<img src={facebook} alt="Sign in with Google" width={30} height={30} />} className="sosial__media__container__button" />
        <Button type="button" icon={<img src={apple} alt="Sign in with Google" width={30} height={30} />} className="sosial__media__container__button" />
      </div>
      {/* Sign In/Already have Account Section */}
      <div className="flex w-full justify-center items-center gap-1">
        <p className="text-sm text-black/60">Already have an account?</p>
        <Button text={"Sign In"} type="button" className="text-sm text-black font-semibold" onClick={() => setIsSignup(false)} />
      </div>
    </form>
  );
};

export default SignUp;
