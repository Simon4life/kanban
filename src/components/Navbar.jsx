import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddNewBoardForm from "./AddNewBoardForm"
import { GoPlus } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { useBoardContext } from "../context/board_context";
import { removeUserFromLocalStorage } from "../utils/localStorage";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { openCreatingModal, boards, boardIndex, updateBoardIndex } =
    useBoardContext();
    
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");

  useEffect(() => {
    if (boards[boardIndex]) {
      setBoardTitle(boards[boardIndex].boardTitle);
    }
  }, [boards, boardIndex]);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  }, [screenSize]);

  return (
    <Wrapper>
      <div className="nav-center">
        <div>
          {screenSize < 992 ? (
            <div className="btn-container">
              <button
                className="btn dropdown-btn"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                {boardTitle}
                <FaCaretDown className="dropdown-icon" />
              </button>
              <div
                className={showDropdown ? "dropdown show-dropdown" : "dropdown"}
              >
                {boards.map((item, index) => (
                  <button
                    className="btn board-btn"
                    onClick={(e) => {
                      e.target.parentElement.classList.remove("show-dropdown");
                      updateBoardIndex(index);
                    }}
                  >
                    {item.boardTitle}
                  </button>
                ))}
                <AddNewBoardForm/>
              </div>
            </div>
          ) : (
            <h2>{boardTitle}</h2>
          )}
        </div>

        <div className="nav-btn-container">
          <button className="btn add-task-btn" onClick={openCreatingModal}>
            <GoPlus className="plus-icon" />
            {screenSize < 992 ? null : "Add new task"}
          </button>
          <Link
            to="/landing"
            className="btn logout-btn"
            onClick={removeUserFromLocalStorage}
          >
            Logout
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .board-btn {
    display: block;
    background: transparent;
    margin-bottom: 0.3rem;
    box-shadow: none;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--light-black-bcg);
  .btn-container {
    position: relative;
  }
  .add-task-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.4rem;
    position: relative;
    padding: 0.5rem;
    border-radius: 20rem;
    font-size: 1.3rem;
    box-shadow: var(--shadow-2);
    margin-right: 1rem;
  }
  .plus-icon {
    font-size: 1.5rem;
    display: inline-block;
  }
  .nav-btn-container {
    display: flex;
    align-items: center;
  }

  .dropdown {
    position: absolute;
    top: 60px;
    left: 0;
    width: 300px;
    background: var(--light-black-bcg);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    overflow: hidden;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  dropdown-btn {
    background: transparent;
  }
  .show-dropdown {
    visibility: visible;
    height: auto;
  }
  .show-dropdown p {
    position: relative;
  }
  .dropdown-btn {
    background: transparent;
    box-shadow: none;
    color: var(--white);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .dropdown-icon {
    color: var(--light-purple);
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .toggle-btn {
      display: none;
    }
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;

export default Navbar;
