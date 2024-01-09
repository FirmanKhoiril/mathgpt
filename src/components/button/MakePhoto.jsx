import { useState } from "react";
import { IoIosCamera } from "react-icons/io";



const MakePhoto = () => {
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
    <button type="button"  onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} className="btn__make__photo">
   <IoIosCamera size={30} />
   <p className="w-[95px]">
     Make a <br /> Photo
   </p>
   {isHovered && (
        <div className='absolute inset-0 flex items-center justify-center flex-col bg-black bg-opacity-40 cursor-pointer w-[140px] h-auto'>
          {/* Upload label and input */}
          <label
            htmlFor='file-upload'
            className='flex items-center flex-col justify-center text-white'
          >
             <IoIosCamera size={30} />
            Make a <br /> Photo
            <input
              type='file'
              id='file-upload'
              accept='image/*'
              onChange={handleImageChange}
              className='hidden'
            />
          </label>
        </div>
      )}
 </button>
  );
};

export default MakePhoto;
