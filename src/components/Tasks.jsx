import React, { useState, useEffect } from "react";
import { useBoardContext } from "../context/board_context";
import styled from "styled-components";
import Task from "./Task";
import { Loading } from "./Loading";

const Tasks = () => {
  const { boards, boardIndex, isTaskLoading, updateTask } = useBoardContext();
  const [taskValues, setTaskValues] = useState([]);

  const getStatusNumbers = (status) => {
    const num = boards[boardIndex]
      ? `(${taskValues.filter((item) => item.status === status).length})`
      : null;
    return num;
  };
  const handleDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData("text");
    const value = taskValues.find((item) => item._id == id);
    if (value) {
      const newTaskArr = taskValues.map((item) => {
        if (item._id == id) {
          const boardId = boards[boardIndex]._id;
          const taskId = id;
          const newTask = { ...item, status: newStatus };
          updateTask(boardId, taskId, newTask);
          return { ...item, status: newStatus };
        } else {
          return item;
        }
      });
      setTaskValues(newTaskArr);
    } else {
    }
    e.dataTransfer.clearData();
  };

  useEffect(() => {
    if (boards[boardIndex]) {
      const { tasks } = boards[boardIndex];
      setTaskValues([...tasks]);
    }
  }, [boardIndex, boards]);

  if (isTaskLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="tasks-container">
        <div>
          <header>
            <p>
              <span className="todo"></span> Todo
              {getStatusNumbers("Todo")}
            </p>
            <p>
              <span className="doing"></span> Doing
              {getStatusNumbers("Doing")}
            </p>
            <p>
              <span className="done"></span> Done
              {getStatusNumbers("Done")}
            </p>
          </header>
          <div className="tasks">
            <div
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                handleDrop(e, "Todo");
              }}
            >
              {taskValues
                .filter((item) => item.status === "Todo")
                .map((item, index) => {
                  return <Task {...item} key={index} />;
                })}
            </div>
            <div
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                handleDrop(e, "Doing");
              }}
            >
              {taskValues
                .filter((item) => item.status === "Doing")
                .map((item, index) => {
                  return <Task {...item} key={index} />;
                })}
            </div>
            <div
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                handleDrop(e, "Done");
              }}
            >
              {taskValues
                .filter((item) => item.status === "Done")
                .map((item, index) => {
                  return <Task {...item} key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  height: 2rem;
  .tasks-container {
    padding: 1.5rem;
    width: 100%;
    // position: fixed;
    overflow: scroll;
    height: calc(100vh - 5rem);
    header {
      width: 100%;
      margin-bottom: 1rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      p {
        width: 200px;
      }
      span {
        height: 20px;
        display: block;
        width: 20px;
        margin-right: 1rem;
        border-radius: 50%;
      }
      .doing {
        background: var(--purple-clr);
      }
      .todo {
        background: var(--blue-clr);
      }
      .done {
        background: var(--green-clr);
      }
      p {
        display: flex;
        align-items: center;
        margin-left: 0.8rem;
        margin-bottom: 0;
        font-weight: bold;
        color: var(--grey-200);
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
    .tasks {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
    @media (min-width: 992px) {
      margin-top: 5rem;
      height: 580px;
      width: calc(100vw - 345px);
    }
  }
  .tasks-container::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .tasks-container::-webkit-scrollbar-thumb {
    background: var(--grey-200);
  }
`;
export default Tasks;
