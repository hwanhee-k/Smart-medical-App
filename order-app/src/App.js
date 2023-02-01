import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./component/Dashborad";
import Test from "./component/Test";
import DraggableList from "./component/DraggableList";



function App() {
  const RECEPTION_ORDER_LIST = ["접수대", "진료실", "진료실 앞 안내", "수납"];
  const items = [
    { id: "1", name: "박세창", content: RECEPTION_ORDER_LIST },
    { id: "2", name: "신어진", content: RECEPTION_ORDER_LIST },
    { id: "3", name: "홍대기", content: RECEPTION_ORDER_LIST },
    { id: "4", name: "강성율", content: RECEPTION_ORDER_LIST },
  ];
  return (
    <div className="App">
      {/* <Test /> */}
      {/* <Dashboard /> */}
      <DraggableList items={items}/>
    </div>
  );
}

export default App;
