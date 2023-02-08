import React, { Children, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DraggableList = ({
  children,
  onDragEnd,
  nestedState,
  setNestedState,
  level,
  contents,
}) => {
  if(level === "level2"){
    nestedState = contents
  } else if (level === "level3"){
    nestedState = contents
  }

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
              {nestedState?.map((depthNameEach, index) => (
                <Draggable
                  draggableId={index.toString()}
                  key={index.toString()}
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
                          React.cloneElement(child, {
                            index,
                            propsData:
                              level === "level1"
                                ? {
                                    id: depthNameEach.id,
                                    name: depthNameEach.name,
                                    contents: depthNameEach.contents,
                                  }
                                : level === "level2" ? {name: depthNameEach.name, todo: depthNameEach.todo}
                                : {todo: depthNameEach}

                                
                          })
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
