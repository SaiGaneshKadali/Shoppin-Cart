import React, { useState, useEffect } from 'react';
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Home from "./Home";
import Mens from "./Mens";
import Women from "./Women";
import Kids from "./Kids";
import Mobiles from "./Mobiles";
import Sandals from "./Sandals";
import Grocery from './Grocery';
import Gadzets from './Gadzets';
import Watches from './Watches';
import Bags from './Bags';
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { auth } from './firebase';



function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, {...item, quantity: 1 }]);
    alert("Item added to cart");
  }

  return (
      <BrowserRouter>
      {user && <Header onLogout={logout} firstname={user.displayName} />}
        <Routes>
        <Route exact path="/" element={user ? <Navigate to="/home" /> : <Login />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route path="/menswear" element={user ? <Mens addToCart={addToCart} /> : <Navigate to="/" />} />
          <Route path="/womenswear" element={user ? <Women addToCart={addToCart} /> : <Navigate to="/" />} />
          <Route path="/kidswear" element={user ? <Kids addToCart={addToCart} /> : <Navigate to="/" />} />
          <Route path="/mobilesLaptops" element={user ? <Mobiles addToCart={addToCart} /> : <Navigate to="/" />} />
          <Route path="/sandals" element={user ? <Sandals addToCart={addToCart} /> : <Navigate to="/" />} />
          <Route path="/grocery" element={user ? <Grocery addToCart={addToCart} /> : <Navigate to="/" />} />
          <Route path="/gadzets" element={user ? <Gadzets addToCart={addToCart} /> : <Navigate to="/" />} />
          <Route path="/watches" element={user ? <Watches addToCart={addToCart} /> : <Navigate to="/" />} />
          <Route path="/bags" element={user ? <Bags addToCart={addToCart} /> : <Navigate to="/" />} />
          <Route  path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          {user && <Route path="/profile" element={<Profile />} />}
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} addToCart={addToCart} />} />     
        </Routes>
      </BrowserRouter>
    
    
   

  );
}

export default App;