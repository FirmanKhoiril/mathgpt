import { history } from "../assets";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useGlobalStore } from "../context/useGlobalStore";
import { Button, CHistory } from "./";
import { useSelectedAi } from "../hooks/useSelectedAi";

const SideHistory = () => {
  const navigate = useNavigate();
  // Hooks for managing global and selected AI state url
  const { setSelectedAi } = useSelectedAi();
  const { showSideHistory, setShowSideHistory, sendMail, setSendMail } = useGlobalStore();
  // Toggle the display of the side history panel
  const handleToogleHistory = () => {
    setShowSideHistory(!showSideHistory);
  };

  const handleGoBackHistory = () => {
    if (sendMail) {
      // Reset sendMail state and selected AI state when sending mail
      setSendMail(false);
      setSelectedAi((prev) => {
        prev.set("selected", "ai-solve");
        return prev;
      });
    } else {
      // Navigate back if not in mail sending mode
      navigate(-1);
    }
  };

  return (
    <aside className="side__history__container">
      {/* Back Button */}
      <Button icon={<RiArrowGoBackLine size={35} color="white" />} onClick={handleGoBackHistory} className="side__history__goback" />
      {/* Side History Panel */}
      <div className={`${showSideHistory ? "absolute w-[391px] z-20 top-[114px] items-end" : "w-[85px] static   items-center"} hidden sm:flex flex-col gap-3 pt-4 rounded-r-[20px] px-2 h-[688px] bg-[#052F46]`}>
        {/* Toggle History Button */}
        <Button icon={<img src={history} width={40} height={40} alt="Clock History" />} className={"w-[40px] h-[40px]"} type="button" onClick={handleToogleHistory} />
        {/* Render History Entries if the side history panel is visible */}
        {showSideHistory && (
          <>
            <CHistory />
            <CHistory />
            <CHistory />
            <CHistory />
            <CHistory />
            <CHistory />
            <CHistory />
            <CHistory />
          </>
        )}
      </div>
    </aside>
  );
};

export default SideHistory;
