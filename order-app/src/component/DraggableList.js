import React, { Children, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CustomAccordion from "./CustomAccordion";
import Toggle from "./toggle";

const DraggableList = ({ children, onDragEnd, state, setState }) => {
  const Component = <CustomAccordion></CustomAccordion>;
  // const [state, setState] = useState(null);

  // const onDragEnd = (result) => {
  //   if (!result.destination) {
  //     return;
  //   }
  //   const originData = [...state];
  //   const [reorderedData] = originData.splice(result.source.index, 1);
  //   originData.splice(result.destination.index, 0, reorderedData);
  //   setState(originData);
  //   console.log(originData);
  // };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="top-container">
        {(provided) => (
          <div
            className="top-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="name-container">
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
                      <div>{children}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;

export const NestedDnd = ({ children, state, setState }) => {
  return (
    <DraggableList state={state} setState={setState}>
      <CustomAccordion state={state} setState={setState}>
        <DraggableList state={state} setState={setState}>
          <CustomAccordion state={state} setState={setState}></CustomAccordion>
        </DraggableList>
      </CustomAccordion>
    </DraggableList>
  );
};
