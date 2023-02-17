import React from "react";
import LoginPage from "../page/LoginPage/LoginPage";
import MenuPage from "../page/MenuPage/MenuPage";
import MainPage from "../page/MainPage/MainPage";
import RegistrationPage from "../page/RegistrationPage/RegistrationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="Page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route  path="/main" element={<MainPage />} />
          <Route  path="/menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
