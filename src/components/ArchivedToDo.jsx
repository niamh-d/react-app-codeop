import React from "react";

import Tooltip from "@mui/material/Tooltip";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { useAppContext } from "../contexts/AppContext";

const ArchivedToDo = ({ toDo }) => {
  const { dispatch } = useAppContext();

  const deleteHandler = () => {
    dispatch({ type: "setDeleteId", payload: toDo.id });
    document.getElementById("modal_delete").showModal();
  };

  return (
    <li className="todo-item">
      <Tooltip title="Delete forever">
        <DeleteForeverOutlinedIcon onClick={deleteHandler} />
      </Tooltip>
      <Tooltip title="Restore from archive">
        <ReplayOutlinedIcon
          onClick={() =>
            dispatch({
              type: "restore",
              payload: toDo.id
            })
          }
        />
      </Tooltip>
      {toDo.status === "completed" && (
        <span className="p-2 line-through decoration-green-500">
          {toDo.title}
        </span>
      )}
      {toDo.status === "in-progress" && (
        <span className="p-2 font-bold underline decoration-orange-600 decoration-4 underline-offset-2">
          {toDo.title}
        </span>
      )}
      {toDo.status === "new" && <span className="p-2">{toDo.title}</span>}
      {!toDo.repeated && <div className="badge badge-primary">One-off</div>}
      {toDo.frequency && (
        <div className="badge badge-accent badge-outline">{toDo.frequency}</div>
      )}
      <span>Archived: {toDo.archivedDate}</span>
    </li>
  );
};

export default ArchivedToDo;
