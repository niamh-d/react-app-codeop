import { useAppContext } from "../contexts/AppContext";

export default function Statistics() {
  const { toDosArr } = useAppContext();

  // CALCULATIONS

  // utility func

  function percentage(num1, num2) {
    return ((num1 / num2) * 100).toFixed(1);
  }

  // dailies

  const dailies = toDosArr.filter(toDo => toDo.frequency === "daily");
  const numDailiesCompleted = dailies.filter(
    toDo => toDo.status === "completed"
  ).length;
  const numDailiesNew = dailies.filter(toDo => toDo.status === "new").length;
  const numDailiesInProgress = dailies.filter(
    toDo => toDo.status === "in-progress"
  ).length;

  const totalNumDailies = dailies.length;

  const percentageDailiesNew = percentage(numDailiesNew, totalNumDailies);
  const percentageDailiesInProgress = percentage(
    numDailiesInProgress,
    totalNumDailies
  );
  const percentageDailiesCompleted = percentage(
    numDailiesCompleted,
    totalNumDailies
  );

  // all active

  const numActiveNew = toDosArr.filter(toDo => toDo.status === "new").length;
  const numActiveInProgress = toDosArr.filter(
    toDo => toDo.status === "in-progress"
  ).length;
  const numActiveCompleted = toDosArr.filter(
    toDo => toDo.status === "completed"
  ).length;
  const totalNumActive = toDosArr.length;

  const percentageActiveNew = percentage(numActiveNew, totalNumActive);
  const percentageActiveInProgress = percentage(
    numActiveInProgress,
    totalNumActive
  );
  const percentageActiveCompleted = percentage(
    numActiveCompleted,
    totalNumActive
  );

  // EXPORT NUMBERS

  return {
    dailies: {
      percentageDailiesNew,
      percentageDailiesInProgress,
      percentageDailiesCompleted,
      numDailiesCompleted,
      numDailiesInProgress,
      numDailiesNew
    },
    actives: {
      numActiveNew,
      numActiveInProgress,
      numActiveCompleted,
      percentageActiveNew,
      percentageActiveInProgress,
      percentageActiveCompleted
    }
  };
}
