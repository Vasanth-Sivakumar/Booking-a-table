import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Main.css";
import { Link } from "react-router-dom";

export function Navbar() {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 alt="Logo"><img src={require("../Assets/header_logo.png")} className='logo' height={50} max-width={200} alt="Little lemon Header logo" /></h3>
      <nav ref={navRef}>
            <Link to="/" className="Link" >Home</Link>
            <Link to="/about" className="Link">About</Link>
            <Link to="/menu" className="Link" >Menu</Link>
            <Link to="/reservations"className="Link" >Reservations</Link>
            <Link to="/order" className="Link" >Order Online</Link>
            <Link to="/login" className="Link">Login</Link>
    
        <button
          className="nav-btn close-btn"
          onClick={toggleNavbar}
          aria-label="Close menu"
          aria-expanded={navRef.current?.classList.contains("responsive_nav")}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={toggleNavbar}
        aria-label="Open menu"
        aria-expanded={navRef.current?.classList.contains("responsive_nav")}
      >
        <FaBars />
      </button>
    </header>
  );
}
