import React, { useState } from "react";
import CustomAccordion from "./CustomAccordion";

import DraggableList from "./DraggableList";
import Toggle from "./toggle";
const MainPage = ({ children }) => {
  const RECEPTION_ORDER_LIST = ["접수대", "진료실", "진료실 앞 안내", "수납"];
  const items = [
    { id: "1", name: "박세창", content: RECEPTION_ORDER_LIST },
    { id: "2", name: "신어진", content: RECEPTION_ORDER_LIST },
    { id: "3", name: "홍대기", content: RECEPTION_ORDER_LIST },
    { id: "4", name: "강성율", content: RECEPTION_ORDER_LIST },
  ];

  const [state, setState] = useState(items);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const originData = [...state];
    const [reorderedData] = originData.splice(result.source.index, 1);
    originData.splice(result.destination.index, 0, reorderedData);
    setState(originData);
  };

  return (
    <DraggableList items={items} state={state} setState={setState}>
      <Toggle items={items} state={state} setState={setState}>
        <CustomAccordion />
      </Toggle>
    </DraggableList>
  );
};

export default MainPage;
