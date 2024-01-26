import React from "react";

import Tooltip from "@mui/material/Tooltip";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { useAppContext } from "../../contexts/AppContext";

import ToDosList from "../ToDosList";
import Modal from "../Modal";
import TagsBox from "../TagsBox";

const ArchiveView = () => {
  const { archivedToDos, dispatch, selectedTag } = useAppContext();

  const onDeleteItem = () => dispatch({ type: "delete" });

  const openDeleteAllModal = () => {
    document.getElementById("modal_delete_all").showModal();
  };

  const onDeleteAllItems = () => dispatch({ type: "deleteAll" });

  return (
    <>
      <Modal
        textBtnSecondary="Delete Item"
        onClickHandler={onDeleteItem}
        modalId="modal_delete"
      />
      <Modal
        textBtnSecondary="Delete ALL Items"
        onClickHandler={onDeleteAllItems}
        modalId="modal_delete_all"
      />
      <div className="p-12 todos-container">
        <h1 className="text-3xl mb-5">
          Archive
          {archivedToDos.length === 0 && " (empty)"}
          {archivedToDos.length === 1 && " (1 item)"}
          {archivedToDos.length > 1 && ` (${archivedToDos.length} items)`}
        </h1>
        {archivedToDos.length > 0 && (
          <ToDosList tag={selectedTag} toDos={archivedToDos} archive={true} />
        )}
        <TagsBox toDos={archivedToDos} activeTag={selectedTag} />
        {!archivedToDos.length && <p>You have no archived todos.</p>}
        <div className="flex gap-5 items-end">
          <button
            type="button"
            className="btn btn-secondary mt-10"
            onClick={() => dispatch({ type: "openTodos" })}
          >
            Back to Todos list
          </button>

          <Tooltip title="Delete ALL ITEMS forever">
            <DeleteForeverOutlinedIcon onClick={openDeleteAllModal} />
          </Tooltip>
          <Tooltip title="Restore ALL ITEMS from archive">
            <ReplayOutlinedIcon
              onClick={() =>
                dispatch({
                  type: "restoreAll"
                })
              }
            />
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default ArchiveView;
