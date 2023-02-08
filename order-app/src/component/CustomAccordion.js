import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DraggableList from "./DraggableList";
import Toggle from "./toggle";

const CustomAccordion = ({ state, setState, children, depthNameEach }) => {
  console.log(depthNameEach);
  return (
    <Toggle state={state} setState={setState}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content1"
          id="panel1a-header1"
        >
          <Typography>{depthNameEach}</Typography>
        </AccordionSummary>
      </Accordion>
    </Toggle>
  );
};

export default CustomAccordion;
