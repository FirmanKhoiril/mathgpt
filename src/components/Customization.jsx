import { fontFormat, fontType, formatOptions, languageList, llms, popularColors, purposeOfWriting, writingStyle } from "../constants/DummyData";
import { useGlobalStore } from "../context/useGlobalStore";

const Customization = () => {
  const { sendMail, previewEmail } = useGlobalStore();
  return (
    <div className={` ${sendMail || previewEmail ? " absolute sm:left-4 left-2 z-10 top-[68px] sm:static h-[440px]" : "absolute sm:left-4 left-2 z-10 top-[68px] h-[465px]"} customization__container`}>
      {/* if state sendMail is false (optional) render table of content input */}
      {!sendMail && (
        <div className="flex items-center  gap-4">
          <input id="tableContent" type="checkbox" className="accent-[#15C7B3] h-5 w-5 " />
          <label htmlFor="tableContent">Table of Content</label>
        </div>
      )}
      <div className="flex flex-col gap-3">
        <select className="customization__dropdown">
          <option>Select Language</option>
          {languageList.map((item) => (
             <option value={item} key={item}>{item}</option>

          ))}
        </select>
        <select className="customization__dropdown">
        <option>Writing Style</option>
          {writingStyle.map((item) => (
             <option value={item} key={item}>{item}</option>

          ))}
        </select>
        <select className="customization__dropdown">
        <option>Purpose of Writing</option>
          {purposeOfWriting.map(( item) => (
             <option value={item} key={item}>{item}</option>
          ))}
        </select>
        <select className="customization__dropdown">
        <option>Format Option</option>
          {formatOptions.map((item) => (
             <option value={item} key={item}>{item}</option>
          ))}
        </select>
        <select className="customization__dropdown">
        <option>Font Colour</option>
          {popularColors.map((item) => (
             <option value={item} key={item}>{item}</option>

          ))}
        </select>
        <div className="text-[10px] sm:text-[12px] items-center justify-between flex">
          <p>
            Number of word <br /> to be generated
          </p>
          <input pattern="[0-9]*" className="w-[76px] outline-none  px-2 border bg-foobar border-white rounded-[5px] h-[25px]" type="text" />
        </div>
        <select className="customization__dropdown">
        <option>Font Type</option>
          {fontType.map((item) => (
             <option value={item} key={item}>{item}</option>
          ))}
        </select>
        <select className="customization__dropdown">
        <option>Font Format</option>
          {fontFormat.map((item) => (
             <option value={item} key={item}>{item}</option>
          ))}
        </select>
        <select className="w-[160px] truncate sm:w-[176px] max-h-[140px] overflow-y-auto bg-foobar border border-white h-[25px] rounded-[5px] text-[12px]  flex justify-between pr-2 gap-1 sm:px-2 pl-1 items-center">
        <option>LLM</option>
          {llms.map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="flex  items-center gap-0.5 sm:gap-2 justify-between">
        <p className="text-[10px] sm:text-[11px] ">Bold key words</p>
        <div className="flex text-[12px] w-[94px] h-[25px] border border-white rounded-[5px] items-center justify-around">
          <div className="flex gap-1 items-center">
            <input type="radio" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex gap-1 items-center">
            <input type="radio" id="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
