import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./component/Dashborad";
import Test from "./component/Test";
import DraggableList from "./component/DraggableList";
import Toggle from "./component/toggle";
import MainPage from "./component/MainPage";
import NestedAccordion from "./component/toggleTest";

function App() {

  return (
    <div className="App">
      <NestedAccordion />
    </div>
  );
}

export default App;
