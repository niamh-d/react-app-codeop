import React from "react";

import ToDo from "./ToDo";
import ArchivedToDo from "./ArchivedToDo";

import styles from "./ToDosList.module.css";

const ToDosList = ({ tag, toDos, archive = false }) => {
  const filteredList = tag
    ? toDos.filter(toDo => toDo.tags.includes(tag) || toDo.frequency === tag)
    : toDos;

  return (
    <div className="mt-5">
      <ul className={styles["to-dos-list"]}>
        {!archive &&
          filteredList.map(toDo => <ToDo key={toDo.id} toDo={toDo} />)}
        {archive &&
          filteredList.map(toDo => <ArchivedToDo key={toDo.id} toDo={toDo} />)}
      </ul>
    </div>
  );
};

export default ToDosList;
