import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Bus from "./components/Bus";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Bus />} />
        {/* <Route exact path="/">
          <Navigate to="/home" replace state={Bus} />;
        </Route> */}
      </Routes>
    </>
  );
}

export default App;