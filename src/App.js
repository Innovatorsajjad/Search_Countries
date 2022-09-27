import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact'
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Services';
import AllCountries from './Pages/AllCountries/AllCountries';

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
      </Routes>
    </div>
  );
}

export default App;
