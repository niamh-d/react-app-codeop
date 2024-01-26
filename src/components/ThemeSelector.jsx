import React from "react";

import { useAppContext } from "../contexts/AppContext";

const ThemeSelector = () => {
  const { dispatch } = useAppContext();

  return (
    <div
      className="join join-vertical"
      onChange={e => dispatch({ type: "saveTheme", payload: e.target.value })}
    >
      <p className="mt-5 mb-3 font-semibold">Dark Themes:</p>
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="🌳 Forest"
        value="forest"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="☕️ Coffee"
        value="coffee"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="🌅 Sunset"
        value="sunset"
      />
      <p className="mt-5 mb-3 font-semibold">Light Themes:</p>
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="🤍 Lofi"
        value="lofi"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="❄️ Nord"
        value="nord"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="🪴 Garden"
        value="garden"
      />
    </div>
  );
};

export default ThemeSelector;
