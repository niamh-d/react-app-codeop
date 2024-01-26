/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";

import { data } from "../data/data";

const initialUser =
  JSON.parse(localStorage.getItem("user")) || data.starterUser;
const initialTheme = localStorage.getItem("theme") || "garden";
const initialToDosArray =
  JSON.parse(localStorage.getItem("toDosArr")) || data.starterToDosArr;
const initialArchivedToDosArray =
  JSON.parse(localStorage.getItem("archivedToDos")) ||
  data.starterArchivedToDosArr;
const initialHistoricStats =
  JSON.parse(localStorage.getItem("historicStats")) ||
  data.starterHistoricStats;

const initialState = {
  user: initialUser,
  toDosArr: initialToDosArray,
  archivedToDos: initialArchivedToDosArray,
  isAddItemFormOpen: false,
  activeView: "welcome", // "welcome", "todos", "edit-profile", "archive", "stats"
  deletedId: null,
  theme: initialTheme,
  historicStats: initialHistoricStats,
  selectedTag: null
};

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [
    {
      user,
      toDosArr,
      archivedToDos,
      isAddItemFormOpen,
      activeView,
      theme,
      historicStats,
      selectedTag
    },
    dispatch
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("toDosArr", JSON.stringify(toDosArr));
  }, [toDosArr]);

  useEffect(() => {
    localStorage.setItem("archivedToDos", JSON.stringify(archivedToDos));
  }, [archivedToDos]);

  useEffect(() => {
    localStorage.setItem("historicStats", JSON.stringify(historicStats));
  }, [historicStats]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function reducer(state, action) {
    switch (action.type) {
      case "openTodos":
        return {
          ...state,
          activeView: "todos",
          selectedTag: null
        };
      case "logOut":
        return {
          ...state,
          activeView: "welcome"
        };
      case "openEditProfile":
        return {
          ...state,
          activeView: "edit-profile"
        };
      case "openStats":
        return {
          ...state,
          activeView: "stats"
        };
      case "openArchive":
        return {
          ...state,
          activeView: "archive",
          selectedTag: null
        };
      case "openAddNewItem":
        return {
          ...state,
          isAddItemFormOpen: true
        };
      case "closeAddNewItem":
        return {
          ...state,
          isAddItemFormOpen: false
        };
      case "updateProfile":
        return {
          ...state,
          user: {
            ...state.user,
            firstName: action.payload.name,
            avatar: action.payload.avatar
          },
          activeView: "todos"
        };
      case "setTag":
        const activeTag =
          action.payload === state.selectedTag ? null : action.payload;

        return {
          ...state,
          selectedTag: activeTag
        };
      case "saveTheme":
        localStorage.setItem("theme", action.payload);
        document.documentElement.setAttribute("data-theme", action.payload);
        return {
          ...state,
          theme: action.payload
        };
      case "addNewItem":
        const updatedCountAdded = state.historicStats.numAdded + 1;

        return {
          ...state,
          isAddItemFormOpen: false,
          historicStats: {
            ...state.historicStats,
            numAdded: updatedCountAdded
          },
          toDosArr: [action.payload, ...state.toDosArr]
        };
      case "updateStatus":
        const touchedToDo = state.toDosArr.find(
          todo => todo.id === action.payload.id
        );

        const wholeArr = [
          ...state.toDosArr.filter(todo => todo.id !== action.payload.id),
          { ...touchedToDo, status: action.payload.status }
        ];

        const sortedArr = [
          ...wholeArr.filter(todo => todo.status === "new"),
          ...wholeArr.filter(todo => todo.status === "in-progress"),
          ...wholeArr.filter(todo => todo.status === "completed")
        ];

        let updatedCountCompleted;

        if (action.payload.status === "completed") {
          updatedCountCompleted = state.historicStats.numCompleted + 1;
        }
        return {
          ...state,
          toDosArr: sortedArr,
          historicStats: {
            ...state.historicStats,
            numCompleted:
              updatedCountCompleted || state.historicStats.numCompleted
          }
        };

      case "archiveTodo":
        const archivedToDo = state.toDosArr.find(
          todo => todo.id === action.payload
        );

        const time = new Date();

        archivedToDo.archivedDate = time.toString().slice(4, 15);

        const updatedCountArchived = state.historicStats.numArchived + 1;

        return {
          ...state,
          toDosArr: state.toDosArr.filter(todo => todo.id !== action.payload),
          archivedToDos: [...state.archivedToDos, archivedToDo],
          historicStats: {
            ...state.historicStats,
            numArchived: updatedCountArchived
          }
        };

      case "restore":
        const restoredToDo = state.archivedToDos.find(
          todo => todo.id === action.payload
        );

        restoredToDo.archivedDate = null;

        const updatedCountRestored = state.historicStats.numRestored + 1;

        return {
          ...state,
          archivedToDos: state.archivedToDos.filter(
            todo => todo.id !== action.payload
          ),
          toDosArr: [...state.toDosArr, restoredToDo],
          historicStats: {
            ...state.historicStats,
            numRestored: updatedCountRestored
          }
        };

      case "restoreAll":
        const updatedCountRestoredAll =
          state.historicStats.numRestored + state.archivedToDos.length;
        return {
          ...state,
          toDosArr: [...state.toDosArr, ...state.archivedToDos],
          archivedToDos: [],
          historicStats: {
            ...state.historicStats,
            numCompleted: updatedCountRestoredAll
          }
        };

      case "setDeleteId":
        return {
          ...state,
          deletedId: action.payload
        };

      case "delete":
        const updatedCountDeleted = state.historicStats.numDeleted + 1;
        return {
          ...state,
          deletedId: null,
          archivedToDos: state.archivedToDos.filter(
            todo => todo.id !== state.deletedId
          ),
          historicStats: {
            ...state.historicStats,
            numDeleted: updatedCountDeleted
          }
        };
      case "deleteAll":
        const updatedCountDeletedAll =
          state.historicStats.numDeleted + state.archivedToDos.length;
        return {
          ...state,
          archivedToDos: [],
          historicStats: {
            ...state.historicStats,
            numDeleted: updatedCountDeletedAll
          }
        };
      case "resetStats":
        return {
          ...state,
          historicStats: {
            numCompleted: 0,
            numArchived: 0,
            numDeleted: 0,
            numAdded: 0,
            numRestored: 0
          }
        };

      default:
        return state;
    }
  }

  return (
    <AppContext.Provider
      value={{
        user,
        theme,
        toDosArr,
        archivedToDos,
        dispatch,
        isAddItemFormOpen,
        historicStats,
        activeView,
        selectedTag
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error("AppContext used outside of AppContextProvider");
  return context;
}

export { AppContextProvider, useAppContext };
