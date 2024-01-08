import { useState } from "react";
import { CPlans } from "../components";
import { DataPlans } from "../constants/DummyData";

const Plans = () => {
  const [selectPlans, setSelectPlans] = useState(0);
  // state to handle Selected Plans in Mobile Devies

  return (
    <section className="w-full min-h-screen flex flex-col pb-8 sm:pt-4 gap-2">
      <div className="w-[354px] sm:w-auto mx-auto pb-8">
        <h1 className="font-semibold text-[32px] text-center">Want to change Subscription</h1>
        <p className="text-[#979797] sm:block hidden">On this section you can upgrade or downgrade your subscription.</p>
      </div>
      {/* Card Plans Large Devices */}
      <div className=" hidden sm:flex items-center justify-center">
        {DataPlans.map((item) => (
          <CPlans key={item.id} {...item} />
        ))}
      </div>

      {/* Card Plans Small Devices */}
      <div className="sm:hidden flex flex-col gap-4">
        {DataPlans.slice(selectPlans, selectPlans + 1).map((item) => (
          <CPlans {...item} key={item.id} />
        ))}

        <div className="w-full flex mx-auto pt-4 justify-center gap-4 items-center">
          {DataPlans.map((item, idx) => (
            <button type="button" key={item.id} onClick={() => setSelectPlans(idx)} className={`w-[61px] ${selectPlans === idx ? "bg-green" : "bg-foobar dark:bg-white"} rounded-full h-[6px]`}></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
