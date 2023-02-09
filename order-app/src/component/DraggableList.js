import React, { Children } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const DraggableList = ({
  children,
  onDragEnd,
  nestedState,
  level,
  contents,
  id,
  orderName,
}) => {
  if (level === "level2") {
    nestedState = contents;
  } else if (level === "level3") {
    nestedState = contents;
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
                  draggableId={
                    level === "level1"
                      ? index.toString()
                      : level === "level2"
                      ? `${index.toString()}_${id}`
                      : `${index.toString()}_${id}_${orderName}`
                  }
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
                      <DragContentContainer>
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
                                : level === "level2"
                                ? {
                                    id,
                                    orderName: depthNameEach.name,
                                    todo: depthNameEach.todo,
                                  }
                                : {
                                    todo: depthNameEach,
                                    id,
                                    orderName: orderName,
                                  },
                          })
                        )}
                      </DragContentContainer>
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

const DragContentContainer = styled.div`
  width: 100vw;
  display: flex;
`;
