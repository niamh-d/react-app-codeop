import { useEffect } from "react";

import { themeChange } from "theme-change";

import WelcomeView from "./components/views/WelcomeView";
import AdminView from "./components/views/AdminView";
import UserView from "./components/views/UserView";
import { useProjects } from "./contexts/ProjectsContext";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const { status, dispatch, isLoggedIn } = useProjects();

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(
    function () {
      fetch("http://localhost:9000/projects")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch((err) => dispatch({ type: "dataFailed" }));
    },
    [dispatch]
  );

  return (
    <div className="app">
      {!isLoggedIn && <WelcomeView />}

      {isLoggedIn && (
        <>
          <Header />
          <Main>
            {/* {status === "loading" && <Loader />}
            {status === "error" && <Error />} */}
            {status === "ready" && <UserView />}
          </Main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
