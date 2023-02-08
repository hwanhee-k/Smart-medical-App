import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CustomAccordion from "./CustomAccordion";

export default function Toggle({ items, state, setState, children }) {
  console.log("state", state);
  return (
    <div>
      {/* map도 변수화 */}
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
              <CustomAccordion id={id} name={name} content={content}>
                {/* content맵 들어갈자리 */}
              </CustomAccordion>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}
