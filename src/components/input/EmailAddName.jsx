import Input from "./Input";
import Button from "../button/Button";
import { FiSearch } from "react-icons/fi";

const EmailAddName = () => {
  const handleAddName = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleAddName} className="relative px-4 py-3">
      <Input required inputStyle={"input__email__add__name"} placeholder={"Add Name"} />
      <Button type={"submit"} icon={<FiSearch size={16} color="white" />} className={"absolute top-[21px] left-11"} />
    </form>
  );
};

export default EmailAddName;
