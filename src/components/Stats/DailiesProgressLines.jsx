import React from "react";

const DailiesProgressLines = ({ dailies }) => {
  const {
    percentageDailiesNew,
    percentageDailiesInProgress,
    percentageDailiesCompleted,
    numDailiesCompleted,
    numDailiesInProgress,
    numDailiesNew
  } = dailies;

  return (
    <div>
      <h2 className="text-xl">Daily Todos</h2>
      <div className="flex gap-3">
        <ul className="mt-5 mb-10 flex gap-3 flex-col">
          <li>
            <span className="mr-3">New:</span>
          </li>
          <li>
            <span className="mr-3">In progress:</span>
          </li>
          <li>
            <span className="mr-3 font-bold">Completed:</span>
          </li>
        </ul>
        <ul className="mt-5 mb-10 flex gap-3 flex-col">
          <li>
            <progress
              className="progress w-44"
              value={percentageDailiesNew}
              max="100"
            ></progress>
            <span className="ml-3">
              {percentageDailiesNew}% ({numDailiesNew})
            </span>
          </li>
          <li>
            <progress
              className="progress progress-warning w-44"
              value={percentageDailiesInProgress}
              max="100"
            ></progress>
            <span className="ml-3">
              {percentageDailiesInProgress}% ({numDailiesInProgress})
            </span>
          </li>
          <li>
            <progress
              className="progress progress-success w-44"
              value={percentageDailiesCompleted}
              max="100"
            ></progress>
            <span className="ml-3 font-bold">
              {percentageDailiesCompleted}% ({numDailiesCompleted})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DailiesProgressLines;
