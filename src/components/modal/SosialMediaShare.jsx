import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
  } from "react-share";  
import { IoClose,IoCheckmarkDone } from "react-icons/io5";
import { useGlobalStore } from "../../context/useGlobalStore";
import { FaCopy } from "react-icons/fa";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
import {tiktok} from '../../assets'
import { FaInstagram } from "react-icons/fa";

  const SosialMediaShare = () => {
    const {setIsShowShareSosialMedia,selectedAiValue} = useGlobalStore()
    const [loadingCopyClipboard, setLoadingCopyClipboard] = useState(false)
    const shareUrl = `https://mathgpt-preview.vercel.app/${selectedAiValue}`;
    const title = "MathGPT";
    return (
      <>
      <div className="fixed z-40 h-screen w-full bg-black/80" />
      <div className='fixed z-50 shadow-[4px_8px_4px_8px] shadow-black/10 flex gap-3 flex-col mx-auto top-1/4 inset-0 rounded-lg p-3 sm:p-4 max-w-[350px] sm:max-w-[450px] w-full h-[300px] bg-white'>
      <div className="w-full flex justify-between">
      <h1 className="font-semibold text-lg">Sosial Media Sharing</h1>
      <button type="button"  className="p-2 bg-black/10 hover:bg-black/20 rounded-full" onClick={() => setIsShowShareSosialMedia(false)}>
        <IoClose size={20} color="gray" />
      </button>
      </div>
      <p className="pt-2 text-sm px-3">Share this link via</p>
       <div className="flex w-full items-center pb-2 flex-wrap gap-2 justify-center">
        <a href="https://www.instagram.com" target="_blank" rel={"noreferrer"} className="p-[7px] bg-pink-500 rounded-full">
          <FaInstagram size={20} color="white" />
        </a>
          <FacebookShareButton
            windowWidth={760}
            windowHeight={760}
            url={shareUrl}
          >
            <FacebookIcon size={35} round />
          </FacebookShareButton>
          <a href="https://www.tiktok.com" target="_blank" rel={"noreferrer"}>
            <img src={tiktok} className="rounded-full" width={33} height={33} alt="Tiktok Share" />
          </a>
          <TwitterShareButton
            url={shareUrl}
            windowWidth={760}
            windowHeight={760}
            title={title}
          >
            <XIcon size={35} round />
          </TwitterShareButton>
          <TelegramShareButton
            url={shareUrl}
            title={title}
          >
            <TelegramIcon size={35} round />
          </TelegramShareButton>
          <WhatsappShareButton
            url={shareUrl}
            windowWidth={760}
            windowHeight={760}
            title={title}
            separator=":: "
          >
            <WhatsappIcon size={35} round />
          </WhatsappShareButton>
          <LinkedinShareButton
            windowWidth={760}
            windowHeight={760}
            url={shareUrl}
          >
            <LinkedinIcon size={35} round />
          </LinkedinShareButton>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            windowWidth={760}
            windowHeight={760}
            body="body"
          >
            <EmailIcon size={35} round />
          </EmailShareButton>
          {/* <RedditShareButton
            url={shareUrl}
            subject={title}
            windowWidth={760}
            windowHeight={760}
            body="body"
          >
            <RedditIcon size={35} round />
          </RedditShareButton> */}
       </div>
        <p className="text-sm px-3">Or copy link</p>
        <div className="border-black/30 rounded-lg relative py-3 border w-full ">
        <p className="flex items-center gap-0.5">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-gray-500 ml-2"
            >
              <path
                d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"
              ></path>
              <path
                d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"
              ></path>
            </svg>
            <span className="text-[12px] sm:text-[14px] pr-7 sm:pr-0">
             {shareUrl}
            </span>
        </p>
        <CopyToClipboard text={shareUrl} onCopy={() => setLoadingCopyClipboard(true)}>
            <button className="bg-primary/80 hover:bg-primary  p-1.5 absolute right-2 top-2 rounded-lg">
                {loadingCopyClipboard ? <IoCheckmarkDone size={17} color="white" />: <FaCopy size={17} color="white" />}
            </button>
        </CopyToClipboard>
        </div>
      </div>
      </>
    )
  }
  
  export default SosialMediaShare