import ThemeSelector from "./ThemeSelector";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import User from "./User";
import Button from "./Button";

import { useProjects } from "../contexts/ProjectsContext";

import Tooltip from "@mui/material/Tooltip";

function Header() {
  const { dispatch } = useProjects();

  const onLogOut = () => {
    dispatch({ type: "logOut" });
  };

  return (
    <header className="flex">
      <h1>Your Portfolio</h1>
      <div className="flex gap-8">
        <User />
        <Tooltip title="Add new project">
          <AddCircleIcon />
        </Tooltip>
        <Button type="btn-info" text="Log out" handleClick={onLogOut} />
      </div>
      <ThemeSelector />
    </header>
  );
}

export default Header;
