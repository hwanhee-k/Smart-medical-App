import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content1"
                  id="panel1a-header1"
                >
                  <Typography>{name}</Typography>
                </AccordionSummary>
              </Accordion>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}
