import { AiSolve, Email, EmailPreview, Home, Preview } from "../components";
import { useGlobalStore } from "../context/useGlobalStore";

const Homepage = () => {
  const { previewImage, sendMail, previewEmail } = useGlobalStore();

  // Extract the value associated with the "selected" key from the URL query parameters
  const urlSearchParams = new URLSearchParams(window.location.search);
  const selectedValue = urlSearchParams.get("selected");

  // Use a switch statement to determine which component to render based on the current state
  switch (true) {
    case selectedValue === "ai-solve" || selectedValue === "ai-explainer" || selectedValue === "ai-writer":
      return <AiSolve />;

    case previewImage:
      return (
        <div className="w-full">
          <div className="hidden sm:flex">
            <AiSolve />
          </div>
          <Preview />
        </div>
      );

    // If sendMail is truthy, render the Email component
    case sendMail:
      return <Email />;
    case previewEmail:
      return (
        <div className="w-full">
          <EmailPreview />
          <div className="hidden sm:flex">
            <Email />
          </div>
        </div>
      );
    // If none of the above conditions are met, render the Home component by default
    default:
      return <Home />;
  }
};

export default Homepage;
