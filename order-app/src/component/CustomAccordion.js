import React, { Children, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

const CustomAccordion = ({ children, level, propsData }) => {
  const [textState, setTextState] = useState("");
  const [writeState, setWriteState] = useState("기록중인 메세지");
  const [isUpdate, setIsUpdate] = useState(false);

  const handleSubmit = (e) => {
    alert(`${textState} 작성완료!`);
    e.preventDefault();
    setWriteState(textState);
    setTextState("");
    setIsUpdate(!isUpdate);
  };
  const handleChange = (e) => {
    setTextState(e.target.value);
  };

  let text = "";
  let contents = [];
  let id;
  if (level === "level1") {
    text = propsData.name;
    contents = propsData.contents;
    id = propsData.id;
  } else if (level === "level2") {
    text = propsData.orderName;
    contents = propsData.todo;
    id = propsData.id;
  } else if (level === "level3") {
    text = propsData.todo;
    id = propsData.id;
  }
  return (
    <AccordionContainer>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content1"
        id="panel1a-header1"
      >
        <StyledTypography>{text}</StyledTypography>
        {level === "level2" && (
          <Container>
            {isUpdate && (
              <Form onSubmit={handleSubmit}>
                <TextInput
                  type="text"
                  value={textState}
                  onChange={handleChange}
                  placeholder="메모를 작성해주세요"
                ></TextInput>
                <Button type="submit">작성</Button>
              </Form>
            )}
            <TextDivWrapper>
              <TextDiv>{writeState}</TextDiv>
              <UpdateButton
                onClick={() => {
                  setIsUpdate(!isUpdate);
                }}
              >
                수정
              </UpdateButton>
              <DeleteButton
                onClick={() => {
                  setWriteState("");
                }}
              >
                삭제
              </DeleteButton>
            </TextDivWrapper>
          </Container>
        )}
        {level === "level3" && (
          <Container>
            {isUpdate && (
              <Form onSubmit={handleSubmit}>
                <TextInput
                  type="text"
                  value={textState}
                  onChange={handleChange}
                  placeholder="메모를 작성해주세요"
                ></TextInput>
                <Button type="submit">작성</Button>
              </Form>
            )}
            <TextDivWrapper>
              <TextDiv>{writeState}</TextDiv>
              <UpdateButton
                onClick={() => {
                  setIsUpdate(!isUpdate);
                }}
              >
                수정
              </UpdateButton>
              <DeleteButton
                onClick={() => {
                  setWriteState("");
                }}
              >
                삭제
              </DeleteButton>
            </TextDivWrapper>
          </Container>
        )}
      </AccordionSummary>
      {Children.map(children, (child) =>
        React.cloneElement(child, {
          contents,
          id,
          orderName: propsData.orderName,
        })
      )}
    </AccordionContainer>
  );
};

export default CustomAccordion;

const AccordionContainer = styled(Accordion)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  width: 20%;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5%;
`;

const Form = styled.form`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.input`
  width: 80%;
  height: 10%;
  font-size: 1rem;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid gray;
  outline: none;
`;

const Button = styled.button`
  min-width: 5%;
  min-height: 25px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #0069d9;
  }
`;

const TextDivWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`;

const TextDiv = styled.div`
  width: 80%;
  height: 10%;
  min-height: 25px;
  background-color: white;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 5px;
`;

const UpdateButton = styled.button`
  background-color: #007bff;
  color: white;
  min-width: 10%;
  min-height: 25px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  min-width: 10%;
  min-height: 25px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;
