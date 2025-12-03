import { NavLink } from "react-router-dom";
import './App.css';
import Button from "./Button";

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: string;
}

export const Navbar = ({ toggleTheme, currentTheme }: NavbarProps) => {
  return (
    <nav className="fixedMenu">
      <h1>Open health web</h1>
      
      <div className="nav-links">
          <NavLink 
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          
          <NavLink
            to="/skinscreen"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Skin screening
          </NavLink>
      </div>

      <div style={{ position: 'absolute', right: '2rem' }}>
        <Button 
            text={currentTheme === 'dark' ? "☀️" : "🌙"}
            onClick={toggleTheme}
            className="theme-btn"
        />
      </div>
    </nav>
  );
};