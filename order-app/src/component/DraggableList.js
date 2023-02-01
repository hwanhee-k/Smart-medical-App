import React, { Children, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Toggle from "./toggle";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import styled from "styled-components";

const DraggableList = ({ items }) => {
  const [state, setState] = useState(null);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const originData = [...state];
    const [reorderedData] = originData.splice(result.source.index, 1);
    originData.splice(result.destination.index, 0, reorderedData);
    setState(originData);
  };

  useEffect(() => {
    setState(items);
  }, []);

  return (
    //todo: component 분리하기
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="top-container">
        {(provided) => (
          <div
            className="top-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="name-container">
              {items.map(({ id, name, content }, index) => (
                <Draggable draggableId={id} key={id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      key={id}
                      className="name"
                    >
                      <Toggle name={name} content={content} id={id}>
                        <DragDropContext onDragEnd={onDragEnd}>
                          <Droppable droppableId="top-container">
                            {(provided) => (
                              <div
                                className="top-container"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                              >
                                <div className="name-container">
                                  {items.map(({ id, name, content }, index) => (
                                    <Draggable
                                      draggableId={id}
                                      key={id}
                                      index={index}
                                    >
                                      {(provided) => (
                                        <div
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          ref={provided.innerRef}
                                          key={id}
                                          className="name"
                                        >
                                          <DragContentContainer>
                                            <span>{content[index]}</span>
                                            <DragHandleIconSpan>
                                              <DragHandleIcon />
                                            </DragHandleIconSpan>
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
                      </Toggle>
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
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;

const DragHandleIconSpan = styled.span`
  vertical-align: middle;
`;
