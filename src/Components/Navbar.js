import { FaBars, FaTimes } from "react-icons/fa"

export function Navbar() {
    return (
            <header>
            <h3>Logo</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Menu</a>
                <a href="/#">Reservations</a>
                <a href="/#">Order Online</a>
                <a href="/#">Login</a>
            <button>
                <FaTimes />
            </button>
            </nav>
            <button>
                <FaBars />
            </button>
            </header>
    );
}