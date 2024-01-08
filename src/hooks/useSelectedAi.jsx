import { useSearchParams } from "react-router-dom";

export const useSelectedAi = () => {
  // Move the hook inside the functional component
  const Component = () => {
    const [selectedAi, setSelectedAi] = useSearchParams({
      selected: "",
    });

    return { selectedAi, setSelectedAi };
  };

  // Render the component to invoke the hook
  const { selectedAi, setSelectedAi } = Component();

  return { selectedAi, setSelectedAi };
};
