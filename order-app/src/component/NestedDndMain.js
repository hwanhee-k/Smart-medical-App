import React, { useState } from "react";
import CustomAccordion from "./CustomAccordion";

import DraggableList from "./DraggableList";

const NestedDndMain = ({ children }) => {
  const CONTENTS = [
    { name: "접수대", todo: ["Todo1", "Todo1", "Todo1", "Todo1"] },
    { name: "진료실", todo: ["Todo1", "Todo1", "Todo1", "Todo1"] },
    { name: "진료실 앞 안내", todo: ["Todo1", "Todo1", "Todo1", "Todo1"] },
    { name: "수납", todo: ["Todo1", "Todo1", "Todo1", "Todo1"] },
  ];
  const DATA = [
    { id: 1, name: "박세창", contents: CONTENTS },
    { id: 2, name: "신어진", contents: CONTENTS },
    { id: 3, name: "홍대기", contents: CONTENTS },
    { id: 4, name: "강성율", contents: CONTENTS },
  ];

  const [nestedState, setNestedState] = useState(DATA);
  const [currentId, setCurrentId] = useState(5);
  const [currentNameCount, setCurrentNameCount] = useState(1);

  const getNextId = () => {
    setCurrentId(currentId + 1);
    return currentId;
  };
  const getNextName = () => {
    setCurrentNameCount(currentNameCount + 1);
    return `추가된 환자${currentNameCount}`;
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
    const originData = [...arr];
    const [reorderedData] = originData.splice(start_idx, 1);
    originData.splice(end_idx, 0, reorderedData);
    return originData;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.draggableId.split("_").length === 1) {
      const originData = [...nestedState];
      const [reorderedData] = originData.splice(result.source.index, 1);
      originData.splice(result.destination.index, 0, reorderedData);
      setNestedState(originData);
    }

    if (result.draggableId.split("_").length === 2) {
      const targetPatientId = result.draggableId.split("_")[1];
      setNestedState(
        nestedState.map((item) => {
          if (item.id.toString() === targetPatientId.toString()) {
            const originData = createReorderedData(
              item.contents,
              result.source.index,
              result.destination.index
            );
            return { ...item, contents: [...originData] };
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
                const originData = createReorderedData(
                  content.todo,
                  result.source.index,
                  result.destination.index
                );
                return { ...content, todo: originData };
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
        setNestedState={setNestedState}
        onDragE
        nd={onDragEnd}
      >
        <CustomAccordion
          level="level1"
          setNestedState={setNestedState}
          onDragEnd={onDragEnd}
        >
          <DraggableList
            level="level2"
            setNestedState={setNestedState}
            onDragEnd={onDragEnd}
          >
            <CustomAccordion
              level="level2"
              setNestedState={setNestedState}
              onDragEnd={onDragEnd}
            >
              <DraggableList
                level="level3"
                nestedState={nestedState}
                setNestedState={setNestedState}
                onDragEnd={onDragEnd}
              >
                <CustomAccordion
                  level="level3"
                  setNestedState={setNestedState}
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
