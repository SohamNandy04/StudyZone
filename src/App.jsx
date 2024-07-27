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
import SQLPHP from "./components/SQLPHP";
import Mern from "./components/Mern";
import Reactjs from './components/Reactjs'
import Reactnative from './components/Reactnative'
import AppDevelopment from "./components/AppDevelopment";
import Cplus from "./components/Cplus";
import Java from "./components/Java";
import C from "./components/C"
import Chash from "./components/Chash";
import Python from "./components/Python";
import DSA from "./components/DSA";
import DataScience from "./components/DataScience";
import DataAnalytics from "./components/DataAnalytics";
import ML from "./components/ML";
import AI from './components/AI'
import DBMS from "./components/DBMS";
import CyberSecurity from "./components/CyberSecurity";
import PS from "./components/PS";
import UIUX from "./components/UIUX";
import UXResearch from "./components/UXResearch";
import AAE from "./components/AAE";
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
            <Route exact path="/sqlphp" element={<SQLPHP />}/>
            <Route exact path="/mern" element={<Mern />}/>
            <Route exact path="/reactjs" element={<Reactjs />}/>
            <Route exact path="/reactnative" element={<Reactnative />}/>
            <Route exact path="/appdev" element={<AppDevelopment />}/>
            <Route exact path="/cplus" element={<Cplus />}/>
            <Route exact path="/java" element={<Java />}/>
            <Route exact path="/c" element={<C />}/>
            <Route exact path="/chash" element={<Chash />}/>
            <Route exact path="/python" element={<Python />}/>
            <Route exact path="/dsa" element={<DSA />}/>
            <Route exact path="ds" element={<DataScience />}/>
            <Route exact path="da" element={<DataAnalytics />}/>
            <Route exact path="ml" element={<ML />}/>
            <Route exact path="/ai" element={<AI />}/>
            <Route exact path="/dbms" element={<DBMS />}/>
            <Route exact path="/cyber" element={<CyberSecurity />}/>
            <Route exact path="/ps" element={<PS />}/>
            <Route exact path="/uiux" element={<UIUX />}/>
            <Route exact path="/ux" element={<UXResearch />}/>
            <Route exact path="/aae" element={<AAE />}/>







          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
