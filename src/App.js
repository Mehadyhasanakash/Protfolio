import Profilo from "./ProtfilioContainer/Home/Profilo";
import './App.css'
import Nav from "./ProtfilioContainer/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Service from "./ProtfilioContainer/Service/Service";

function App() {
  return (
    <div  >
      <Nav/>
      <Routes>
        <Route path="/home" element={<Profilo/>}   ></Route>
        <Route path="/myPortfolio" element={<Service/>}   ></Route>
      </Routes>

    </div>
  );
}

export default App;
