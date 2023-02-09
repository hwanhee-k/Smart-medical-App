import React from "react";
import Layout from "../component/common/Layout";
import DraggableList from "../component/DraggableList";
import NestedDndMain from "../component/NestedDndMain";

const MainPage = () => {
  return (
    <Layout>
      <DraggableList />
      <NestedDndMain />
    </Layout>
  );
};

export default MainPage;
