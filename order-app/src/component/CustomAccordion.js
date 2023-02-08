import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DraggableList from "./DraggableList";
import Toggle from "./toggle";

const CustomAccordion = ({ children, nestedState, setNestedState, index }) => {
  console.log(nestedState);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content1"
        id="panel1a-header1"
      >
        <Typography>{nestedState[index]}</Typography>
      </AccordionSummary>
      {children}
    </Accordion>
  );
};

export default CustomAccordion;
