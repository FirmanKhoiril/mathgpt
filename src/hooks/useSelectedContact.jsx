import { useSearchParams } from "react-router-dom";

export const useSelectedContact = () => {
  // Move the hook inside the functional component
  const Component = () => {
    const [selectedContact, setSelectedContact] = useSearchParams({
      id: "",
    });

    return { selectedContact, setSelectedContact };
  };

  // Render the component to invoke the hook
  const { selectedContact, setSelectedContact } = Component();

  return { selectedContact, setSelectedContact };
};
