import React from 'react';
import { connect } from 'react-redux';
import { createModeActionStart } from '../../Redux/Actions/createModeAction';
import NewPostForm from '../NewPostForm/NewPostForm';
import styled from 'styled-components';
import icon from '../../assets/create.jpg';

const CallCreate = styled.button`
  width: 60px;
  position: fixed;
  top: 15vh;
  right: 0px;
  transition: all 0.3s;
  img {
    max-width: 100%;
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: all 0.3s;
  }
`;

const NewPost = ({ isCreate, letsCreate }) => {
  return (
    <>
      {isCreate && <NewPostForm />}
      <CallCreate onClick={() => letsCreate()}>
        <img src={icon} alt="Create Post" />
      </CallCreate>
    </>
  );
};
const mstp = ({ isCreate }) => ({
  isCreate,
});
const mdtp = dispatch => ({
  letsCreate: () => dispatch(createModeActionStart()),
});
export default connect(
  mstp,
  mdtp,
)(NewPost);
