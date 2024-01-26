import React from "react";

import DoneIcon from "@mui/icons-material/Done";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import Tooltip from "@mui/material/Tooltip";
import HistoryIcon from "@mui/icons-material/History";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import { useAppContext } from "../contexts/AppContext";

const ToDo = ({ toDo }) => {
  const { dispatch, theme } = useAppContext();

  const themeIsDark =
    theme === "sunset" || theme === "forest" || theme === "coffee";

  return (
    <li className="todo-item">
      <Tooltip title="Send to archive">
        <Inventory2OutlinedIcon
          onClick={() =>
            dispatch({
              type: "archiveTodo",
              payload: toDo.id,
            })
          }
        />
      </Tooltip>
      {toDo.status === "completed" && (
        <>
          <div className="buffer-block-2 flex justify-center">
            <span className={`p-1 ${themeIsDark ? "text-black" : null}`}>
              DONE
            </span>
          </div>
          <Tooltip title="Roll-back status">
            <HistoryIcon
              onClick={() =>
                dispatch({
                  type: "updateStatus",
                  payload: {
                    id: toDo.id,
                    status: "in-progress",
                  },
                })
              }
            />
          </Tooltip>
          <span className="ml-5 p-2 line-through decoration-green-500">
            {toDo.title}
          </span>
        </>
      )}

      {toDo.status === "in-progress" && (
        <>
          <div className="buffer-block-1 flex justify-center">
            <span className={`p-1 ${themeIsDark ? "text-black" : null}`}>
              PROG
            </span>
          </div>
          <Tooltip title="Mark as completed">
            <DoneIcon
              onClick={() =>
                dispatch({
                  type: "updateStatus",
                  payload: { id: toDo.id, status: "completed" },
                })
              }
            />
          </Tooltip>
          <Tooltip title="Roll-back status">
            <HistoryIcon
              onClick={() =>
                dispatch({
                  type: "updateStatus",
                  payload: {
                    id: toDo.id,
                    status: "new",
                  },
                })
              }
            />
          </Tooltip>
          <span className="ml-5 p-2 font-bold underline decoration-orange-600 decoration-4 underline-offset-2">
            {toDo.title}
          </span>
        </>
      )}

      {toDo.status === "new" && (
        <>
          <Tooltip title="Mark as in progress">
            <PendingOutlinedIcon
              onClick={() =>
                dispatch({
                  type: "updateStatus",
                  payload: { id: toDo.id, status: "in-progress" },
                })
              }
            />
          </Tooltip>
          <span className="ml-5 p-2">{toDo.title}</span>
        </>
      )}

      {!toDo.repeated && <div className="badge badge-primary">One-off</div>}
      {toDo.frequency && (
        <div className="badge badge-accent badge-outline">{toDo.frequency}</div>
      )}
      <span>Added: {toDo.addDate}</span>
    </li>
  );
};

export default ToDo;
