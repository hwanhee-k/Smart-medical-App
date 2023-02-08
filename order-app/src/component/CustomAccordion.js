import React, { Children, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = ({ children, setNestedState, id, text,contents }) => {
  console.log(id,text,contents);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content1"
        id="panel1a-header1"
      >
        <Typography>{text}</Typography>
      </AccordionSummary>
      {Children.map(children, (child) =>
        React.cloneElement(child, { contents, id, text })
      )}
    </Accordion>      
  );
};

export default CustomAccordion;
