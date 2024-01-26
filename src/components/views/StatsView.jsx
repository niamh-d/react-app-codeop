import React from "react";

import { useAppContext } from "../../contexts/AppContext";

import Statistics from "../../data/statistics";
import DailiesProgressLines from "../Stats/DailiesProgressLines";
import ActivesProgressLines from "../Stats/ActivesProgressLines";
import HistoricStats from "../Stats/HistoricStats";
import Modal from "../Modal";

const StatsView = () => {
  const { historicStats, dispatch } = useAppContext();

  const { dailies, actives } = Statistics();

  const onResetStats = () => dispatch({ type: "resetStats" });

  return (
    <div>
      <Modal
        textBtnSecondary="Reset Statistics"
        onClickHandler={onResetStats}
        modalId="modal_reset-stats"
      />
      <h1 className="text-3xl mb-10">Your Statistics</h1>
      <div className="grid grid-cols-2">
        <DailiesProgressLines dailies={dailies} />
        <ActivesProgressLines actives={actives} />
        <HistoricStats stats={historicStats} />
        <button
          onClick={() => dispatch({ type: "openTodos" })}
          type="button"
          className="btn btn-secondary btn-small"
        >
          Back to todos
        </button>
      </div>
    </div>
  );
};

export default StatsView;
