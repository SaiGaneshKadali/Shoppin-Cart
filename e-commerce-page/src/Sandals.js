import React from 'react';
import './App.css';
// import { useCart } from 'react-use-cart';

// import 'bootstrap/dist/css/bootstrap.min.css';

function Sandals({addToCart}) {

  // const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
  //     setCart([...cart, item]); // add the selected item to the cart array
  //     alert("Item added to cart!");
  //     console.log(item);
  // };

    const sandals = [
        {
            id: 1,
            name: 'Puma Mens Softride Slide Massage',
            price: 1666,
            image: 'https://m.media-amazon.com/images/I/613x1k3yo2L._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 2,
            name: 'crocs Unisex-Adult Literide Clog Clog',
            price: 5395,
            image: 'https://m.media-amazon.com/images/I/7174vDFUImL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 3,
            name: 'adidas Mens Retrocross Sneaker',
            price: 18536,
            image: 'https://m.media-amazon.com/images/I/51r2VYLQ0QL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 4,
            name: 'Adidas Mens Hurtle M Slipper',
            price: 799,
            image: 'https://m.media-amazon.com/images/I/71BzWFA20zL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 5,
            name: 'SOLETHREADS SUMMER SANDAL',
            price: 649,
            image: 'https://m.media-amazon.com/images/I/61pv2kXejrL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 6,
            name: 'Sapatos Women Kitten Heel Bellies',
            price: 799,
            image: 'https://m.media-amazon.com/images/I/91i7XuNY0vL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 7,
            name: 'MOSAC Women Wedding Fashion Sandal',
            price: 599,
            image: 'https://m.media-amazon.com/images/I/61ouNjuwOxL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 8,
            name: 'Red Tape Sports Athleisure Shoes for Women | Comfortable & Durable',
            price: 1495,
            image: 'https://m.media-amazon.com/images/I/613V+VQXAOL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 9,
            name: 'Puma Womens Agile Trip WNs Idp Sneaker',
            price: 2499,
            image: 'https://m.media-amazon.com/images/I/81o6N9YnUmL._UX695_.jpg',
        },
    ];

    // const addToCart = (item) => {
    //     setCart([...cart, item]); // add the selected item to the cart array
    //     alert("Item added to cart!");
    // };

    return (
        <div>
          <div className="home-page">
            {sandals.map((item) => (
              <div key={item.id} className="product-card">
                <div className='product-img'>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-details">
                  <h3>{item.name}</h3>
                  <p style={{ fontWeight: "700", color: "red", fontSize: "25px" }}>₹{item.price}</p>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
}
export default Sandals;