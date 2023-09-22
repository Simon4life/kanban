import React from "react";
import styled from "styled-components";
import { useBoardContext } from "../context/board_context";
import NewTaskForm from "./NewTaskForm";
import SingleTask from "./SingleTask";

const Modal = () => {
  const { isModalOpen } = useBoardContext();
  const { isEditing, isCreating, editVal } = useBoardContext();
  return (
    <Wrapper
      
    >
      <div className={isModalOpen ? "modal-container show-modal" : "modal-container"}>
        {isCreating ? (
          <NewTaskForm />
        ) : isEditing ? (
          <SingleTask {...editVal} />
        ) : null}
      </div>
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
.modal-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.473);
  z-index: -999;
  display: flex;
  justify-content: center;
  place-items: center;
  visibility: hidden;
  height: 100vh;
}
.show-modal {
  z-index: 1000;
  visibility: visible;
}

.close-btn {
  position: absolute;
  right: 15px;
  top: 15px;
}

.close-btn {
  border: none;
  background: transparent;
  font-size: 2rem;
  font-weight: bold;
  color: var(--grey-200);
  cursor: pointer;
}

.close-btn:hover {
  color: var(--white);
}`;

export default Modal;
