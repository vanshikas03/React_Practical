import './App.css';
import Home from './pages/Home';
import Abc from './pages/Abc';
import { Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Abc" element={<Abc />} />
      </Routes>
      </>
    </div>
  );
}
 
export default App;
 