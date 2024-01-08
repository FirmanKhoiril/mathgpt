import { ToogleCustomization, Button, EmailAddName, Input, SendingProblems, ButtonEmailPreview, ImagePreview, EmailChooseContact, Customization } from "../";
import { AI } from "../../assets";

const Email = () => {
  return (
    <section className="w-full min-h-screen pt-4 pb-6">
      <div className="sm:flex hidden flex-row px-10 gap-4">
        {/* Left Side */}
        <div className="w-full h-full">
          <div className="w-full h-[182px] px-10 md:px-14 lg:px-20 pt-6  justify-around flex flex-col rounded-[5px] border border-black/50 dark:border-white/50 relative">
            <img src={AI} alt="Ai Solve" width={136} height={136} className="absolute right-4 lg:right-8 top-4" />
            <div className="grid grid-cols-2 grid-rows-2 items-center gap-6">
              <div className="flex items-center gap-3">
                <Input text={"Single User"} labelStyle={"email__label"} inputStyle={"h-5 w-5"} type={"radio"} />
              </div>

              <div className="flex items-center gap-3">
                <Input text={"Multiple User "} labelStyle={"email__label"} inputStyle={"h-5 w-5"} type={"radio"} />
              </div>
              <div className="flex items-center gap-3">
                <Input type={"checkbox"} inputStyle="accent-[#15C7B3] h-5 w-5" labelStyle={"email__label"} text={"Male"} />
              </div>
              <div className="flex items-center gap-3">
                <Input type={"checkbox"} inputStyle="accent-[#15C7B3] h-5 w-5 " labelStyle={"email__label"} text={"Female"} />
              </div>
            </div>
            <EmailAddName />
          </div>
          <div className="h-[100px] rounded-[5px] border grid mt-4 grid-cols-2 px-10 md:px-14 lg:px-20 grid-rows-2 items-center border-black/50 dark:border-white/50">
            {/* Center */}
            <div className="flex items-center gap-3">
              <Input text={"Formal"} labelStyle={"email__label"} inputStyle={"h-5 w-5"} type={"radio"} />
            </div>
            <div className="flex items-center gap-3">
              <Input text={"InFormal"} labelStyle={"email__label"} type={"radio"} />
            </div>
            <div className="flex items-center gap-3">
              <Input type={"checkbox"} inputStyle="accent-[#15C7B3] h-5 w-5 " labelStyle={"email__label"} text={"Enclosed AI Generated files"} />
            </div>
            <div className="flex items-center gap-3">
              <Input type={"checkbox"} inputStyle="accent-[#15C7B3] h-5 w-5 " labelStyle={"email__label"} text={"Enclosed Based Files"} />
            </div>
          </div>
          <div className="flex w-full gap-2 mt-4  h-full justify-between">
            <div className="flex flex-col gap-2 w-full">
            <div className="flex w-full border border-black/50 dark:border-white/50 rounded-[5px] justify-between h-full flex-col py-0.5 mr-4 sm:mr-0">
              <div className="h-[370px]">Blank Canvas for Conversation</div>
              <SendingProblems isPlaceholder="Write a Question" isMic={true} />
            </div>
            <div className="flex items-center w-full justify-between gap-2">
            <Button className={"rounded-[5px] bg-[rgba(0,_0,_0,_0.8)] w-[110px] border border-[rgb(21,_199,_179)] h-10 text-primary text-center"} text={"Remake"} />
            <ButtonEmailPreview />
          </div>
            </div>
          
            
            <div className="flex flex-col gap-2">
            <Customization />
            <Button className={"rounded-[5px] bg-primary text-center w-[110px] h-10"} text={"Generate"} />
            </div>
             
          </div>  
      
        </div>
       
        
        {/* Right Side */}
        <div className="flex max-w-[454px] flex-col gap-3">
          <ImagePreview />
          <EmailChooseContact />
        </div>
      </div>

      {/* Email Small Devices */}
      <div className="sm:hidden flex flex-col max-w-[90%] mx-auto">
        <div className="w-full flex flex-col justify-between  border border-black/50 dark:border-white/50  rounded-[5px] h-screen">
          <div className="flex flex-col border-b border-black/50 dark:border-white/50 pb-4">
            <div className="relative w-full h-[78px] flex sm:hidden items-center border-b border-black/50 dark:border-white/50 px-2 justify-between">
              <ToogleCustomization />
              <Button text={"Preview"} className={"w-[135px] text-[14px] flex-row-reverse sm:w-[189px] flex sm:justify-center justify-around items-center h-[40px]  rounded-[5px] border sm:text-[20px] border-[#15C7B3] text-primary"} />
            </div>
            <div className="grid grid-cols-3 grid-row-3 gap-4 py-2 px-4">
              <div className="flex items-center gap-3">
                <Input text={"Single User"} labelStyle={"email__label"} inputStyle={"h-5 w-5"} type={"radio"} />
              </div>

              <div className="flex items-center gap-3">
                <Input text={"Multiple User "} labelStyle={"email__label"} inputStyle={"h-5 w-5"} type={"radio"} />
              </div>
              <div className="flex items-center gap-3">
                <Input text={"Formal"} labelStyle={"email__label"} inputStyle={"h-5 w-5"} type={"radio"} />
              </div>
              <div className="flex items-center gap-3">
                <Input type={"checkbox"} inputStyle="accent-[#15C7B3] h-5 w-5" labelStyle={"email__label"} text={"Male"} />
              </div>
              <div className="flex items-center gap-3">
                <Input type={"checkbox"} inputStyle="accent-[#15C7B3] h-5 w-5 " labelStyle={"email__label"} text={"Female"} />
              </div>
              <div className="flex items-center gap-3">
                <Input text={"InFormal"} labelStyle={"email__label"} inputStyle={"h-5 w-5"} type={"radio"} />
              </div>
            </div>
            <EmailAddName />
            <div className="flex justify-around items-center gap-1">
              <div className="flex items-center gap-3">
                <Input type={"checkbox"} inputStyle="accent-[#15C7B3] h-5 w-5 " labelStyle={"email__label"} text={"Enclosed AI Generated files"} />
              </div>
              <div className="flex items-center gap-3">
                <Input type={"checkbox"} inputStyle="accent-[#15C7B3] h-5 w-5 " labelStyle={"email__label"} text={"Enclosed Based Files"} />
              </div>
            </div>
          </div>
          <SendingProblems />
        </div>
        <div className="flex justify-between items-center pt-2 gap-2">
          <div className="flex items-center gap-2">
            <Button className={"rounded-[5px] bg-[rgba(0,_0,_0,_0.8)] w-[110px] border border-[rgb(21,_199,_179)] h-10 text-primary text-center"} text={"Remake"} />
            <ButtonEmailPreview />
          </div>
          <Button className={"rounded-[5px] bg-primary text-center w-[110px] h-10"} text={"Generate"} />
        </div>
      </div>
    </section>
  );
};

export default Email;
