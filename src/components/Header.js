import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn]= useState(false);
    return (
      <div className="header" style={{ backgroundColor: "lightgray" }}>
        <div className="logo">
          <h1>FoodZone</h1>
        </div>
        <div className="navbar-items">
          <ul>
            <li>Home</li>
            <li><a href="/about">About Us</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <li><button onClick={()=> {isLoggedIn?setIsLoggedIn(false):setIsLoggedIn(true)}}>{isLoggedIn?"Logout":"Login"}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;