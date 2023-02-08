import React, { useEffect, useState } from "react";
import CustomAccordion from "./CustomAccordion";

import DraggableList from "./DraggableList";

const MainPage = ({ children }) => {
  const todo = ["1", "2", "3", "4"];
  const RECEPTION_ORDER_LIST = ["접수대", "진료실", "진료실 앞 안내", "수납"];
  const patientName = ["박세창", "신어진", "홍대기", "강성율"];
  const CONTENTS = [
    { name: "접수대", todo: [1, 2, 3, 4] },
    { name: "진료실", todo: [1, 2, 3, 4] },
    { name: "진료실 앞 안내", todo: [1, 2, 3, 4] },
    { name: "수납", todo: [1, 2, 3, 4] },
  ];
  const DATA = [
    { id: 1, name: "박세창", contents: CONTENTS },
    { id: 2, name: "신어진", contents: CONTENTS },
    { id: 3, name: "홍대기", contents: CONTENTS },
    { id: 4, name: "강성율", contents: CONTENTS },
  ];

  const [nestedState, setNestedState] = useState(DATA);
  console.log(nestedState.map((item) => item.contents));

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
    console.log("reorderedData : ", reorderedData);
    originData.splice(result.destination.index, 0, reorderedData);
    setNestedState(originData);
    console.log(originData);
  };
  return (
    <DraggableList
      level="level1"
      nestedState={nestedState}
      setNestedState={setNestedState}
      onDragEnd={onDragEnd}
    >
      <CustomAccordion
        level="level1"
        // nestedState={nestedState}
        setNestedState={setNestedState}
        onDragEnd={onDragEnd}
      >
        {/* <DraggableList
          level="level2"
          nestedState={nestedState}
          setNestedState={setNestedState}
          onDragEnd={onDragEnd}
        >
          <CustomAccordion
            level="level2"
            // nestedState={nestedState}
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
                // nestedState={nestedState}
                setNestedState={setNestedState}
                onDragEnd={onDragEnd}
              />
            </DraggableList>
          </CustomAccordion>
        </DraggableList> */}
      </CustomAccordion>
    </DraggableList>
  );
};

export default MainPage;
