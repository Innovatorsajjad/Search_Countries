import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact'
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Services';
import AllCountries from './Pages/AllCountries/AllCountries';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/allCountries" element={<AllCountries/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
