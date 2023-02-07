import React, { Children, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Toggle from "./toggle";
import { RECEPTION_ORDER_LIST,items } from "./items";



const DraggableList = ({children}) => {
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
    console.log(items);
  }, []);

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
                      {children}
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
