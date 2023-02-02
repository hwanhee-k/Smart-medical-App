import "./App.css";
import Dashboard from "./component/Dashborad";
import DraggableList from "./component/DraggableList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
