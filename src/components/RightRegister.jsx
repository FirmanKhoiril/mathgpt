import { useGlobalStore } from "../context/useGlobalStore";
import { logo } from "../assets";
import { SignUp, SignIn } from "./";

const RightRegister = () => {
  const { isSignup } = useGlobalStore();
  return (
    <div className="register__right__section">
      <div className="w-full flex flex-col pt-6  mx-auto  justify-center items-center gap-4">
        <div className="register__logo">
          <img src={logo} alt="Logo MathGpt" width={80} height={80} />
        </div>
        <h1 className="text-[24px]">{isSignup ? "Join us Today!" : "Hello ! Welcome Back"}</h1>
      </div>
      <div className="w-full sm:max-w-[90%] lg:max-w-[70%] mx-auto pb-14">{isSignup ? <SignUp /> : <SignIn />}</div>
    </div>
  );
};

export default RightRegister;
