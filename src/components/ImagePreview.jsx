import { pdfTwo } from "../assets";

const ImagePreview = () => {
  return (
    <div className="max-w-[454px]">
      <img src={pdfTwo} alt="Pdf Microsoft" className="border border-black/50 dark:border-white/50 rounded-t-[5px]" width={454} height={508} />
      <div className="max-w-[454px] h-[59px] flex border border-black/50 dark:border-white/50 rounded-b-[5px] items-center justify-center ">
        <p className="font-semibold text-[20px]">Document01.pdf</p>
      </div>
    </div>
  );
};

export default ImagePreview;
