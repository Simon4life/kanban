import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
};

const SmallLoading = () => {
  return (
    <Wrapper>
      <div className="loading loading-small"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loading {
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 4px solid rgb(201, 199, 199);
    border-top-color: transparent;
    animation: spinner 0.6s linear infinite;
  }
  .loading-small {
    width: 2rem;
    height: 2rem;
    margin-top: 3rem;
  }
`;

export { Loading, SmallLoading };
