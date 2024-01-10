import React, { useEffect, useState } from "react";
import { useSelectedAi } from "../hooks/useSelectedAi";
import {useLocation} from 'react-router-dom'

const DropdownSelectedAi = () => {
  const { setSelectedAi, selectedAi } = useSelectedAi();
  const [selectedAiValue, setSelectedAiValue] = useState(selectedAi.get("selected"));

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

  useEffect(() => {
    // Update the global state when the local state changes
    setSelectedAi((prev) => {
      prev.set("selected", selectedAiValue);
      return prev
    });
    
    // Save the selectedAiValue to localStorage
  }, [ selectedAi]);

  const handleSelectChange = (e) => {
    const selectedValue = e.currentTarget.value;
    setSelectedAi((prev) => {
      prev.set("selected", selectedValue);
      return prev
    });
    setSelectedAiValue(selectedValue);
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
