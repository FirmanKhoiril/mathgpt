import { useGlobalStore } from "../../context/useGlobalStore";
import { useSelectedAi } from "../../hooks/useSelectedAi";
import Button from "./Button";
import { HiOutlineEye } from "react-icons/hi2";

const ShowPreviewImage = () => {
  const { setPreviewImage } = useGlobalStore();
  // Hook for managing selected AI state in url
  const { setSelectedAi } = useSelectedAi();

  const handleShowPreviewImage = () => {
    setSelectedAi((prev) => {
      prev.set("selected", "");
      return prev;
    });
    // Set the previewImage state to true to show preview image in mobile devices
    setPreviewImage(true);
  };

  return <Button type="button" onClick={handleShowPreviewImage} icon={<HiOutlineEye size={25} color="#15C7B3" />} />;
};

export default ShowPreviewImage;
