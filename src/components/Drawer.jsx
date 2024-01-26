import React from "react";

import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import Tooltip from "@mui/material/Tooltip";

import ThemeSelector from "./ThemeSelector";

const Drawer = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="btn btn-ghost">
          <Tooltip title="Change Theme">
            <FormatPaintIcon />
          </Tooltip>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-44 min-h-full bg-base-200 text-base-content">
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
