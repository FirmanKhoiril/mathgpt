import { Communication, history } from "../../assets";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../";

const CHistory = () => {
  return (
    <div className="card__history">
      <Button type="button" className="w-[20px] h-[20px]" icon={<img src={history} alt="History" width={20} height={20} />} />
      <p className="text-sm text-white">History 01 - 05.06.2023</p>

      <div className="flex gap-2">
        <Button type="button" icon={<IoShareSocialSharp size={20} color="white" />} />
        <Button type="button" icon={<img src={Communication} alt="Chat Message" height={20} width={20} />} />
        <Button type="button" icon={<MdOutlineMailOutline size={20} color="white" />} />
        <Button type="button" icon={<FaRegTrashAlt size={18} color="white" />} />
      </div>
    </div>
  );
};

export default CHistory;
