import { IoIosCamera } from "react-icons/io";

const MakePhoto = () => {
  // Upload Photo / Photo Components
  return (
    <div className="btn__make__photo">
      <IoIosCamera size={30} />
      <p className="w-[95px">
        Make a <br /> Photo
      </p>
    </div>
  );
};

export default MakePhoto;
