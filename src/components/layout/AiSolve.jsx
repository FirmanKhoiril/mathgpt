import { Button, Conversation, SendingProblems, ToogleCustomization, MakePhoto, UploadFile, DropdownSelectedAi, ImagePreview, ButtonPreviewSendMail, ButtonShowPreviewImage } from "../";
import { FaCamera } from "react-icons/fa";
import { AI, download, robotWithClipboard } from "../../assets";
import { conversationAi } from "../../constants/DummyData";
import { useGlobalStore } from "../../context/useGlobalStore";
import { useState } from "react";

const AiSolve = () => {
  const {setPdfFile,setPdfName, pdfName} = useGlobalStore()
  const [pdfError, setPdfError] = useState("")

  const allowedFile = ["application/pdf"]
  
  // Function to handle pdf change when uploading
    const handlePdfChange = (e) => {
      let file = e.target.files[0]
      if(file) {
        if(file && allowedFile.includes(file.type)) {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend= (e) => {
                setPdfError("")
                setPdfFile(e.target.result)
                setPdfName(file.name)
            }
        }
        setPdfError("Not a valid .pdf File")
        setPdfName(null)
        setPdfFile(null) 
      }
    }
  return (
    <div className="w-full min-h-screen px-2 sm:px-4 pt-4 flex">
      <div className="ai__solve__container">
        <img src={AI} alt="Ai Solver" width={125} height={125} className="absolute right-0 hidden md:block" />
        <div className="flex flex-col gap-2">
          <div className="ai__solve__top__section">
            <ToogleCustomization />
            <div className="sm:block hidden">
              <DropdownSelectedAi />
            </div>
            <div className="flex sm:hidden items-center gap-2 w-[45%] h-[40px] justify-evenly rounded-[5px] border border-[#15C7B3]">
              <Button type="button" icon={<FaCamera size={25} color="#15C7B3" />} />
              <div className="relative group">
               <Button type="button"  icon={<img src={download} width={30} className=" opacity-100 pt-1 group-hover:opacity-0" alt="download icon" height={30} />} />
               {/* Change Pdf or Upload Pdf */}
                <label htmlFor="file-upload" className="absolute inset-0 cursor-pointer w-[30px] flex items-center justify-center group-hover:opacity-100  h-auto opacity-0">
                  <Button type="button"  icon={<img src={download} width={30} alt="download icon" height={30} />} />
                  <input type="file" id="file-upload" className="hidden" onChange={handlePdfChange} />
               </label>
              </div>
              <ButtonShowPreviewImage />
            </div>
          </div>

          {/* All Conversation with AI */}
          <div className="w-full pt-5 sm:pt-10 max-h-[740px] h-full flex flex-col gap-5 overflow-y-auto py-1 px-1.5">
            {conversationAi.map((item) => (
              <Conversation key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Input Send  Math Problems */}
        <SendingProblems />
      </div>

      {/* Upload Image/Things */}
      <div className="hidden sm:flex px-4 gap-4  w-[35%] flex-col ">
        <div className="flex items-center max-w-[480px]  relative gap-2">
          <MakePhoto />
          <UploadFile />
          <img src={robotWithClipboard} alt="Robot with Clipboard" className="absolute xl:block hidden  right-0 top-2" width={150} height={150} />
        </div>
        {/* Pdf Image */}
        <ImagePreview />
        <ButtonPreviewSendMail />
      </div>
    </div>
  );
};

export default AiSolve;
