import React, { useEffect } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Front/Header';
import Home from './Pages/Home/page';
import HomeForm from './Pages/Home/Form/FormPage';
import Gallery from './Pages/Gallery/page';
import Success from './Pages/Success/page';
import QRcode from './Pages/QRcode/page';
import './App.css';
import ChurchWeddingAnnersary from './Pages/ChurchWeddingHome/page';


const App: React.FC = () => {

  const loadPage = () => {
    document.title = "Aljune & Merry | Church Wedding 1st Anniversary"; 
  }
  useEffect(loadPage, []);
  return (
    <Router>
      <Header/>
      <Routes>

        <Route path="/" element={<ChurchWeddingAnnersary/>} />
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/wed-scan-me-form" element={<HomeForm/>} />
        <Route path="/my-qr-code" element={<QRcode/>} />
        <Route path="/user-gallery" element={<Gallery/>} />
        <Route path="/admin/user-gallery" element={<Gallery/>} />
        <Route path="/succesfuly-sent" element={<Success/>} />
      </Routes>
    </Router>
  
  );
}
export default App;
