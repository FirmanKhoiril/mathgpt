import { frame } from "../../assets";
import { LeftRegister, MobileRegister, RightRegister } from "../../components";

const Register = () => {
  return (
    <section className="register__container">
      {/* Blob  */}
      <div className="w-[356px] sm:hidden block h-[356px] bg-[rgba(39,_59,_74,_0.40)] absolute -top-40 -left-32 rounded-full z-10" />

      {/* SignIn/SignUp Mobile */}
      <MobileRegister />

      {/* SignIn/SignUp Large Devices */}
      <div className="absolute w-[50%] right-0 sm:block hidden bg-[#E6EAF3] z-10 h-full">
        {/* Right Image Layout */}
        <div className="lg:w-[563px] sm:w-[413px] sm:h-[353px] md:w-[483px] md:h-[433px] lg:h-[513px] absolute -top-40 -right-40 bg-[rgba(1,_9,_42,_0.50)] rounded-full" />
        <div className="lg:w-[624px] sm:w-[360px] -z-10 sm:h-[360px] md:w-[433px] md:h-[433px] lg:h-[624px] absolute -bottom-32 -right-24 bg-[rgba(1,_9,_42,_0.50)] rounded-full" />
        <div className="lg:w-[502px] sm:w-[250px] -z-10 sm:h-[250px] md:w-[323px] md:h-[323px] lg:h-[502px] absolute -bottom-14 -right-8 bg-[#E6EAF3] rounded-full" />
        <div className="absolute bottom-10 flex flex-col gap-0.5 right-14">
          <img src={frame} alt="Frame" width={100} height={16} />
          <img src={frame} alt="Frame" width={100} height={16} />
          <img src={frame} alt="Frame" width={100} height={16} />
          <img src={frame} alt="Frame" width={100} height={16} />
          <img src={frame} alt="Frame" width={100} height={16} />
          <img src={frame} alt="Frame" width={100} height={16} />
        </div>
      </div>

      <div className=" sm:max-w-[90%] lg:max-w-[1224px] w-full z-20 m-auto h-[720px] rounded-[30px] hidden sm:flex flex-row">
        <LeftRegister />
        <RightRegister />
      </div>
    </section>
  );
};

export default Register;
