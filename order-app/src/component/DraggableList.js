import React, { Children, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CustomAccordion from "./CustomAccordion";
import Toggle from "./toggle";

const DraggableList = ({ children, onDragEnd, state, setState }) => {
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
                      <div>
                        {Children.map(children, (child) =>
                          React.cloneElement(child, { index })
                        )}
                      </div>
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
