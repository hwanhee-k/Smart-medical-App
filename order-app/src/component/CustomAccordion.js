import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DraggableList from "./DraggableList";
import Toggle from "./toggle";

const CustomAccordion = ({ children, state, setState }) => {
  console.log(state);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content1"
        id="panel1a-header1"
      >
        <Typography>{state}</Typography>
      </AccordionSummary>
      {children}
    </Accordion>
  );
};

export default CustomAccordion;
