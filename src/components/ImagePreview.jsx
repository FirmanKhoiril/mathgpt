import { Viewer, Worker } from "@react-pdf-viewer/core";
import { pdfTwo } from "../assets";
import { useGlobalStore } from "../context/useGlobalStore";
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ImagePreview = () => {
  const {pdfFile, pdfName} = useGlobalStore()

  const toolbarPluginInstance = toolbarPlugin();
const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;


const transform  = (slot) => ({
    ...slot,
    // These slots will be empty
    Download: () => <></>,
    DownloadMenuItem: () => <></>,
    Open: () => <></>,
    OpenmENUItem: () => <></>,
    EnterFullScreen: () => <></>,
    EnterFullScreenMenuItem: () => <></>,
    SwitchTheme: () => <></>,
    SwitchThemeMenuItem: () => <></>,
});

  return (
    <div className="max-w-[454px]">
         {pdfFile ? (
  <div className="viewer">
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
    <div className="sticky top-0 bg-gray-200 w-full z-10 ">
      <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
    </div>
        <Viewer  plugins={[toolbarPluginInstance]} fileUrl={pdfFile} />
    </Worker>
  </div>
    ) :       <img src={pdfTwo} alt="Pdf Microsoft" className="border border-black/50 dark:border-white/50 rounded-t-[5px]" width={454} height={508} />
  }
      <div className="max-w-[454px] h-[59px] flex border border-black/50 dark:border-white/50 rounded-b-[5px] items-center justify-center ">
        <p className="font-semibold text-[20px]">{pdfName ? pdfName : "Document01.pdf"}</p>
      </div>
    </div>
  );
};

export default ImagePreview;
