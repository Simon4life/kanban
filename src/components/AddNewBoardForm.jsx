import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useBoardContext } from "../context/board_context";

const AddNewBoardForm = () => {
  const { addNewBoard, notifyUser } = useBoardContext();
  const [boardTitle, setBoardTitle] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = () => {
    if (!boardTitle) return;
    const boardVal = { boardTitle };
    addNewBoard(boardVal);
    setBoardTitle("");
  };
  
  return (
    <Wrapper>
      <form className="form" onSubmit={(e) => {
          e.preventDefault();
          if (boardTitle === "") {
            setIsCreating(!isCreating);
            return;
          }
          handleSubmit();
          
          setIsCreating(false);
          
        }}>
        {isCreating && (
          <input
            type="text"
            className="form-input"
            onChange={(e) => setBoardTitle(e.target.value)}
          />
        )}
        <button
          className="btn"
          type="submit"
        >
          Create New Board
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 280px;
    background: transparent;
    box-shadow: none;
    padding: 0;
    margin-top: 1rem;
  }

  .form-input {
    width: 230px;
    display: block;
    margin-bottom: 1rem;
  }
  .btn {
    background: transparent;
    color: var(--light-purple);
    font-weight: bold;
    display: block;
    width: 270px;
    box-shadow: none;
    font-size: 1.3rem;
    border-radius: 20px;
  }
  .btn:hover {
    background: var(--white);
  }
`;
export default AddNewBoardForm;
