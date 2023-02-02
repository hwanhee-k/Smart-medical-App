import React, { useState } from "react";
import styled from "styled-components";

const Write = () => {
  const [textState, setTextState] = useState("");

  const handleSubmit = (e) => {
    alert(`${textState} 작성완료!`);
  };
  const handleChange = (e) => {
    setTextState(e.target.value);
    e.preventDefault();
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={textState}
        onChange={handleChange}
      ></TextInput>
      <BtnInput type="submit" value="작성"></BtnInput>
    </ContainerForm>
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
  height: 50%;
  font-size: x-large;
`;

const BtnInput = styled.input`
  margin: 2%;
`;
