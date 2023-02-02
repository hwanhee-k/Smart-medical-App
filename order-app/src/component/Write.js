import React, { useState } from "react";
import styled from "styled-components";

const Write = () => {
  const [textState, setTextState] = useState("");
  const [writeState, setWriteState] = useState("");

  const handleSubmit = (e) => {
    alert(`${textState} 작성완료!`);
    e.preventDefault();
    setWriteState(textState);
    setTextState("");
  };
  const handleChange = (e) => {
    setTextState(e.target.value);
  };

  return (
    <>
      <ContainerForm onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={textState}
          onChange={handleChange}
          placeholder="메모를 작성해주세요"
        ></TextInput>
        <BtnInput type="submit" value="작성"></BtnInput>
        <div>메모사항</div>
        <TextDiv>{writeState}</TextDiv>
        <BtnInput
          onClick={() => {
            setWriteState("");
          }}
          type="button"
          value="삭제"
        ></BtnInput>
      </ContainerForm>
    </>
  );
};

export default Write;

const ContainerForm = styled.form`
  width: 100%;
  height: 70vh;
  display: flex;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const TextInput = styled.input`
  width: 80%;
  height: 20%;
  font-size: large;
`;

const BtnInput = styled.input`
  margin: 2%;
`;

const TextDiv = styled.div`
  width: 80%;
  height: 10%;
  background-color: white;
  border: 1px solid gray;
`;
