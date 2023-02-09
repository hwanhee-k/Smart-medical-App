import React, { useState } from "react";
import CustomAccordion from "./CustomAccordion";

import DraggableList from "./DraggableList";

const NestedDndMain = () => {
  const CONTENTS = [
    { name: "접수대", todo: ["Todo1", "Todo2", "Todo3", "Todo4"] },
    { name: "진료실", todo: ["Todo1", "Todo2", "Todo3", "Todo4"] },
    { name: "진료실 앞 안내", todo: ["Todo1", "Todo2", "Todo3", "Todo4"] },
    { name: "수납", todo: ["Todo1", "Todo2", "Todo3", "Todo4"] },
  ];
  const DATA = [
    { id: 1, name: "박세창", contents: CONTENTS },
    { id: 2, name: "신어진", contents: CONTENTS },
    { id: 3, name: "홍대기", contents: CONTENTS },
    { id: 4, name: "강성율", contents: CONTENTS },
  ];

  const [nestedState, setNestedState] = useState(DATA);

  const getNextId = () => {
    const ids = nestedState.map((item) => item.id);
    return Math.max(...ids) + 1;
  };
  const getNextName = () => {
    return `추가된 환자${nestedState.length - 3}`;
  };

  const addPatient = () => {
    setNestedState([
      ...nestedState,
      {
        id: getNextId(),
        name: getNextName(),
        contents: CONTENTS,
      },
    ]);
  };

  const createReorderedData = (arr, start_idx, end_idx) => {
    const newData = [...arr];
    const [reorderedData] = newData.splice(start_idx, 1);
    newData.splice(end_idx, 0, reorderedData);
    return newData;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.draggableId.split("_").length === 1) {
      const newData = createReorderedData(
        nestedState,
        result.source.index,
        result.destination.index
      );
  
      setNestedState(newData);
    }

    if (result.draggableId.split("_").length === 2) {
      const targetPatientId = result.draggableId.split("_")[1];
      setNestedState(
        nestedState.map((item) => {
          if (item.id.toString() === targetPatientId.toString()) {
            const newData = createReorderedData(
              item.contents,
              result.source.index,
              result.destination.index
            );
            return { ...item, contents: [...newData] };
          } else {
            return item;
          }
        })
      );
    }
    if (result.draggableId.split("_").length === 3) {
      const targetPatientId = result.draggableId.split("_")[1];
      const targetOrderName = result.draggableId.split("_")[2];
      setNestedState(
        nestedState.map((item) => {
          if (item.id.toString() === targetPatientId.toString()) {
            let contents = item.contents.map((content) => {
              if (content.name === targetOrderName) {
                const newData = createReorderedData(
                  content.todo,
                  result.source.index,
                  result.destination.index
                );
                return { ...content, todo: newData };
              } else {
                return content;
              }
            });
            return { ...item, contents };
          } else {
            return item;
          }
        })
      );
    }
  };
  return (
    <>
      <button onClick={addPatient}>환자추가</button>
      <DraggableList
        level="level1"
        nestedState={nestedState}
        onDragEnd={onDragEnd}
      >
        <CustomAccordion
          level="level1"
          onDragEnd={onDragEnd}
        >
          <DraggableList
            level="level2"
            onDragEnd={onDragEnd}
          >
            <CustomAccordion
              level="level2"
              onDragEnd={onDragEnd}
            >
              <DraggableList
                level="level3"
                onDragEnd={onDragEnd}
              >
                <CustomAccordion
                  level="level3"
                  onDragEnd={onDragEnd}
                />
              </DraggableList>
            </CustomAccordion>
          </DraggableList>
        </CustomAccordion>
      </DraggableList>
    </>
  );
};

export default NestedDndMain;
