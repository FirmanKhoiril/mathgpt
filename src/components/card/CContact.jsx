import { useSelectedContact } from "../../hooks/useSelectedContact";

const CContact = ({ isNew, name, imageUser, id, description, date, reason }) => {
  const { setSelectedContact, selectedContact } = useSelectedContact();

  const handleSelectedContact = () => {
    setSelectedContact((prev) => {
      prev.set("id", id);
      return prev;
    });
  };

  // Get the selected contact ID url
  const selectedContactId = selectedContact.get("id");

  // Check if the contact is selected
  const isSelected = selectedContactId === `${id}`;

  return (
    <button type="button" onClick={handleSelectedContact} className={`card__contact ${isSelected ? "bg-[rgba(217,_217,_217,_0.30)]" : "bg-transparent"}`}>
      {/* Contact Image */}
      <div className="min-w-[40px] min-h-[40px]">
        <img src={imageUser} alt={name} width={30} className="object-contain" height={30} />
      </div>
      {/* Contact Information */}
      <div className="flex text-black/60 text-[10px] dark:text-gray flex-col gap-0.5 items-start max-w-full truncate">
        <h1 className="text-[12px]">{name}</h1>
        <h2>{reason}</h2>
        <p>{description.slice(0, 40)}</p>
      </div>
      {/* Contact Date */}
      <p className="absolute top-3 right-4 text-black/60 dark:text-gray text-[12px]">{date}</p>
      {/* New Contact Indicator */}
      {isNew && <p className="absolute top-10 bg-[rgba(92,_60,_251,_0.20)] text-[#5C3CFB] right-4 text-center w-[30px] text-[12px]">New</p>}
    </button>
  );
};

export default CContact;
