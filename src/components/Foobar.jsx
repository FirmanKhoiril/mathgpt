import { Link, useLocation } from "react-router-dom";
import { home, homeActive, ticketActive, chatActive, historyActive, Ticket, Chat, history } from "../assets";
import { useGlobalStore } from "../context/useGlobalStore";
import Button from "./button/Button";
import { FaUser } from "react-icons/fa6";

const Foobar = () => {
  const location = useLocation();
  const { setSendMail, setPreviewEmail, setPreviewImage } = useGlobalStore();

  const nonActiveState = () => {
    setSendMail(false);
    setPreviewEmail(false);
    setPreviewImage(false);
  };

  return (
    <nav className="foobar__section">
      <Link to={"/"}>
        <Button
          text={"Home"}
          icon={<img width={36} height={36} alt="Home Page" src={location.pathname === "/" ? homeActive : home} />}
          onClick={nonActiveState}
          type="button"
          className={`foobar__link ${location.pathname === "/" ? "text-[#15C7B3]" : ""}`}
        />
      </Link>
      <Link to={"/history"}>
        <Button
          text={"History"}
          onClick={nonActiveState}
          type="button"
          icon={<img width={36} height={36} alt="History Page" src={location.pathname === "/history" ? historyActive : history} />}
          className={`foobar__link ${location.pathname === "/history" ? "text-[#15C7B3]" : ""}`}
        />
      </Link>
      <Link to={"/plans"}>
        <Button
          text={"Plans"}
          onClick={nonActiveState}
          type="button"
          icon={<img width={36} height={36} alt="Plans Page" src={location.pathname === "/plans" ? ticketActive : Ticket} />}
          className={`foobar__link ${location.pathname === "/plans" ? "text-[#15C7B3]" : ""}`}
        />
      </Link>
      <Link to={"/profile"}>
        <Button
          text={"Profile"}
          onClick={nonActiveState}
          type="button"
          icon={<FaUser size={30} color={location.pathname === "/profile" ? "#15C7B3" : "white"} />}
          className={`foobar__link ${location.pathname === "/profile" ? "text-[#15C7B3]" : ""}`}
        />
      </Link>
    </nav>
  );
};

export default Foobar;
