import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

export default function Toggle({ name, content, id, children }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>{name}</div>
        </AccordionSummary>
        <AccordionDetailsDiv name={name} content={content} id={id}>
          {children}
        </AccordionDetailsDiv>
      </Accordion>
    </div>
  );
}

const AccordionDetailsDiv = styled(AccordionDetails)`
  display: flex;
  text-align: left;
  background-color: #eee;
`;
