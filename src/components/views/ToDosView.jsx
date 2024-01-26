import React from "react";

import { useAppContext } from "../../contexts/AppContext";

import ToDosList from "../ToDosList";
import AddNewItemForm from "../AddNewItemForm";
import AddButton from "../AddButton";
import TagsBox from "../TagsBox";

const ToDosView = () => {
  const { isAddItemFormOpen, toDosArr, selectedTag } = useAppContext();

  return (
    <div className="p-12 todos-container">
      {!isAddItemFormOpen && (
        <AddButton onClick={() => dispatch({ type: "openAddNewItem" })} />
      )}
      {isAddItemFormOpen && <AddNewItemForm />}
      <h2 className="text-2xl mt-5">
        To Dos List
        {toDosArr.length === 0 && " (empty)"}
        {toDosArr.length === 1 && " (1 item)"}
        {toDosArr.length > 1 && ` (${toDosArr.length} items)`}
      </h2>
      <TagsBox toDos={toDosArr} activeTag={selectedTag} />
      {toDosArr.length > 0 && <ToDosList tag={selectedTag} toDos={toDosArr} />}
      {!toDosArr.length && (
        <p className="mt-5">You have no to dos. Why not add one?</p>
      )}
    </div>
  );
};

export default ToDosView;
