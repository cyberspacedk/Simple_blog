import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postCreate } from '../../Helpers/Helpers';
import { createModeActionFinish } from '.././../Redux/Actions/createModeAction';
import styled from 'styled-components';

const Forma = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 11;
  max-width: 750px;
  width: 600px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  input,
  textarea {
    padding: 10px;
    border-bottom: 2px solid #000;
  }
  span {
    position: absolute;
    top: -13px;
    right: -10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-size: 2rem;
    transform: rotate(45deg);
    box-shadow: 0 0 2px #ccc;
  }
  span:hover {
    cursor: pointer;
  }
`;
const CreateBtn = styled.button`
  padding: 10px;
  background: #000;
  color: #fff;
  margin-top: 50px;
`;

const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const NewPostForm = ({ doneCreate }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <>
      <Forma
        onSubmit={e => {
          e.preventDefault();
          postCreate(title, body);
          doneCreate();
        }}
      >
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <label htmlFor="descr">Post Description</label>
        <textarea
          id="descr"
          required
          value={body}
          onChange={({ target }) => setBody(target.value)}
        />
        <CreateBtn>Create a new post</CreateBtn>
        <span onClick={() => doneCreate()}>+</span>
      </Forma>
      <Backdrop onClick={() => doneCreate()} />
    </>
  );
};

const mdtp = dispatch => ({
  doneCreate: () => dispatch(createModeActionFinish()),
});
export default connect(
  null,
  mdtp,
)(NewPostForm);
