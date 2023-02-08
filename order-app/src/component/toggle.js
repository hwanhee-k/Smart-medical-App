import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CustomAccordion from "./CustomAccordion";

export default function Toggle({ state, setState, children }) {
  return (
    <div>
      {/* map도 변수화 */}
      {state?.map((depthNameEach, index) => (
        <Draggable
          draggableId={depthNameEach + index}
          key={depthNameEach + index}
          index={index}
        >
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              key={depthNameEach + index}
              className="name"
            >
              {/* <CustomAccordion ></CustomAccordion> */}
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}
