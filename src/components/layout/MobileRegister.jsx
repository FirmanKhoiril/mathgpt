import { SignIn, SignUp } from "../";
import { useGlobalStore } from "../../context/useGlobalStore";

const MobileRegister = () => {
  const { isSignup } = useGlobalStore();

  return (
    <div className="register__mobile z-20">
      <h1 className="text-center text-[32px] font-semibold">{isSignup ? "Get Started" : "Welcome Back"}</h1>
      <div className="w-full">{isSignup ? <SignUp /> : <SignIn />}</div>
    </div>
  );
};

export default MobileRegister;
