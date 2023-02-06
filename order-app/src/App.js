import "./App.css";
import DraggableList from "./component/DraggableList";
import { Routes, Route } from "react-router-dom";
import ReceptionPage from "./page/DetailPage/ReceptionPage";
import MainPage from "./page/MainPage";
import Layout from "./component/common/Layout";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          exact
          path="/reception/:content/:name"
          element={<ReceptionPage />}
        />
      </Routes> */}
      <Layout />
    </div>
  );
}

export default App;
