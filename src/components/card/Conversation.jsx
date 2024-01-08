import { IoCopyOutline } from "react-icons/io5";
import { Button } from "../";
import { MdShare, MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineBookmark } from "react-icons/hi2";
import { thumbsDown, thumbsUp } from "../../assets";

const Conversation = ({ role, answer }) => {
  return (
    <div className={`${role === "Gpt" ? "card__gpt" : "card__user"} items-center    flex`}>
      {/* If role gpt show this component beyond */}
      {role === "Gpt" ? (
        <div className="py-2 px-2 w-full text-[#222]">
          <div className="flex flex-row justify-between items-center gap-4">
            <div className="p-1.5 bg-foobar rounded-full">
              <IoCopyOutline color="white" size={18} />
            </div>
            <p className="font-semibold text-[18px]">Answer:</p>
            <div className="border border-black/50 flex items-center justify-between px-2 rounded-full text-white h-[35px] w-[140px]">
              <Button type={"button"} className={"border-r border-black/50 pr-3"} icon={<img alt="Like" src={thumbsUp} width={25} height={25} />} />
              <Button type={"button"} className={"border-r border-black/50 pr-3"} icon={<img alt="Like" src={thumbsDown} width={25} height={25} />} />
              <Button type={"button"} className={" pr-2"} icon={<HiOutlineBookmark size={20} />} />
            </div>
          </div>
          <div className="px-4 py-3 sm:py-2 md:text-base text-sm">
            <p>
              {answer}
              <span className="sm:inline hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque enim voluptas id illo, esse temporibus reiciendis consequuntur cupiditate cum nemo nobis laudantium sed omnis animi?</span>
            </p>
          </div>
          <div className="w-full justify-end flex">
            <div className="border border-black/50 flex items-end rounded-full text-white h-[35px] w-[90px]">
              <Button type={"button"} className={"border-r border-black/50 h-[35px] pl-2 pr-3"} icon={<MdShare size={20} />} />
              <Button type={"button"} className={" h-[35px] pl-3 pr-2"} icon={<MdOutlineMailOutline size={20} />} />
            </div>
          </div>
        </div>
      ) : (
        // if role User show this components
        <p className="text-[1&px]">{answer}</p>
      )}
    </div>
  );
};

export default Conversation;
