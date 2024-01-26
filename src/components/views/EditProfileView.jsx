import React, { useRef } from "react";

import { useAppContext } from "../../contexts/AppContext";

const EditProfileView = () => {
  const { user, dispatch } = useAppContext();

  const nameRef = useRef(null);
  const avatarRef = useRef(null);

  const changeProfileHandler = e => {
    e.preventDefault();

    const details = {
      name: nameRef.current.value || user.firstName,
      avatar: avatarRef.current.value || user.avatar
    };

    dispatch({ type: "updateProfile", payload: details });
  };

  return (
    <div>
      <h1 className="text-3xl mb-5">Edit Profile</h1>
      <p>Update your details by clicking. Submit changes when ready.</p>
      <form className="mt-10" onSubmit={e => changeProfileHandler(e)}>
        <p>
          <label className="mr-3 font-bold" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            type="text"
            ref={nameRef}
            placeholder={user.firstName}
            className="input input-ghost w-full max-w-xs"
          />
        </p>
        <p>
          <label className="mr-3 font-bold" htmlFor="name">
            Avatar image address:
          </label>
          <input
            id="avatar"
            type="text"
            ref={avatarRef}
            placeholder="Type image address to change avatar"
            className="input input-ghost w-full max-w-xs"
          />
        </p>

        <div className="flex mt-10">
          <button
            type="submit"
            className="btn btn-primary mr-5"
            onClick={e => changeProfileHandler(e)}
          >
            Submit changes
          </button>
          <button
            type="btn"
            className="btn btn-accent btn-outline"
            onClick={() => dispatch({ type: "openTodos" })}
          >
            Exit (without changes)
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileView;
