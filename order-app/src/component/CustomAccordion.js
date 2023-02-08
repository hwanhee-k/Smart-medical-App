import React, { Children, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = ({ children,level, setNestedState, propsData }) => {
  console.log(propsData)
  let text = ""
  let contents = []
 if(level === "level1") {
  text = propsData.name
  contents = propsData.contents
 } else if (level === "level2"){
  text = propsData.name
  contents = propsData.todo
 } else if(level === "level3"){
  text = propsData.todo
 }
console.log(contents)
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
        React.cloneElement(child, {contents})
      )}
    </Accordion>      
  );
};

export default CustomAccordion;
