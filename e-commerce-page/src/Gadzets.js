import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Gadzets({addToCart}) {
    const Gadzets = [
        {
            id: 1,
            name: 'Ambrane Mobile Holding Tabletop Stand, 180 Perfect View, Height Adjustment, Wide Compatibility',
            price: 199,
            image: 'https://m.media-amazon.com/images/I/7192Muh-sAL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 2,
            name: 'Tygot 10" Portable LED Ring Light with 3 Color Modes Dimmable Lighting | for YouTube | Photo-Shoot',
            price: 399,
            image: 'https://m.media-amazon.com/images/I/61yKj3SE4uL._AC_UL600_QL65_.jpg',
        },
        {
            id: 3,
            name: 'MOSHKING Back Cover for Samsung Galaxy M33 5G || Heavy Duty Military Grade Protection Mobile Phone Case',
            price: 499,
            image: 'https://m.media-amazon.com/images/I/7157CAv3iWL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 4,
            name: 'Amazon Brand - Solimo Back Cover for Samsung Galaxy M31 Prime / M31 / F41 (Silicone | Clear)',
            price: 139,
            image: 'https://m.media-amazon.com/images/I/71IXbzY5DcL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 5,
            name: 'Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen™ ENC Mic, Low Latency Gaming, Type-C',
            price: 1498,
            image: 'https://m.media-amazon.com/images/I/61LlQRdDZ2L._SX679_.jpg',
        },
        {
            id: 6,
            name: 'OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge ',
            price: 1999,
            image: 'https://m.media-amazon.com/images/I/51RP1QMh-mL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 7,
            name: 'OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case',
            price: 2799,
            image: 'https://m.media-amazon.com/images/I/51eIHcTAdeL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 8,
            name: 'Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime Lightweight, Type-C, Play/Pause Control',
            price: 2690,
            image: 'https://m.media-amazon.com/images/I/51i+LdztEBL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 9,
            name: 'boAt Rockerz 400 Bluetooth On Ear Headphones With Mic With Upto 8 Hours Playback & Soft Ear Cushions',
            price: 899,
            image: 'https://m.media-amazon.com/images/I/61WqF8Y6HTL._SX679_.jpg',
        },
    ];

    return (
        <div>
          <div className="home-page">
            {Gadzets.map((item) => (
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
export default Gadzets;
