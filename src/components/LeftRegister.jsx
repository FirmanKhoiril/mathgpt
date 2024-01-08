import { useGlobalStore } from "../context/useGlobalStore";
import { smallEllipse, standartEllipse, hugeEllipse, threeQuartersCircle, halfCircle, tinyEllipse, frame, borderEclipse } from "../assets";

const LeftRegister = () => {
  const { isSignup } = useGlobalStore();
  return (
    <div className="w-1/2 relative z-10 overflow-hidden flex items-center justify-center h-full bg-leftRegister text-white rounded-[30px_0px_0px_30px]">
      <div className="px-2 w-[388px] font-openSans">
        <h1 className="font-bold leading-[60px] md:leading-[79.331px] sm:text-[48px] md:text-[62px] lg:text-[72px]">
          Adventure <br />
          start here
        </h1>
        <p className="text-[24px] mt-1">{isSignup ? "Create an account to join our community" : "The pen is mightier than the sword"}</p>
      </div>

      {/* All Image in Left Register */}
      <div className="">
        <div className="w-[44px] h-[130px] absolute top-6 left-[200px] rounded-b-full bg-gradient-to-t from-white/50 from-[62.53%] to-black/0" />
        <div className="w-[65px] h-[128px] absolute border-2 border-white -top-2 left-[270px] rounded-b-full " />
        <div className="w-[65px] h-[179px] absolute top-8 left-[305px] rounded-b-full bg-gradient-to-t from-white/50 from-[62.53%] to-black/0" />
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-[130px] top-[80px]" />
        <img src={tinyEllipse} alt="tiny blue eclipse" className="absolute right-[80px] top-[56px]" />
        <img src={threeQuartersCircle} width={57} height={57} alt="Three Quarters circle eclipse" className="absolute right-[117px] top-[70px]" />
      </div>
      <div className="absolute -top-[66px] left-12 bg-white rounded-full w-[125px] h-[125px]" />
      <img src={standartEllipse} alt="standart blue eclipse" width={51} height={51} className="absolute bottom-[165px] left-[70px]" />
      <div className="absolute bottom-10 flex flex-col gap-0.5 left-[70px]">
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
      </div>
      <div>
        <img src={hugeEllipse} className=" absolute -bottom-2 right-[140px]" width={104} height={104} alt="Big Blue eclipse" />
        <img src={borderEclipse} className=" absolute -bottom-2 right-[102px]" width={181} height={181} alt="Big Circle" />
        <img src={halfCircle} width={74} height={74} className="absolute right-[186px] -bottom-2" alt="half circle" />
        <img src={smallEllipse} alt="small blue eclipse" className="absolute bottom-9 right-[112px]" />
      </div>
      <div className="absolute top-20 flex flex-col gap-0.5 left-[58px]">
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
      </div>
    </div>
  );
};

export default LeftRegister;
