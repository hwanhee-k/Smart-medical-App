import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = ({ children, setNestedState, index, nestedState }) => {
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
