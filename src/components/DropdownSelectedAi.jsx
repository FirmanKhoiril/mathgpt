import {useNavigate} from 'react-router-dom'
import { useGlobalStore } from "../context/useGlobalStore";

const DropdownSelectedAi = () => {
  const navigate = useNavigate()
  const {selectedAiValue} = useGlobalStore()


  const aiSelectedOptions = [
    {
      value: 'ai-solve',
      name: 'Ai Solver'
    },
    {
      value: 'ai-explainer',
      name: 'Ai Explainer'
    },
    {
      value: 'ai-writer',
      name: 'Ai Writer'
    },
  ];


  const handleSelectChange = (e) => {
    const selectedValue = e.currentTarget.value;
    navigate(`/${selectedValue}`)
  };

  return (
    <select
      onChange={handleSelectChange}
      value={selectedAiValue}
      className="dropdown__selected__ai__container"
    >
      {aiSelectedOptions.map((item) => (
        <option key={item.value} value={item.value}>
          {selectedAiValue === item.value ? item.name : item.name}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelectedAi;
