import React, { useState } from "react";
import { BsListTask } from "react-icons/bs";
import styled from "styled-components";
import { useBoardContext } from "../context/board_context";
import { Loading, SmallLoading } from "./Loading";
const Board = () => {
  const { boards, boardIndex, updateBoardIndex, isBoardLoading } =
    useBoardContext();

  if (isBoardLoading) {
      return (
        <div>
          <SmallLoading />
        </div>
      );
  }

  return (
    <Wrapper>
      <div className="nav-links">
        <p>ALL BOARDS ({boards.length})</p>
        {boards.map((item, index) => {
          return (
            <button
              onClick={() => updateBoardIndex(index)}
              className={boardIndex === index ? "nav-link active" : "nav-link"}
              key={index}
            >
              <BsListTask className="icon" /> {item.boardTitle}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav-links {
    padding-top: 0.8rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-200);
    padding: 0.5rem 0;
    padding-left: 2.5rem;
    text-transform: capitalize;
    transition: var(--transition);
    border-radius: 0px 30px 30px 0;
    width: 280px;
    margin-bottom: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: bolder;
    font-size: 1.2rem;
  }
  .nav-link:hover {
    padding-left: 3rem;
    background-color: var(--dark-black-bcg);
  }
  .icon {
    font-size: 2rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    color: var(--white);
    transition: var(--transition);
    font-weight: bold;
  }

  .active {
    background: var(--light-purple);
    color: white;
  }
`;

export default Board;
