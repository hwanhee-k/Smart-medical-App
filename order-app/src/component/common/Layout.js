import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { Toolbar } from "@mui/material";
import { useSlotProps } from "@mui/base";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Toolbar />
      <ContentContainer>
        <main>{props.children}</main>
      </ContentContainer>
    </div>
  );
};

export default Layout;
const ContentContainer = styled.div`
  border: 1px solid brown;
  background-color: azure;
`;
