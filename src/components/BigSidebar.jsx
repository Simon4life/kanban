import React, { useEffect } from "react";
import Board from "./Board";
import styled from "styled-components";
import AddNewBoardForm from "./AddNewBoardForm";
import { useQuery } from "@tanstack/react-query";
import { useBoardContext } from "../context/board_context";

const BigSidebar = () => {
  const { boards, getBoards } = useBoardContext();
  const { isLoading, error } = useQuery({
    queryKey: ["boards"],
    queryFn: getBoards,
  });

  if(isLoading) {
    return <h2>Loading</h2>
  }
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div>
          <header>
            <h2>Kanban</h2>
          </header>
          <div className="board-container">
            <Board boards={boards} />
          </div>

          <AddNewBoardForm />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;
  height: 50vh;
  @media (min-width: 992px) {
    display: block;

    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--light-black-bcg);
      height: 100%;
      width: 300px;
      transition: var(--transition);
      position: fixed;
      top: 0;
      .board-container {
        height: 420px;
        // overflow-y: scroll;
      }
      .board-container::-webkit-scrollbar {
        width: 8px;
      }
      .board-container::-webkit-scrollbar-thumb {
        background: var(--grey-200);
      }
    }
    header {
      height: 5rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    p {
      font-weight: bold;
      letter-spacing: 1px;
      margin-left: 1.7rem;
    }
  }
  .sidebar-form {
    width: 50px;
  }
`;

export default BigSidebar;
