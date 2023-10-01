import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import FormRow from "./FormRow";
import { useState, useEffect } from "react";
import { useBoardContext } from "../context/board_context";

const initialState = {
  title: "",
  description: "",
  subTask: [],
  status: "Todo",
};

const NewTaskForm = () => {
  const [taskValues, setTaskValues] = useState(initialState);
  const [subTaskCount, setSubTaskCount] = useState(2);

  const { boardIndex, boards, closeCreatingModal, addNewTask, getAllTask, notifyUser } =
  useBoardContext();

  const getTaskArr = () => {
    let taskArr = [];
    for (let i = 0; i < subTaskCount; i++) {
      taskArr.push({ id: i });
    }
    return taskArr;
  };
  useEffect(() => {
    setTaskValues({
      ...taskValues,
      subTask: getTaskArr(),
    });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "subTask") {
      let subTaskKeeper = "";
      subTaskKeeper += value;
      const tempObj = taskValues.subTask.find((item) => item.id == e.target.id);

      if (tempObj) {
        const tempArr = taskValues.subTask.map((item) => {
          if (item.id === parseInt(e.target.id)) {
            return { ...item, title: subTaskKeeper, completed: false };
          } else {
            return item;
          }
        });
        setTaskValues({
          ...taskValues,
          subTask: tempArr,
        });
      }

      return;
    }
    setTaskValues({ ...taskValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, subTask, status } = taskValues;
    if (!title || !description || !status) {
      notifyUser("Please fill the form correctly")
    } else {
      let err = false;
      for (let i = 0; i < subTaskCount; i++) {
        if (!subTask[i].title) {
          err = true;
        }
      }
      if (err) {
        notifyUser("oops! there seems to be an error")
      } else {
        if (boards[boardIndex]) {
          const tempObj = { title, description, subtasks: subTask, status };

          addNewTask(tempObj);
          // getAllTask(boards[boardIndex]._id);
          setTaskValues({ ...initialState, subTask: getTaskArr() });
          closeCreatingModal();
        }
      }
    }
  };

  return (
    <Wrapper>
      <div className="content">
        <form className="form" onSubmit={handleSubmit}>
          <button
            type="button"
            className="close-btn"
            onClick={closeCreatingModal}
          >
            <FaTimes />
          </button>
          <h5>Add New Task</h5>
          <FormRow
            type="text"
            value={taskValues.title}
            handleChange={handleChange}
            name="title"
            className="form-row"
          />
          <div>
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={taskValues.description}
              onChange={handleChange}
              className="form-input form-textarea"
              placeholder="Enter task description"
            ></textarea>
          </div>

          <div>
            <label className="form-label">Subtasks</label>
            {taskValues.subTask.map((item) => {
              return (
                <input
                  type="text"
                  key={item.id}
                  id={item.id}
                  onChange={handleChange}
                  name="subTask"
                  placeholder="Enter subtask"
                  className="form-row form-input"
                />
              );
            })}
          </div>

          <button
            className="btn subtask-btn"
            type="button"
            onClick={() => {
              let newId = taskValues.subTask[taskValues.subTask.length - 1].id;
              newId++;
              const newTaskObj = { id: newId, completed: false };
              setTaskValues({
                ...taskValues,
                subTask: [...taskValues.subTask, newTaskObj],
              });
            }}
          >
            Add Subtask
          </button>

          <div>
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              className="form-input form-select"
              onChange={handleChange}
              name="status"
            >
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button type="submit" className="btn btn-white">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content {
    .subtask-btn {
      margin-bottom: 0.5rem;
    }
    .btn {
      display: block;
      width: 100%;
    }

    .btn-white {
      background: var(--white);
      color: var(--light-purple);
    }
    h5 {
      font-weight: bold;
      margin-bottom: 0.8rem;
    }
  }

  .form-textarea {
    height: 5rem;
  }
  select {
    background: var(--light-black-bcg);
  }
  #status {
    display: block;
  }
  .form {
    position: relative;
  }
  .form-select {
    background: var(--light-black-bcg);
    padding: 0.5rem;
    height: 2.8rem;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export default NewTaskForm;
