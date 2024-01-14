import { IoIosCamera } from "react-icons/io";
import {useGlobalStore} from '../../context/useGlobalStore'

const MakePhoto = () => {
 const {pdfFile, pdfName, setPdfFile, setPdfName, setImageOriginalFile, setUrlImage} = useGlobalStore()

  // Function to handle image change when uploading

    const handleImageChange = (e) => {
      const file = e.target.files;
    
      if (file) {
        const imageUrl = URL.createObjectURL(file[0]);
    
        if (pdfFile && pdfName) {
          setPdfFile(null);
          setPdfName(null);
          setUrlImage(imageUrl);
          setImageOriginalFile(file.name);
        }
          setUrlImage(imageUrl);
          setImageOriginalFile(file.name);
      }
    };
  

  return (
      <button type="button"  className="btn__make__photo group  hover:opacity-100">
          <IoIosCamera size={30} />
          <p className="w-[95px]">
            Make a <br /> Photo
          </p>
        <div className='absolute inset-y-0 group-hover:opacity-100 flex items-center w-[136.5px] justify-center bg-primary/60 opacity-40 cursor-pointer h-auto'>
          {/* Upload label and input */}
          <label
            htmlFor='file-upload'
            className='flex items-center flex-col justify-center text-white'
          >
             <IoIosCamera size={30} />
            Make a <br /> Photo
            <input
              type='file'
              onChange={handleImageChange}
              className='hidden'
            />
          </label>
        </div>
      </button>

  );
};

export default MakePhoto;
