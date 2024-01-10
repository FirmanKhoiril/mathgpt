import { RectangleBlue, RectangleGreen } from "../../assets";
import { FaAngleRight } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";

const CPlans = ({ purchased, name, description, price, planFeatures }) => {
  return (
    <div className={`card__plans ${purchased ? "bg-advanced  h-[565px] sm:h-[650px] w-[314px] sm:w-[350px]" : "bg-basic h-[565px] w-[314px]"}`}>
      {purchased && (
        <div className="bg-blue w-[110px] flex items-center justify-center h-[27px] mx-auto rounded-b-[10px]">
          <p className="text-center text-[12px] text-white">Purchased</p>
        </div>
      )}
      <div className="text-center flex pt-1.5 flex-col">
        <h1 className={`${purchased ? "text-blue" : "text-green"} text-[24px] font-semibold`}>{name}</h1>
        <p className="text-[12px]  mx-auto w-[239px]">{description}</p>
      </div>
      <div className="w-[285px] relative pt-3 -ml-1.5 h-[50px]">
        <img src={purchased ? RectangleBlue : RectangleGreen} alt="Rectangle" />
        <h1 className={`absolute ${price === "Contact Us" ? 'left-14' : `left-20`} right-0 ${purchased ? "top-7" : "top-5"} text-[24px] font-semibold text-white`}>{price === "Contact Us" ? price : `$${price}`}</h1>
      </div>
      <div className={`flex flex-col ${price !== "Contact Us" ? "gap-2" : "gap-0.5"} ${purchased ? "pt-9" : "pt-8"} px-8`}>
        {/* Show all Plan Features */}
        {planFeatures?.map((item) => (
          <div className="flex items-center gap-2" key={`${item.desc + item.idx}`}>
            <span className="w-[20px] h-[20px]">
              <IoCheckmark size={20} color="#3DA488" />
            </span>
            <p className="text-[10px]">{item.desc}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className={` flex justify-center gap-1 items-center  rounded-full mx-auto text-sm  ${
          purchased ? "bg-blue border w-[200px] h-[40px] mt-2  sm:mt-10" : "bg-gradient-to-r from-[#3BC642] from-[34.17%] to-[#3DA488] to-[122.08%] w-[130px] mt-2.5 h-[35px]"
        }`}
      >
        <p className="text-white">{purchased ? "Cancel Subscription" : "Get Started"}</p>
        {/* Optional when is not purchased */}
        {!purchased && <FaAngleRight size={20} color="white" />}
      </button>
    </div>
  );
};

export default CPlans;
