import React, { useState } from "react";

import { useAppContext } from "../contexts/AppContext";

const TagsBox = ({ toDos, activeTag }) => {
  const { dispatch } = useAppContext();

  const tagsArr = [
    ...new Set(toDos.flatMap(todo => todo.tags)),
    ...new Set(toDos.map(todo => todo.frequency))
  ].filter(tag => tag);

  return (
    <div className="mt-10 mb-3">
      <div className="flex gap-2">
        {tagsArr.map(tag => (
          <div
            id={tag}
            key={tag}
            className={`badge ${
              tag === activeTag ? "font-bold badge-accent" : "badge-ghost"
            }`}
            onClick={() => dispatch({ type: "setTag", payload: tag })}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsBox;
