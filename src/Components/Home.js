import React from 'react';
import { Card } from './Card';
import { Link } from "react-router-dom";
import "./Main.css";

export function Home() {
  return (
    <>
    <div className='container'>
    <div className='text'>
    <h1 id='title'>Little Lemon</h1>
    <h2>Chicago</h2><br/>
    <h3>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</h3><br/>
    <Link to="/reservations" className='table-icon' >Reserve a table</Link>
    </div>
    <div className='image'>
    <img src={require("../Assets/restaurant.jpg")} height={300} width={300} alt="restaurant" />
    </div>
    </div>
    <div className='week'>
    <h1>This week specials!</h1>
    <Link to="/menu" className='menu-icon'>Online Menu</Link>
    </div>
    <br/><br />
    <Card />
    </>
  );}
