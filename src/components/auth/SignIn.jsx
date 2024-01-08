import { useGlobalStore } from "../../context/useGlobalStore";
import { google, facebook, apple } from "../../assets";
import { MdEmail } from "react-icons/md";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { Button, Input } from "../";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { setIsSignup, showPassword, isAuth, setIsAuth, setShowPassword } = useGlobalStore();
  // Global state variables from useGlobalStore context
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPassword(false);
    setIsAuth(!isAuth);
    navigate("/");
  };

  const handleToogleSignup = () => {
    setIsSignup(true);
  };

  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 flex flex-col gap-6 sm:gap-4">
      <div className="relative w-full flex flex-col-reverse gap-2 h-[57px] sm:h-auto">
        {/* Email Input Section */}
        <Input required labelStyle={"register__input__label"} text={"Email"} type="email" id={"email"} placeholder="Enter email address" inputStyle={"register__input"} />
        <Button icon={<MdEmail size={24} color="#01092A" />} className="absolute sm:block hidden left-4 bottom-[18px]" type="button" />
      </div>

      {/* Password Input Section */}

      <div className="relative w-full flex flex-col-reverse gap-2 h-[57px] sm:h-auto">
        <Input required type={showPassword ? "text" : "password"} placeholder="Enter password" id="password" text={"Password"} labelStyle={"register__input__label"} inputStyle={"register__input"} />
        <Button className="absolute sm:block hidden left-4 bottom-[18px]" type="button" icon={showPassword ? <IoMdUnlock size={24} color="#01092A" /> : <IoMdLock size={24} color="#01092A" />} onClick={toogleShowPassword} />
      </div>
      {/* Remember Me Checkbox and Forgot/Reset Password Links */}
      <div className="flex w-full justify-between sm:pt-4 items-center">
        <div className="flex gap-1.5 items-center">
          <Input id="checkbox" text={"Remember me"} type="checkbox" labelStyle={"text-black/60 sm:text-black"} inputStyle={"h-[20px] w-[20px] sm:border-black/10 border-black accent-black"} />
        </div>
        <p className="text-black sm:hidden block hover:underline cursor-pointer">Forgot password?</p>
        <p className="text-black sm:block hidden hover:underline cursor-pointer">Reset password!</p>
      </div>
      {/* Sign In Button */}
      <Button text={"Sign In"} type="submit" className="w-full h-[57px] text-white sm:font-[600] font-normal rounded-[20px] my-1 bg-black" />

      <div className="w-full py-1 z-10 flex justify-center relative mx-auto h-[10px]">
        <p className="text-center  bg-white sm:hidden block h-[20px] text-sm w-[93px] text-black/60">Sign In With</p>
        <p className="text-center  bg-rightRegister sm:block hidden  h-[20px] text-sm w-[53px] text-black/60">or</p>
        <div className="absolute border-b top-3 -z-10  border-black/50 w-full h-[1px] " />
      </div>
      {/* Sosial Media Login Section */}
      <div className="sosial__media__container">
        <Button type="button" icon={<img src={google} alt="Sign in with Google" width={30} height={30} />} className="sosial__media__container__button" />
        <Button type="button" icon={<img src={facebook} alt="Sign in with Google" width={30} height={30} />} className="sosial__media__container__button" />
        <Button type="button" icon={<img src={apple} alt="Sign in with Google" width={30} height={30} />} className="sosial__media__container__button" />
      </div>

      {/* if dont have an account Go to signup to create an acccount */}
      <div className="flex w-full justify-center items-center gap-1">
        <p className="text-sm text-black/60">Don't have an account?</p>
        <Button text={"Sign Up"} type="button" className="text-sm sm:hidden block text-black font-semibold" onClick={handleToogleSignup} />
        <Button text={"Create Account"} type="button" className="text-sm sm:block hidden text-black font-semibold" onClick={handleToogleSignup} />
      </div>
    </form>
  );
};

export default SignIn;
