import { Viewer, Worker } from "@react-pdf-viewer/core";
import { pdfTwo } from "../assets";
import { useGlobalStore } from "../context/useGlobalStore";
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

// Import styles for react-pdf-viewer by default
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ImagePreview = () => {
  const {pdfFile, pdfName, imageOriginalFile, urlImage} = useGlobalStore()

  const toolbarPluginInstance = toolbarPlugin();
const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

// custom tollbar
const transform  = (slot) => ({
    ...slot,
    // These slots will be empty
    Download: () => <></>,
    DownloadMenuItem: () => <></>,
    Open: () => <></>,
    OpenMenuItem: () => <></>,
    EnterFullScreen: () => <></>,
    EnterFullScreenMenuItem: () => <></>,
    SwitchTheme: () => <></>,
    SwitchThemeMenuItem: () => <></>,
});

const fileName = pdfName ? `${pdfName.length >= 34 ? pdfName.slice(0, 35) + "... .pdf" : pdfName}` : imageOriginalFile ? `${imageOriginalFile.length >= 34 ? imageOriginalFile.slice(0, 35) + "..." : imageOriginalFile}` :  "Document01.pdf"
  return (
    <div className="max-w-[454px] w-full">
         {pdfFile ? (
  <div className="viewer">
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
    <div className="sticky top-0 bg-gray-200 w-full z-10 ">
      <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
    </div>
        <Viewer  plugins={[toolbarPluginInstance]} fileUrl={pdfFile} />
    </Worker>
  </div>
    ) :  urlImage ?  <img src={urlImage} alt={imageOriginalFile} className="border max-w-[454px] border-black/50 dark:border-white/50 rounded-t-[5px]" width={454} height={508} /> :   <img src={pdfTwo} alt="Pdf Microsoft" className="border border-black/50 dark:border-white/50 rounded-t-[5px]" width={454} height={508}/>   
  }
      <div className="max-w-[454px] h-[59px] flex w-full border border-black/50 truncate dark:border-white/50 rounded-b-[5px] items-center justify-center ">
        <p className="font-semibold text-base sm:text-[18px]">{fileName}</p>
      </div>
    </div>
  );
};

export default ImagePreview;
