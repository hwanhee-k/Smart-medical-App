import React from "react";
import Layout from "../component/common/Layout";
import DraggableList from "../component/DraggableList";
import NestedDndMain from "../component/NestedDndMain";

const MainPage = () => {
  return (
    <Layout>
      <DraggableList items={items} />
      <NestedDndMain />
      <NestedDndMain />
    </Layout>
  );
};

export default MainPage;

export const RECEPTION_ORDER_LIST = [
  "접수대",
  "진료실",
  "진료실 앞 안내",
  "수납",
];
export const items = [
  { id: "1", name: "박세창", content: RECEPTION_ORDER_LIST },
  { id: "2", name: "신어진", content: RECEPTION_ORDER_LIST },
  { id: "3", name: "홍대기", content: RECEPTION_ORDER_LIST },
  { id: "4", name: "강성율", content: RECEPTION_ORDER_LIST },
  { id: "5", name: "박세훈", content: RECEPTION_ORDER_LIST },
  { id: "6", name: "김정수", content: RECEPTION_ORDER_LIST },
  { id: "7", name: "이주원", content: RECEPTION_ORDER_LIST },
  { id: "8", name: "조한일", content: RECEPTION_ORDER_LIST },
];
