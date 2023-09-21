import React from "react";
import styled from "styled-components";
import { BigSidebar, Navbar, Tasks, Modal } from "../../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Modal />
        <div className="sidebar">
          <BigSidebar />
        </div>

        <div className="navbar">
          <Navbar />
        </div>
        <div className="tasks">
          <Tasks />
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dashboard {
    position: relative;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: 300px 1fr 1fr;
      grid-template-rows: repeat(1, 1fr);
      .navbar {
        height: 500px;
        grid-row: 1/-1;
        grid-column: 2/-1;
      }
      .tasks {
        grid-column: 2/-1;
        grid-row: 1/-1;
      }
    }
  }
`;
export default SharedLayout;
