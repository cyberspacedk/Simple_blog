import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
  background-color: #b4273e;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 90px);
  h1 {
    font-size: 3rem;
  }
`;

const Error = () => {
  return (
    <ErrorMessage>
      <h1>Oops , smth went wrong</h1>
    </ErrorMessage>
  );
};

export default Error;
