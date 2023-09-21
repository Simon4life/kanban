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
      className={isModalOpen ? "modal-container show-modal" : "modal-container"}
    >
      {isCreating ? (
        <NewTaskForm />
      ) : isEditing ? (
        <SingleTask {...editVal} />
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Modal;
