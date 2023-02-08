import React, { useState } from "react";
import CustomAccordion from "./CustomAccordion";

import DraggableList, { NestedDnd } from "./DraggableList";
import Toggle from "./toggle";

const MainPage = ({ children }) => {
  const todo = ["1", "2", "3", "4"];
  const RECEPTION_ORDER_LIST = ["접수대", "진료실", "진료실 앞 안내", "수납"];
  const patientName = ["박세창", "신어진", "홍대기", "강성율"];
  // const items = [
  //   { id: "1", name: "박세창", content: RECEPTION_ORDER_LIST },
  //   { id: "2", name: "신어진", content: RECEPTION_ORDER_LIST },
  //   { id: "3", name: "홍대기", content: RECEPTION_ORDER_LIST },
  //   { id: "4", name: "강성율", content: RECEPTION_ORDER_LIST },
  // ];

  const [nestedState, setNestedState] = useState(patientName);

  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    if (nestedState === patientName) {
      setNestedState(patientName);
    } else if (nestedState === RECEPTION_ORDER_LIST) {
      setNestedState(RECEPTION_ORDER_LIST);
    } else {
      setNestedState(todo);
    }
    const originData = [...nestedState];
    const [reorderedData] = originData.splice(result.source.index, 1);
    originData.splice(result.destination.index, 0, reorderedData);
    setNestedState(originData);
  };

  return (
    <DraggableList
      nestedState={patientName}
      setNestedState={setNestedState}
      onDragEnd={onDragEnd}
    >
      <CustomAccordion
        nestedState={patientName}
        setNestedState={setNestedState}
        onDragEnd={onDragEnd}
      >
        <DraggableList
          nestedState={RECEPTION_ORDER_LIST}
          setNestedState={setNestedState}
          onDragEnd={onDragEnd}
        >
          <CustomAccordion
            nestedState={RECEPTION_ORDER_LIST}
            setNestedState={setNestedState}
            onDragEnd={onDragEnd}
          />
        </DraggableList>
      </CustomAccordion>
    </DraggableList>
  );
};

export default MainPage;
