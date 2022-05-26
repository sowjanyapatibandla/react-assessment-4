// import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Student from './pages/Student'; 
import Navbar from './pages/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/contact" element={<Contact />} /> 
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
