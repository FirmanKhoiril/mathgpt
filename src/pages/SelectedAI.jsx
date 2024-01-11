import {useParams} from 'react-router-dom'
import { useGlobalStore } from '../context/useGlobalStore';
import { AiSolve, Email, EmailPreview, Preview } from '../components';
import { useEffect } from 'react';

const SelectedAI = () => {
    const {selected} = useParams()
    const { previewImage, sendMail, previewEmail,setSelectedAiValue } = useGlobalStore();

    useEffect(() => {
        setSelectedAiValue(selected)
      return () => {
        setSelectedAiValue("")
      }
    }, [selected])
    
    // Use a switch statement to determine which component to render based on the current state
    switch (true) {  
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
      return <AiSolve />
        }
}

export default SelectedAI