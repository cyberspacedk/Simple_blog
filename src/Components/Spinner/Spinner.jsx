import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const Plane = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => (
  <Plane>
    <Loader type="Plane" color="#00BFFF" height="100" width="100" />
  </Plane>
);

export default Spinner;
