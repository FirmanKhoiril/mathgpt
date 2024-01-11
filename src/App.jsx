import { Routes, Route, useLocation } from "react-router-dom";
import {  History, Homepage, Plans, Profile, Register,SelectedAI } from "./pages";
import { EditProfileModal, Foobar, Navbar, SideHistory, SosialMediaShare } from "./components";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { useSelectedAi } from "./hooks/useSelectedAi";
import { useGlobalStore } from "./context/useGlobalStore";

const App = () => {
  const { pathname } = useLocation();
  const { selectedAi } = useSelectedAi();
  const { sendMail, previewImage,isShowShareSosialMedia, previewEmail, dark,isEditProfile } = useGlobalStore();
  const selectedAiSolve = selectedAi.get("selected");

  return (
    <main className={`${dark ? "dark" : "light"} relative w-full font-roboto overflow-hidden h-full`}>
      {/* dark condition for themes */}
      {isEditProfile && <EditProfileModal />}
      {isShowShareSosialMedia && <SosialMediaShare />}
      <div className="main__section">
        {pathname !== "/register" ? <Navbar /> : ""}
        {/* All Routes inside this app */}
        <div className="flex flex-row gap-2 h-full pb-10 w-full">
          {/* Show SideHistory in specific Page */}
          {(pathname === "/" && selectedAiSolve !== "ai-solve" && selectedAiSolve !== "ai-explainer" && selectedAiSolve !== "ai-writer" &&  !previewEmail && !sendMail && !previewImage) || (pathname !== "/register" && <SideHistory />)}
          <Routes>
            <Route
              path="/"
              element={
                // <ProtectedRoute>
                  <Homepage />
                // </ProtectedRoute> 
              }
            />
            <Route path="/:selected" element={<SelectedAI />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        {/* Show Foobar in mobile devices and not showing in register page */}
        {pathname !== "/register" && <Foobar />}
      </div>
    </main>
  );
};

export default App;
