import React from "react";
import styled from "styled-components";

const BlogHeader = styled.header`
  padding: 20px;
  font-size: 2rem;
  text-align: center;
  background-color: #000;
  color: #fff;
  box-shadow: 0px 4px 9px 0px #6b6b6b;
`;

const Header = () => {
  return <BlogHeader>Simple blog</BlogHeader>;
};

export default Header;
