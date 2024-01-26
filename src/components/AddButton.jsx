import React from "react";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { useAppContext } from "../contexts/AppContext";

const AddButton = () => {
  const { dispatch } = useAppContext();

  return (
    <div
      className="icon-add btn btn-outlined btn-secondary"
      onClick={() => dispatch({ type: "openAddNewItem" })}
    >
      <AddCircleOutlineOutlinedIcon /> Add new item
    </div>
  );
};

export default AddButton;
