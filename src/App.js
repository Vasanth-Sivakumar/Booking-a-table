import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Menu } from './Components/Menu';
import { Reservations } from './Components/Reservations';
import { Order } from './Components/Order';
import { Login } from './Components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
