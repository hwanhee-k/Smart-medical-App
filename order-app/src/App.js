import "./App.css";
import MainPage from "./page/MainPage";
import DraggableList from "./component/DraggableList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
