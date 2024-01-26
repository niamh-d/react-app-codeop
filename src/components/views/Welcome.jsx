import React from "react";

import { useAppContext } from "../../contexts/AppContext";

const Welcome = () => {
  const { dispatch, user } = useAppContext();

  return (
    <div className="mr-auto ml-auto max-w-2xl mt-6">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
            alt="Woman on laptop"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">Hi, {user.firstName} 👋</h2>
          <p>Let's be productive today, yes?</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary mb-3 ml-1"
              onClick={() => dispatch({ type: "openTodos" })}
            >
              Get started!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
