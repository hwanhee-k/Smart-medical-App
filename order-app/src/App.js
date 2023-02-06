import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        {/* <Route
          exact
          path="/reception/:content/:name"
          element={<ReceptionPage />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
