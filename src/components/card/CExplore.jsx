import { useSelectedAi } from "../../hooks/useSelectedAi";

const Explore = ({ name, description, image, url }) => {
  const { setSelectedAi } = useSelectedAi();

  const handleClick = () => {
    setSelectedAi((prev) => {
      prev.set("selected", url);
      return prev;
    });
  };

  return (
    <button onClick={handleClick} type="button" className="card__explore">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">{name}</h1>
        <p className="text-[12px]">{description}</p>
      </div>
      <img src={image} width={50} height={50} alt={name} />
    </button>
  );
};

export default Explore;
