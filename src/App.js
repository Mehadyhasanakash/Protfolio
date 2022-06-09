import Profilo from "./ProtfilioContainer/Home/Profilo";
import './App.css'
import About from "./ProtfilioContainer/About/About";
import Nav from "./ProtfilioContainer/Nav/Nav";

function App() {
  return (
    <div className="App" >
      <Nav/>
      <Profilo/>
      <About/>
    </div>
  );
}

export default App;
