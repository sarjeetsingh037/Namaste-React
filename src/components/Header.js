export const Header = () => {
    return (
      <div className="header" style={{ backgroundColor: "lightgray" }}>
        <div className="logo">
          <h1>FoodZone</h1>
        </div>
        <div className="navbar-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;