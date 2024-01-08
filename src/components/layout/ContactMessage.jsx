import { pdfTwo, useuserTwo } from "../../assets";

import { RiArrowGoForwardFill, RiArrowGoBackLine } from "react-icons/ri";
import Button from "../button/Button";

const ContactMessage = () => {
  return (
    <div className="contact__message__container">
      {/* Profile and Timeline */}
      <div className="flex w-full pt-6 justify-between">
        <div className="flex items-center gap-5">
          <div className="w-[30px] h-[30px]">
            <img src={useuserTwo} alt="Ronald Richards" width={30} height={30} />
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="text-[12px]">
              Ronald Richards <span className="text-white text-[20px]"> . </span> <span className="text-[10px]"> ronaldrichards@gmail.com</span>
            </h1>
            <p className="text-[10px]">to dimitri Admin</p>
          </div>
        </div>
        <div className="text-[10px] hidden sm:flex items-center gap-3">
          <p>October 23, 2023</p>
          <span className="bg-white/60 h-1 w-1 rounded-full"></span>
          <p>10:00 AM</p>
        </div>
      </div>
      {/* Top Section */}

      {/* Content Message */}
      <div className=" py-4 flex flex-col gap-4">
        <h1 className="">Request Materiel Delivery</h1>
        <div>
          <p className="text-[12px]">
            Dear Dimithri Dan,
            <br />
            I hope this messsage finds you well. We are in need of the following materials for an upcoming project and would greatly appreciate your assistance with the delivery. Kindly arrange for the following items to be delivered to our
            store at your earliest convenience.
            <br />
            <br />
            1. Truck Delivery
            <br />
            <br />
            * Quantity: 1
            <br />
            * Can loading 5 Ton
            <br />
            2. Forklift
            <br />
            <br />
            * Quantity: 2
            <br />
            * If could with the driver
            <br />
            <br />
            Please ensure that the materials are securely packaged and labeled correctly. Additionally, kindly include a packing slip with details of the delivered items.
            <br />
            <br />
            Warm regards,
            <br />
            Ronald Richards
          </p>
        </div>
      </div>
      <div className="w-[119%] -mt-2 h-[1px] bg-white/50" />

      {/* Attachment File */}

      <div className="py-3 text-[12px] flex flex-wrap justify-between w-full">
        <h1>Attachment</h1>
        <div className="flex py-4 flex-row sm:flex-col w-full gap-8 sm:4">
          <div className="flex gap-2">
            <div className="w-[92px] relative  h-[80px]">
              <img src={pdfTwo} className="rounded-t-[4px] border border-black/50 dark:border-white/50" alt="Preview Pdf" width={92} height={86} />
              <div className="contact__message__attachment__image__name">
                <p>Doc1.pdf</p>
              </div>
            </div>
            <div className="w-[92px] relative  h-[80px]">
              <img src={pdfTwo} className="rounded-t-[4px] border border-black/50 dark:border-white/50" alt="Preview Pdf" width={92} height={86} />
              <div className="contact__message__attachment__image__name">
                <p>Doc2.pdf</p>
              </div>
            </div>
          </div>
          <div className="w-[119%] sm:mt-10 h-[1px] bg-white/50 sm:inline-block hidden" />
          {/* Button Reply and Forward */}
          <div className="flex items-center sm:flex-row flex-col justify-end sm:justify-start gap-4 sm:gap-2 pt-3">
            <Button type={"button"} className="rounded-[5px] border border-black/50 dark:border-white/50 text-sm flex gap-2 items-center h-[30px] w-[103px] px-2" text={"Reply"} icon={<RiArrowGoBackLine size={20} />} />
            <Button type={"button"} className="rounded-[5px] border border-black/50 dark:border-white/50 text-sm flex gap-2 items-center h-[30px] w-[103px] px-2" text={"Forward"} icon={<RiArrowGoForwardFill size={20} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
