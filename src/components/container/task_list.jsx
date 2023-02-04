import React from "react";
import PropTypes from "prop-types";
import TaskComponent from "../pure/task";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default Description",
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
    console.log('TODO: Cambiar el estado de una tarea')
  }

  return (
    <div>
      <div>
        Your Task:
      </div>
      {/* TODO: Aplicar un for/map */}
        <TaskComponent task={defaultTask} />
    </div>
  );
};

TaskListComponent.propTypes = {};

export default TaskListComponent;
