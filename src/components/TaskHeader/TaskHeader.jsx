import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = (item) => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h2>Todo List.......</h2>
      <b data-cy="header-remaining-task" style={{color:"green"}}> you have {unCompletedTask} </b>
      <b data-cy="header-total-task" style={{color:"green"}}>{totalTask} of task remaing</b>
    </div>
  );
};

export default TaskHeader;
