import React from "react";
import Drawer from "./Drawer";

import { useAppContext } from "../contexts/AppContext";

export default function NavBar() {
  const { dispatch, user, activeView } = useAppContext();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">töödo äpp</a>
      </div>
      <div className="flex-none gap-4">
        <div>
          <p className="font-bold">{user.firstName}</p>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="user image" src={user.avatar} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
          >
            <li>
              <p
                onClick={() => dispatch({ type: "openEditProfile" })}
                className={
                  activeView === "edit-profile" ? "bg-base-300 font-bold" : null
                }
              >
                Profile
              </p>
            </li>
            <li>
              <p
                onClick={() => dispatch({ type: "openTodos" })}
                className={
                  activeView === "todos" ? "bg-base-300 font-bold" : null
                }
              >
                To dos
              </p>
            </li>
            <li>
              <p
                onClick={() => dispatch({ type: "openStats" })}
                className={
                  activeView === "stats" ? "bg-base-300 font-bold" : null
                }
              >
                Statistics
              </p>
            </li>
            <li>
              <p
                onClick={() => dispatch({ type: "openArchive" })}
                className={
                  activeView === "archive" ? "bg-base-300 font-bold" : null
                }
              >
                Archive
              </p>
            </li>
            <li>
              <p onClick={() => dispatch({ type: "logOut" })}>Log Out</p>
            </li>
          </ul>
        </div>
        <Drawer />
      </div>
    </div>
  );
}
