import React  from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Grocery ({addToCart}) {
    const Grocery = [
        {
            id: 1,
            name: 'Fortune Oil, 1 L Pouch Premium Kachi Ghani Pure Mustardr',
            price: 178,
            image: 'https://m.media-amazon.com/images/I/51+KKothPzL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 2,
            name: 'Happilo 100% Natural Premium California Dried Almonds 500g Pack',
            price: 438,
            image: 'https://m.media-amazon.com/images/I/713D1eLsaqL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 3,
            name: 'Aashirvaad Atta with Multigrains, 5kg pack, The High Fibre Atta',
            price: 275,
            image: 'https://m.media-amazon.com/images/I/81+FF+RsymL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 4,
            name: 'India Gate Basmati Rice Super, 1kg (with Free 500g)',
            price: 767,
            image: 'https://m.media-amazon.com/images/I/71CNSvSCTHL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 5,
            name: 'Happilo 100% Natural Premium Whole Cashews Value Pack Pouch, 500 g',
            price: 775,
            image: 'https://m.media-amazon.com/images/I/81+0iHPJ2QL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 6,
            name: 'Horlicks Health & Nutrition Drink 500 g Jar, For immunity and 5 signs of growth',
            price: 250,
            image: 'https://m.media-amazon.com/images/I/511GcxShzVL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 7,
            name: 'Sunfeast Dark Fantasy Choco Fills, 300g, Original Filled Cookies with Choco',
            price: 142,
            image: 'https://m.media-amazon.com/images/I/81LO0QPqZAL._AC_UL600_QL65_.jpg',
        },
        {
            id: 8,
            name: 'Tata Sampann Turmeric Powder With Natural Oils, 500g',
            price: 149,
            image: 'https://m.media-amazon.com/images/I/61uhElaINdL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 9,
            name: 'Red Label Tea 500 g Pack, Strong Chai from the Best Chosen Leaves',
            price: 285,
            image: 'https://m.media-amazon.com/images/I/51+iVkS0ZVL._AC_UL600_QL65_.jpg',
        },
    ];

    return (
        <div>
          <div className="home-page">
            {Grocery.map((item) => (
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

export default Grocery;
