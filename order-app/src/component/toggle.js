import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CustomAccordion from "./CustomAccordion";

export default function Toggle({ items, state, setState }) {
  console.log("state", state);
  return (
    <div>
      {state?.map(({ id, name, content }, index) => (
        <Draggable draggableId={id} key={id} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              key={id}
              className="name"
            >
              <CustomAccordion />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}
