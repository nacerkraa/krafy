import React from "react";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="nav-container">
            <span className="lego"><a to="/">Kra<span style={{color:"#63cdda"}}>fy.</span></a></span>
            <ul className="links">
              <li><a src="/accounting">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;