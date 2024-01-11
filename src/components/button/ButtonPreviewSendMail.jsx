import { Button } from "../";
import { uploadFile, pdfTwo } from "../../assets";
import { MdOutlineMailOutline, MdShare } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { useGlobalStore } from "../../context/useGlobalStore";
import { useSelectedAi } from "../../hooks/useSelectedAi";

const ButtonPreviewSendMail = () => {
  const { setSendMail, setPreviewImage, setIsShowShareSosialMedia } = useGlobalStore();
  const { setSelectedAi } = useSelectedAi();

  const handleNextSendEmail = () => {
    setSendMail(true);
    // setSendMail to true for showing Home Email Section
    setSelectedAi((prev) => {
      prev.set("selected", "");
      return prev;
    });
    setPreviewImage(false);
  };

  // For showing sosial media share
  const handleShowSosialMediaShare = () => setIsShowShareSosialMedia((isShowShareSosialMedia) => !isShowShareSosialMedia)

  return (
    <div className="preview__send__email__container">
      <div className="flex items-center gap-2">
        <Button
          type={"button"}
          text={"Download"}
          className={"flex font-[500] lg:text-base text-sm items-center border rounded-full px-3 sm:px-1.5 lg:px-3 py-1 gap-2"}
          icon={<img src={uploadFile} alt="Download File" width={24} height={24} />}
        />
        {/* <Button
          type={"button"}
          onClick={handleNextSendEmail}
          text={"Send Email"}
          className={"flex font-[500] lg:text-base text-sm items-center border rounded-full px-3 sm:px-1.5  lg:px-3 py-1 gap-2"}
          icon={<MdOutlineMailOutline size={18} />}
        /> */}
      </div>
      {/* Button Share and Save */}
      <div className="flex items-center gap-2 sm:gap-1 lg:gap-2">
        <Button type={"button"} onClick={handleShowSosialMediaShare} className={"flex  items-center border  rounded-[5px]"} icon={<MdShare size={25} />} />
        <a href={pdfTwo} download={"Example-PDF-Document"} target="_blank" rel="noreferrer">
          <Button type={"button"} className={"flex  items-center border  rounded-[5px]"} icon={<IoIosSave size={25} />} />
        </a>
      </div>
    </div>
  );
};

export default ButtonPreviewSendMail;
