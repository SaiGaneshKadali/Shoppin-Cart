import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Header({ onLogout, firstName }) {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await onLogout();
      alert('Logout successful');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.toLowerCase() === 'bags') {
      navigate('/bags');
    } else if (searchQuery.toLowerCase() === 'watches') {
      navigate('/watches');
    } else if (searchQuery.toLowerCase() === 'mobiles') {
      navigate('/mobilesLaptops');
    } else if (searchQuery.toLowerCase() === 'grocery') {
      navigate('/grocery');
    } else if (searchQuery.toLowerCase() === 'men shirts') {
      navigate('/menswear');
    } else if (searchQuery.toLowerCase() === 'women dresses') {
      navigate('/womenswear');
    } else if (searchQuery.toLowerCase() === 'kids dresses') {
      navigate('/kidswear');
    } else if (searchQuery.toLowerCase() === 'gadzets') {
      navigate('/gadzets');
    } else if (searchQuery.toLowerCase() === 'sandals') {
      navigate('/sandals');
    } else {
      alert(`No results found for "${searchQuery}".`);
    }
  };

  return (
    <div className="header">
      <nav>
        <ul className="navs">
          <img src="https://api.logo.com/api/v2/images?logo=logo_a02e19cd-1fa7-4037-b6c4-b9e415c5e155&format=webp&margins=0&quality=60&width=500&background=transparent&u=1682233456" alt="logo" className="logo-img" />
          <Link to="/" className="links">Home</Link>
          <Link to="/contactus" className="links">ContactUs</Link>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="search here" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <i className="fas fa-search search-icon" onClick={handleSearch}></i>
          </div>
          <Link to="/profile" className="links">
            <i class="fa-solid fa-user" style={{fontSize:"25px", marginLeft:"50px"}} title="Profile"></i>
            {firstName && <span className="first-name">{firstName}</span>}
          </Link>
          <Link to="/cart" className="links">
            <i class="fa-solid fa-cart-shopping" style={{color:" #eb3a2d", fontSize:"25px"}} title="Cart"></i>
          </Link>
          {onLogout ? (
            <>
              <Link to="/logout" className="links" onClick={handleLogout} title="Logout">Logout</Link>
            </>
          ) : (
            <Link to="/login" className="links">Login</Link>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
