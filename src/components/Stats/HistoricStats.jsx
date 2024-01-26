import React from "react";

const HistoricStats = ({ stats }) => {
  const onOpenResetStatsModal = () => {
    document.getElementById("modal_reset-stats").showModal();
  };

  const {
    numCompleted,
    numArchived,
    numRestored,
    numDeleted,
    numAdded
  } = stats;
  return (
    <div>
      <h2 className="text-xl mb-5">Historic Statistics</h2>
      <div className="flex gap-12 items-center">
        <ul className="flex flex-col gap-3">
          <li>
            <span>
              Total number of todos <strong>created</strong>:
            </span>
          </li>
          <li>
            <span>
              Total number of todos <strong>completed</strong>:
            </span>
          </li>
          <li>
            <span>
              Total number of todos <strong>archived</strong>:
            </span>
          </li>
          <li>
            <span>
              Total number of todos <strong>restored</strong>:
            </span>
          </li>
          <li>
            <span>
              Total number of todos <strong>deleted</strong>:
            </span>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            <span>{numAdded}</span>
          </li>
          <li>
            <span>{numCompleted}</span>
          </li>
          <li>
            <span>{numArchived}</span>
          </li>
          <li>
            <span>{numRestored}</span>
          </li>
          <li>
            <span>{numDeleted}</span>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-glass mt-8"
        onClick={onOpenResetStatsModal}
      >
        Reset Historic Statistics
      </button>
    </div>
  );
};

export default HistoricStats;
