import { CiDark } from "react-icons/ci";
import { IoSunny } from "react-icons/io5";
import { useGlobalStore } from "../../context/useGlobalStore";

const ToogleDarkTheme = () => {
  const { setDark, dark } = useGlobalStore();

  // Toggle between dark and light themes
  const toogleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className="rounded-full relative w-[60px] h-[15px] bg-foobar dark:bg-white mx-auto mb-1">
      <button
        type="button"
        onClick={toogleTheme}
        className={`w-[36px] h-[36px] rounded-full absolute -bottom-2.5 ${dark ? "-right-1" : "-left-1"} bg-white dark:shadow-none shadow-black/30 shadow-[0px_4px_4px_0px] dark:bg-[#01092A] flex justify-center items-center`}
      >
        {dark ? <IoSunny size={20} /> : <CiDark size={20} color="black" />}
      </button>
    </div>
  );
};

export default ToogleDarkTheme;
