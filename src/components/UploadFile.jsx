import { uploadFile } from "../assets";

const UploadFile = () => {
  return (
    <div className="upload__file">
      <img src={uploadFile} width={30} height={30} alt="Upload File Icon" />
      <p className="w-[95px]">
        Upload <br /> File
      </p>
    </div>
  );
};

export default UploadFile;
