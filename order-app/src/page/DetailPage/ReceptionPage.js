import React from "react";
import Write from "../../component/Write";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ReceptionPage = () => {
  const { content, name } = useParams();

  return (
    <>
      <Container>
        {name}님의 {content} 페이지
      </Container>
      <Write />
    </>
  );
};

export default ReceptionPage;

const Container = styled.div`
  padding-bottom: 10%;
  background-color: aliceblue;
  font-size: larger;
`;
