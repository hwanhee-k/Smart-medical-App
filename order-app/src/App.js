import "./App.css";
import MainPage from "./page/MainPage";
import DraggableList from "./component/DraggableList";
import { Routes, Route } from "react-router-dom";
import ReceptionPage from "./page/DetailPage/ReceptionPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          exact
          path="/reception/:content/:name"
          element={<ReceptionPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
