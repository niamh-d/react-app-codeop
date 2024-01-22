/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const ProjectsContext = createContext();

const initialState = {
  projects: [],
  isAdmin: false,
  status: "",
  isLoggedIn: false,
  isDark: false,
};

function ProjectsProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "logIn":
        return {
          ...state,
          status: "ready",
          isLoggedIn: true,
        };
      case "logOut":
        return {
          ...state,
          status: "",
          isLoggedIn: false,
        };
      case "toggleDark":
        const mode = !state.isDark;
        return {
          ...state,
          isDark: mode,
        };
      case "dataReceived":
        return {
          ...state,
          projects: action.payload,
          status: "ready",
        };
      case "dataFailed":
        return {
          ...state,
          status: "error",
        };
      default:
        throw new Error("Action unknown");
    }
  }

  const [{ projects, isAdmin, status, isLoggedIn, isDark }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        dispatch,
        status,
        isLoggedIn,
        isDark,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

function useProjects() {
  const context = useContext(ProjectsContext);

  if (context === undefined)
    throw new Error("ProjectsContext used outside of ProjectProvider");
  return context;
}

export { ProjectsProvider, useProjects };
