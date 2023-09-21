import React from "react";
import styled from "styled-components";
import { useBoardContext } from "../context/board_context";

const Task = ({ title, status, _id: taskId, subtasks }) => {
  const { updateEditVal } = useBoardContext();
  return (
    <Wrapper
      className={
        status === "Doing"
          ? "doing"
          : status === "Todo"
          ? "todo"
          : status === "Done"
          ? "done"
          : null
      }
      onClick={() => updateEditVal(taskId)}
      draggable={true}
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
      }}
      id={taskId}
    >
      <div className="task-container" id={taskId}>
        <h3>{title}</h3>
        <h5>
          subtasks (
          {`${subtasks.filter((item) => item.completed === true).length} of ${
            subtasks.length
          }`}
          )
        </h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .task-container {
    padding: 1.2rem;
    border-radius: var(--borderRadius);
    background: var(--light-black-bcg);
    margin-bottom: 1rem;
    width: 200px;
    cursor: pointer;
    h3 {
      font-size: 1.2rem;
    }
    h5 {
      font-size: 1rem;
    }
    @media (min-width: 992px) {
      font-size: 2.4rem;
      width: 300px;
    }
  }
`;

export default Task;
