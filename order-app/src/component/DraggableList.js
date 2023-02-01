import React, { Children, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Toggle from "./toggle";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import styled from "styled-components";

const DraggableList = ({ items }) => {
  const [state, setState] = useState([]);

  // Array를 setState 하기 위한 함수
  const createReorderedData = (arr, start_idx, end_idx) => {
    const originData = [...arr];
    const [reorderedData] = originData.splice(start_idx, 1);
    originData.splice(end_idx, 0, reorderedData);
    return originData
    }

  // 환자 리스트 드래그 시 
  const onDragEndPeople = (result) => {
    if (!result.destination) {
      return;
    }

    const originData = createReorderedData(
      state,
      result.source.index,
      result.destination.index);
    setState(originData);

  };
  // reception order 드래그 시
  const onDragEndReceptionOrder = (result) => {
    if (!result.destination) {
      return;
    }
    const target_id = result.draggableId.split("_")[0]

    setState(state.map(item => {
      if(item.id === target_id){
        const originData = createReorderedData(
          item.content,
          result.source.index,
          result.destination.index
        );
        return {...item, content: [...originData]}
      } else {
        return item;
      }
    }))
  };


  useEffect(() => {
    setState(items);
  }, []);



  return (
    //todo: component 분리하기
    <DragDropContext onDragEnd={onDragEndPeople}>
      <Droppable droppableId="top-container">
        {(provided) => (
          <div
            className="top-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="name-container">
              {state.map(({ id, name, content }, index) => (
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
                        <DragDropContext onDragEnd={onDragEndReceptionOrder}>
                          <Droppable droppableId="top-container">
                            {(provided) => (
                              <div
                                className="top-container"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                              >
                                <div className="name-container">
                                  {state.filter(item => item.id === id)[0].content?.map((content_name, idx) => (
                                    <Draggable
                                      draggableId={`${id}_${idx}`}
                                      key={idx}
                                      index={idx}
                                    >
                                      {(provided) => (
                                        <div
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          ref={provided.innerRef}
                                          key={idx}
                                          className="name"
                                        >
                                          <DragContentContainer>
                                            <span>{content[idx]}</span>
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
