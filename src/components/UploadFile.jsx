import { useState } from "react";
import { uploadFile } from "../assets";
import { FiUpload } from "react-icons/fi";

const UploadFile = () => {
  const [isHovered, setIsHovered] = useState(false) 


    // Function to handle image change when uploading
    const handleImageChange = (e) => {
      const file = e.target.files?.[0]
      const reader = new FileReader()
  
      // Update the image URL when the file is read
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result)
        }
      }
  
      // Read the file as a data URL
      if (file) {
        reader.readAsDataURL(file)
      }
    }

   return (
    <div className="upload__file relative"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <img src={uploadFile} width={30} height={30} alt="Upload File Icon" />
      <p className="w-[95px]">
        Upload <br /> File
      </p>
      {isHovered &&  <div className='absolute inset-0 flex items-center w-[140px] justify-center bg-primary/60 opacity-40 cursor-pointer h-auto'>
          {/* Upload label and input */}
          <label
            htmlFor='file-upload'
            className='flex items-center flex-col justify-center text-white'
          >
            <img src={uploadFile} width={30} height={30} alt="Upload File Icon" />
      <p className="w-[95px]">
        Upload <br /> File
      </p>
            <input
              type='file'
              id='file-upload'
              accept='image/*'
              onChange={handleImageChange}
              className='hidden'
            />
          </label>
        </div>}
    </div>
  );
};

export default UploadFile;
