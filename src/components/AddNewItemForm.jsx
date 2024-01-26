import React, { useRef } from "react";

import { useAppContext } from "../contexts/AppContext";

const AddNewItemForm = () => {
  const { dispatch } = useAppContext();

  const titleRef = useRef(null);
  const frequencyRef = useRef(null);
  const tagsRef = useRef(null);

  const addNewItemHandler = e => {
    e.preventDefault();
    const newId = Date.now().toString();

    const isRepeated = frequencyRef.current.value !== "one-off";
    const frequency = isRepeated ? frequencyRef.current.value : null;

    const time = new Date();
    const dateAndTime = time.toString().slice(4, 15);

    const tagsArr = tagsRef.current.value.split(" ");

    const details = {
      id: newId,
      title: titleRef.current.value,
      status: "new",
      repeated: isRepeated,
      frequency: frequency,
      addDate: dateAndTime,
      deadlineDate: null,
      isArchived: false,
      completionDate: null,
      archivedDate: null,
      tags: tagsArr
    };

    dispatch({ type: "addNewItem", payload: details });
  };

  return (
    <form className="form" onSubmit={addNewItemHandler}>
      <input
        required
        type="text"
        ref={titleRef}
        placeholder="Type todo title here"
        className="input input-bordered w-full max-w-xs"
      />

      <select
        ref={frequencyRef}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="one-off">One-off</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <input
        type="text"
        ref={tagsRef}
        placeholder="Input tags separated by spaces"
        className="input input-bordered w-full max-w-xs"
      />
      <div className="flex">
        <button
          type="submit"
          className="btn btn-primary mr-3"
          onClick={addNewItemHandler}
        >
          Add new item
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => dispatch({ type: "closeAddNewItem" })}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddNewItemForm;
