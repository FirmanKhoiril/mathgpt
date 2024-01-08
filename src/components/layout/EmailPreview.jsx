import { EmailChooseContact, ImagePreview } from "../";

const EmailPreview = () => {
  return (
    <div className="email__preview__container">
      <ImagePreview />
      <EmailChooseContact />
    </div>
  );
};

export default EmailPreview;
