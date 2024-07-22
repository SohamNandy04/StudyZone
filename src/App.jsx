import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from "./components/Login";
import Signup from './components/Signup';
import './App.css';
import Courses from "./components/Courses";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar/>
        <div className="app-content">
          <Routes>
            <Route exact path="/" element={<Body/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/courses" element={<Courses/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
