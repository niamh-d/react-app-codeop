import React from "react";

const ActivesProgressLines = ({ actives }) => {
  const {
    numActiveNew,
    numActiveInProgress,
    numActiveCompleted,
    percentageActiveNew,
    percentageActiveInProgress,
    percentageActiveCompleted
  } = actives;
  return (
    <div>
      <h2 className="text-xl">All Active Todos</h2>

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
              value={percentageActiveNew}
              max="100"
            ></progress>
            <span className="ml-3">
              {percentageActiveNew}% ({numActiveNew})
            </span>
          </li>
          <li>
            <progress
              className="progress progress-warning w-44"
              value={percentageActiveInProgress}
              max="100"
            ></progress>
            <span className="ml-3">
              {percentageActiveInProgress}% ({numActiveInProgress})
            </span>
          </li>
          <li>
            <progress
              className="progress progress-success w-44"
              value={percentageActiveCompleted}
              max="100"
            ></progress>
            <span className="ml-3 font-bold">
              {percentageActiveCompleted}% ({numActiveCompleted})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActivesProgressLines;
