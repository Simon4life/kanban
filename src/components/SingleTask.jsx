import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useBoardContext } from "../context/board_context";
import { SmallLoading } from "./Loading";

const SingleTask = ({ title, description, status, subtasks, _id: taskId }) => {
  const {
    boards,
    boardIndex,
    closeEditingModal,
    updateTask,
    isTaskEditingLoading,
    toggleLoading,
  } = useBoardContext();

  const [values, setValues] = useState({ status, subtasks });
  const refContainer = useRef(null);

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "subtask") {
      const checkBoxes = refContainer.current.querySelectorAll("input");

      let newSubtaskArr = [];

      for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].id == values.subtasks[i].id) {
          newSubtaskArr.push({
            title: values.subtasks[i].title,
            id: values.subtasks[i].id,
            completed: checkBoxes[i].checked,
          });
        }
      }

      const taskStatus = newSubtaskArr.filter(item => item.completed);
      const doneStatus = newSubtaskArr.every(item => item.completed);
      
      if(taskStatus.length < 1) {
        setValues({ ...values, subtasks: newSubtaskArr, status: "Todo" });
      }else if(taskStatus.length > 0) {
        setValues({ ...values, subtasks: newSubtaskArr, status: "Doing" });
      }  

      if (doneStatus) {
        setValues({ ...values, subtasks: newSubtaskArr, status: "Done" });
      }

    } else {
      const value = e.target.value;

      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    toggleLoading();
    e.preventDefault();
    const boardId = boards[boardIndex]._id;
    const updatedTask = { title, description, ...values };
    updateTask(boardId, taskId, updatedTask)
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <button type="button" className="close-btn" onClick={closeEditingModal}>
          <FaTimes />
        </button>

        <h3>{title}</h3>

        <p className="desc">{description}</p>

        <div className="subtask-container" ref={refContainer}>
          <h5>
            subtasks (
            {`${
              values.subtasks.filter((item) => item.completed === true).length
            } of ${subtasks.length}`}
            )
          </h5>
          {values.subtasks.map((item) => {
            return (
              <label className="subtask">
                {item.completed ? (
                  <input
                    type="checkbox"
                    name="subtask"
                    id={item.id}
                    onChange={handleChange}
                    checked
                  />
                ) : (
                  <input
                    type="checkbox"
                    name="subtask"
                    id={item.id}
                    onChange={handleChange}
                  />
                )}
                <span className="checkmark"></span>

                <span
                  htmlFor={item.id}
                  className={item.completed ? "text completed" : "text"}
                >
                  {item.title}
                </span>
              </label>
            );
          })}
        </div>

        <h5>Status</h5>

        <select
          name="status"
          className="form-select"
          value={values.status}
          onChange={handleChange}
        >
          <option>Todo</option>
          <option>Doing</option>
          <option>Done</option>
        </select>

        <div className="btn-container">
          <button className="btn">Save</button>
        </div>
        {isTaskEditingLoading ? <SmallLoading /> : null}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .desc {
    color: var(--grey-200);
  }
  h5 {
    margin-bottom: 0.2rem;
  }
  .subtask-container {
    width: 100%;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    .subtask {
      background: var(--backgroundColor);
      width: 100%;
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      .checkmark {
        position: absolute;
        top: 5px;
        left: 5px;
        border-radius: var(--borderRadius);
        height: 25px;
        width: 25px;
        background-color: var(--light-black-bcg);
        display: block;
      }

      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
      .checkmark:after {
        left: 10px;
        top: 7px;
        width: 5px;
        height: 10px;

        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    .subtask input:checked ~ .checkmark:after {
      display: block;
    }
    .subtask input:checked ~ .checkmark {
      background: var(--light-purple);
    }
    .completed {
      text-decoration: line-through;
      color: var(--dark-text);
      letter-spacing: var(--letterSpacing);
    }
    .text {
      margin-left: 1rem;
      display: inline-block;
    }
  }
  .btn-container {
    margin-top: 1.8rem;
    text-align: right;
  }
  .form-select {
    background: var(--light-black-bcg);
    padding: 0.5rem;
    height: 2.8rem;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export default SingleTask;
