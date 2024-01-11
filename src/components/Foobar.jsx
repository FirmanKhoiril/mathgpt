import { Link, useLocation } from "react-router-dom";
import { home, homeActive, ticketActive, chatActive, historyActive, Ticket, Chat, history } from "../assets";
import { useGlobalStore } from "../context/useGlobalStore";
import Button from "./button/Button";
import { PiUserCircleLight } from "react-icons/pi";
const Foobar = () => {
  const {pathname} = useLocation();
  const { setSendMail, dark, setPreviewEmail, selectedAiValue, setPreviewImage } = useGlobalStore();

  const nonActiveState = () => {
    setSendMail(false);
    setPreviewEmail(false);
    setPreviewImage(false);
  };

  return (
    <nav className="foobar__section">
      <Link to={selectedAiValue !== "" ? `/${selectedAiValue}` : "/ai-solve"}>
        <Button
          text={"App"}
          icon={<img width={36} height={36} alt="Home Page" src={pathname === "/ai-solve" || pathname === "/ai-explainer" || pathname === "/ai-writer" ? homeActive : home} />}
          onClick={nonActiveState}
          type="button"
          className={`foobar__link ${pathname === "/ai-solve" || pathname === "/ai-explainer" || pathname === "/ai-writer" ? "text-[#15C7B3]" : ""}`}
        />
      </Link>
      <Link to={"/history"}>
        <Button
          text={"History"}
          onClick={nonActiveState}
          type="button"
          icon={<img width={36} height={36} alt="History Page" src={pathname === "/history" ? historyActive : history} />}
          className={`foobar__link ${pathname === "/history" ? "text-[#15C7B3]" : ""}`}
        />
      </Link>
      <Link to={"/plans"}>
        <Button
          text={"Plans"}
          onClick={nonActiveState}
          type="button"
          icon={<img width={36} height={36} alt="Plans Page" src={pathname === "/plans" ? ticketActive : Ticket} />}
          className={`foobar__link ${pathname === "/plans" ? "text-[#15C7B3]" : ""}`}
        />
      </Link>
      <Link to={"/profile"}>
        <Button
          text={"Profile"}
          onClick={nonActiveState}
          type="button"
          icon={<PiUserCircleLight size={30} color={pathname === "/profile" ? "#15C7B3" : dark ? "white" : "black"} />}
          className={`foobar__link ${pathname === "/profile" ? "text-[#15C7B3]" : ""}`}
        />
      </Link>
    </nav>
  );
};

export default Foobar;
