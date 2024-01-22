import React from "react";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Tooltip from "@mui/material/Tooltip";

const Project = ({ data }) => {
  const { title, description, source, id } = data;

  return (
    <>
      <div className="icons-box">
        <Tooltip title="Select as Favourite">
          <FavoriteBorderOutlinedIcon />
        </Tooltip>
        <Tooltip title="Edit details">
          <EditOutlinedIcon />
        </Tooltip>
        <Tooltip title="Delete">
          <DeleteOutlinedIcon />
        </Tooltip>
      </div>
      <div>
        <h3 className="text-lg font-bold mt-2 mb-3">{title}</h3>
        <img className="pd-5" src={source} />
        <p className="mt-3">{description}</p>
      </div>
    </>
  );
};

export default Project;
