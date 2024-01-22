import React from "react";

import Button from "../Button";

import styles from "./WelcomeView.module.css";

import { useProjects } from "../../contexts/ProjectsContext";

const WelcomeView = () => {
  const { dispatch } = useProjects();

  const onLogIn = () => {
    dispatch({ type: "logIn" });
  };

  return (
    <div className={styles["welcome-screen"]}>
      <div className={styles["text-container"]}>
        <h1 className="text-5xl mb-10">Welcome to Portfolio Editor!</h1>
        <Button type="btn-primary" text="Log In" handleClick={onLogIn} />
      </div>
    </div>
  );
};

export default WelcomeView;
