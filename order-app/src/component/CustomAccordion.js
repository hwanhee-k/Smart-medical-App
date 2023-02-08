import React, { Children } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = ({ children, level, setNestedState, propsData }) => {
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
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content1"
        id="panel1a-header1"
      >
        <Typography>{text}</Typography>
      </AccordionSummary>
      {Children.map(children, (child) =>
        React.cloneElement(child, { contents, id, orderName: propsData.orderName })
      )}
    </Accordion>
  );
};

export default CustomAccordion;
