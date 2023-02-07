import React, { Children, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Toggle from "./toggle";

// const RECEPTION_ORDER_LIST = ["접수대", "진료실", "진료실 앞 안내", "수납"];
// const items = [
//   { id: "1", name: "박세창", content: RECEPTION_ORDER_LIST },
//   { id: "2", name: "신어진", content: RECEPTION_ORDER_LIST },
//   { id: "3", name: "홍대기", content: RECEPTION_ORDER_LIST },
//   { id: "4", name: "강성율", content: RECEPTION_ORDER_LIST },
// ];

const DraggableList = ({items}) => {
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
                      <Toggle name={name} content={content} id={id}>
                        {content.map((con,index)=>(
                          <div>{con}</div>
                        ))}
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
