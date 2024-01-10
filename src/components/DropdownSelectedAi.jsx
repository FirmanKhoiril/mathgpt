import React from "react";
import { useSelectedAi } from "../hooks/useSelectedAi";

const DropdownSelectedAi = () => {
  const {setSelectedAi, selectedAi} = useSelectedAi()
  const selectedAiSolve = selectedAi.get("selected");

  const aiSelectedOptions = [
    {
      value: 'ai-solve',
      name: 'Ai Solver'
    },
    {
      value: 'ai-explainer',
      name: 'Ai Explainerr'
    },
    {
      value: 'ai-writer',
      name: 'Ai Writerr'
    },
  ]

  return (
    <select onChange={(e) => {
      setSelectedAi((prev) => {
        prev.set("selected", e.currentTarget.value )
        return prev
      })
    }} className="dropdown__selected__ai__container">
      {aiSelectedOptions.map((item) => (
        <option value={item.value}>{selectedAiSolve === item.value ? item.name : item.name}</option>
      ))}
    </select>
  );
};

export default DropdownSelectedAi;
