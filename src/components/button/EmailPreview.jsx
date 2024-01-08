import { SendEmail } from "../../assets";
import { useGlobalStore } from "../../context/useGlobalStore";
import Button from "./Button";

const EmailPreview = () => {
  const { setPreviewEmail, previewEmail, setSendMail } = useGlobalStore();

  // Toggle the email preview and reset the sendMail state
  const showPreviewEmail = () => {
    setPreviewEmail(!previewEmail);
    setSendMail(false);
  };

  return (
    <Button
      onClick={showPreviewEmail}
      icon={<img src={SendEmail} width={30} height={30} alt="Send Email Next" />}
      className={"rounded-[5px] flex-row-reverse bg-primary flex items-center gap-2 w-[110px] h-10 justify-center"}
      text={"Send"}
    />
  );
};

export default EmailPreview;
