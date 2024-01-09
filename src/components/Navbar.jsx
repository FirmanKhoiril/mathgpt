import { Link, useLocation, useNavigate } from "react-router-dom";
import { user, logo } from "../assets";
import { IoSunny, IoChevronBackOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { Button, DropdownSelectedAi } from "./";
import { useGlobalStore } from "../context/useGlobalStore";
import ToogleDarkTheme from "./button/ToogleDarkTheme";
import { useSelectedAi } from "../hooks/useSelectedAi";

const Navbar = () => {
  const { selectedAi, setSelectedAi } = useSelectedAi();
  const { dark, previewImage, setDark, previewEmail, setSendMail, sendMail, setPreviewEmail, setPreviewImage } = useGlobalStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    switch (true) {
      case previewImage:
        handlePreviewImage();
        break;
      case sendMail:
        handleSendMail();
        break;
      case previewEmail:
        handlePreviewEmail();
        break;
      case selectedAiSolve === "ai-solve":
        navigate("/");
        break;
      default:
        navigate(-1);
        break;
    }
  };

  const handlePreviewImage = () => {
    setPreviewImage(false);
    setSelectedAi((prev) => {
      prev.set("selected", "ai-solve");
      return prev;
    });
  };

  const handleSendMail = () => {
    setSendMail(false);
    setPreviewImage(true);
  };

  const handlePreviewEmail = () => {
    setPreviewEmail(false);
    setSendMail(true);
  };

  const toogleTheme = () => {
    setDark(!dark);
  };

  const selectedAiSolve = selectedAi.get("selected");

  // Determine the title for the left navigation section
  const home = pathname === "/" && "Hello, ";
  const history = pathname === "/history" ? "History" : home;
  const plans = pathname === "/plans" ? "Plans" : history;
  const leftNavTitle = pathname === "/profile" ? "Profile" : plans;

  // Reset states when Link  is clicked

  const nonActiveState = () => {
    setSendMail(false);
    setPreviewEmail(false);
    setPreviewImage(false);
  };

  return (
    <nav className="w-full overflow-x-hidden p-4 sm:pt-4">
      {/* Navbar Large Devices */}
      <div className="w-full sm:flex flex-row items-center gap-2 lg:gap-4 hidden">
        <div className="navbar__large__devices">
          {/* Link for to specific url */}
          <Link onClick={nonActiveState} to={"/"}>
            <div className="navbar__logo">
              <img src={logo} alt="Logo MathGpt" width={60} height={60} />
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link to={"/"}>
              <Button onClick={nonActiveState} text={"Home"} type="button" className={`${pathname === "/" ? "text-primary underline " : "text-black dark:text-white"} navbar__link`} />
            </Link>
            <Link to={"/plans"}>
              <Button onClick={nonActiveState} text={" My Plan"} type="button" className={`${pathname === "/plans" ? "text-primary underline " : "text-black dark:text-white"} navbar__link`} />
            </Link>

            <Link to={"/profile"} className={`navbar__profile__user`}>
              <span className="font-semibold text-[18px] lg:text-[24px] text-white">John_D</span>
              <MdArrowDropDown size={25} />
              <img src={user} width={45} height={45} alt="User Profile" />
            </Link>
          </div>
        </div>
        <Button type="button" onClick={toogleTheme} icon={dark ? <IoSunny size={30} /> : <CiDark size={30} color="black" />} className="navbar__theme__button" />
      </div>

      {/* Navbar Mobile */}
      <div className="sm:hidden w-full flex flex-col">
        {/* Dark Mode Toggle */}
        <ToogleDarkTheme />
        {/* Navigation Section */}
        <div className="flex pt-4 items-center justify-between">
          {/* Page Title Section */}
          <h1 className="text-2xl font-bold">
            {selectedAiSolve || previewImage || sendMail || previewEmail ? <Button onClick={handleGoBack} type={"button"} className={"p-2 bg-primary rounded-full"} icon={<IoChevronBackOutline size={20} />} /> : <span> {leftNavTitle}</span>}
            <span className="text-primary">{previewImage || selectedAiSolve || sendMail || previewEmail ? "" : home && "John"}</span>
          </h1>
          {/* AI Dropdown or Current Page Indicator */}
          {selectedAiSolve ? <DropdownSelectedAi /> : <h1 className="font-semibold text-[20px]">{previewImage || previewEmail ? "Preview" : sendMail && "Email"}</h1>}
          {/* User Profile Image */}
          <img src={user} alt="User Profile" width={50} height={50} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
