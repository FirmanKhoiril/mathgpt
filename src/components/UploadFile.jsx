import { useState } from "react";
import { uploadFile } from "../assets";
import { useGlobalStore } from "../context/useGlobalStore";

const UploadFile = () => {
  const {setPdfFile,setPdfName, imageOriginalFile, setImageOriginalFile, setUrlImage, urlImage} = useGlobalStore()
  const [pdfError, setPdfError] = useState("")

  const allowedFile = ["application/pdf"]
  
  // Function to handle image change when uploading
    const handleImageChange = (e) => {
      const file = e.target.files[0]
      if(file) {
        if(file && allowedFile.includes(file.type)) {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend= (e) => {
                setPdfError("")
                setPdfFile(e.target.result)
                setPdfName(file.name)
            }
        } else if(imageOriginalFile && urlImage) {
          setImageOriginalFile(null)
          setUrlImage(null)
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
    <div className="upload__file relative group"
    >
      <img src={uploadFile} width={30} height={30} alt="Upload File Icon" />
      <p className="w-[95px] group-hover:opacity-0 opacity-100">
      {pdfError  ? <span className="text-red-500">{pdfError}</span> : <span>Upload <br /> File</span> }
      </p>
       <div className='absolute inset-0 group-hover:opacity-100 flex items-center w-[136.5px] justify-center bg-primary/60 opacity-40 cursor-pointer h-auto'>
          {/* Upload label and input */}
          <label
            htmlFor='file-upload'
            className='flex items-center flex-col justify-center text-white'
          >
            <img src={uploadFile} width={30} height={30} alt="Upload File Icon" />
      <p className="w-[95px]">
      {pdfError ? <span className="text-red-500 font-semibold">{pdfError}</span> : <span>Upload <br /> File</span> }
      </p>
            <input
              type='file'
              id='file-upload'
              onChange={handleImageChange}
              className='hidden'
            />
          </label>
        </div>
    </div>
  );
};

export default UploadFile;
