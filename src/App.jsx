import { Routes, Route, useLocation } from "react-router-dom";
import {  History, Homepage, Plans, Profile, Register } from "./pages";
import { EditProfileModal, Foobar, Navbar, SideHistory } from "./components";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { useSelectedAi } from "./hooks/useSelectedAi";
import { useGlobalStore } from "./context/useGlobalStore";

const App = () => {
  const { pathname } = useLocation();
  const { selectedAi } = useSelectedAi();
  const { sendMail, previewImage, previewEmail, dark,isEditProfile } = useGlobalStore();
  const selectedAiSolve = selectedAi.get("selected");

  return (
    <main className={`${dark ? "dark" : "light"} relative w-full font-roboto overflow-hidden h-full`}>
      {/* dark condition for themes */}
      {isEditProfile && <EditProfileModal />}
      <div className="main__section">
        {pathname !== "/register" ? <Navbar /> : ""}

        {/* All Routes inside this app */}
        <div className="flex flex-row gap-2 min-h-screen w-full">
          {/* Show SideHistory in specific Page */}
          {(pathname === "/" && selectedAiSolve !== "ai-solve" && !previewEmail && !sendMail && !previewImage) || (pathname !== "/register" && <SideHistory />)}
          <Routes>
            <Route
              path="/"
              element={
                // <ProtectedRoute>
                  <Homepage />
                // </ProtectedRoute> 
              }
            />
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
