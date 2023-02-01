import * as React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";

function Test() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <TestDiv>dd</TestDiv>
    </Box>
  );
}

export default Test;

const TestDiv = styled.div`
  background-color: aliceblue;
`;
