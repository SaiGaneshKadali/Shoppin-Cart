import React from 'react';
import './App.css';

function Watches({addToCart}) {
    const Watches = [
        {
            id: 1,
            name: 'TIMEX Analog Silver Dial Mens Watch-TWEG20005',
            price: 4495,
            image: 'https://m.media-amazon.com/images/I/81hXj-ofUaL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 2,
            name: 'Amazon Brand - Symbol Analog Mens Watch',
            price: 2079,
            image: 'https://m.media-amazon.com/images/I/61E768pvsfS._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 3,
            name: 'Chronograph White Dial Mens Watch-CH2882',
            price: 5595,
            image: 'https://m.media-amazon.com/images/I/81DEF+TfCTL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 4,
            name: 'Fire-Boltt Visionary 1.78" AMOLED Bluetooth Calling Smartwatch ',
            price: 2999,
            image: 'https://m.media-amazon.com/images/I/61Fj5wTOQiL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 5,
            name: 'Noise ColorFit Pro 4 Alpha Bluetooth Calling Smart Watch',
            price: 3299,
            image: 'https://m.media-amazon.com/images/I/61h+le2DUxL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 6,
            name: 'TIMEX Analog Womens Watch (Dial Colored Strap)',
            price: 2586,
            image: 'https://m.media-amazon.com/images/I/71WFlzi4ELL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 7,
            name: 'Fastrack Steez Analog Dial Womens Watch',
            price: 1075,
            image: 'https://m.media-amazon.com/images/I/61JGz5Puv3L._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 8,
            name: 'Fossil Analog Rose Gold Dial Womens Watch-BQ3181',
            price: 6997,
            image: 'https://m.media-amazon.com/images/I/611I0f+I+MS._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 9,
            name: 'Noise Newly Launched ColorFit Ultra 3 Smart Watch with Metal Strap',
            price: 5499,
            image: 'https://m.media-amazon.com/images/I/71Vx928Yx2L._SX679_.jpg',
        },
    ];

    return (
        <div>
          <div className="home-page">
            {Watches.map((item) => (
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

export default Watches;
