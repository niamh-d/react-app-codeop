import { useAppContext } from "./contexts/AppContext";

import ToDosView from "./components/views/ToDosView";
import NavBar from "./components/NavBar";
import Welcome from "./components/views/Welcome";
import EditProfile from "./components/views/EditProfileView";
import ArchiveView from "./components/views/ArchiveView";
import StatsView from "./components/views/StatsView";
import Footer from "./components/Footer";

function App() {
  const { activeView } = useAppContext();

  return (
    <div className="app">
      {activeView !== "welcome" && <NavBar />}
      <div className="views-container">
        {activeView === "welcome" && <Welcome />}
        {activeView === "todos" && <ToDosView />}
        {activeView === "archive" && <ArchiveView />}
        {activeView === "edit-profile" && <EditProfile />}
        {activeView === "stats" && <StatsView />}
      </div>
      {activeView !== "welcome" && <Footer />}
    </div>
  );
}

export default App;
