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
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={textState}
          onChange={handleChange}
          placeholder="메모를 작성해주세요"
        ></TextInput>
        <Button type="submit">작성</Button>
      </Form>
      <TextDivWrapper>
        <Title>메모사항</Title>
        <TextDiv>{writeState}</TextDiv>
        <DeleteButton
          onClick={() => {
            setWriteState("");
          }}
        >
          삭제
        </DeleteButton>
      </TextDivWrapper>
    </Container>
  );
};

export default Write;
const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  outline: none;
`;

const Button = styled.button`
  width: 80px;
  height: 50px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #0069d9;
  }
`;

const TextDivWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const TextDiv = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  border: 1px solid gray;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;
