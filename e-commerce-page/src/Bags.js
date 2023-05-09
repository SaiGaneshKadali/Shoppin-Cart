import React from 'react';
import './App.css';

function Bags({addToCart}) {
    const Bags = [
        {
            id: 1,
            name: 'Half Moon 35L Water Resistant 15.6 inch Laptop Bag for Men',
            price: "529",
            image: 'https://m.media-amazon.com/images/I/81PtF30TLUL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 2,
            name: 'Lunars Bingo - 48 L Laptop Office/School/Travel/Business Backpack',
            price: 899,
            image: 'https://m.media-amazon.com/images/I/71I2IM7gsyL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 3,
            name: 'FATMUG Laptop Bag For Men - Convertible Backpack For Office And Travel',
            price: 1499,
            image: 'https://m.media-amazon.com/images/I/61SHWz8Ub5L._SX679_.jpg',
        },
        {
            id: 4,
            name: 'Fur Jaden 55 LTR Rucksack Travel Backpack Bag for Trekking, Hiking ',
            price: 749,
            image: 'https://m.media-amazon.com/images/I/71GxZAYa6UL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 5,
            name: 'uppercase Laptop Backpack 1600EBP Compact 3x more water repellent sustainable bags',
            price: 1000,
            image: 'https://m.media-amazon.com/images/I/51MY53U8hZL._UX679_.jpg',
        },
        {
            id: 6,
            name: 'Fur Jaden Brown Textured Leatherette Stylish & Spacious Weekender Duffle Bag for Travel',
            price: 799,
            image: 'https://m.media-amazon.com/images/I/71-8gqDAalL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 7,
            name: 'Lavie Sport Lino Large Size 63 cms Wheel Duffle Bag for Travel | Travel Bag with Trolley',
            price: 1099,
            image: 'https://m.media-amazon.com/images/I/71JI8Q3Ln-L._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 8,
            name: 'uppercase JFK 7900EHT1TBL Large Check-in Hardsided Polycarbonate',
            price: 5200,
            image: 'https://m.media-amazon.com/images/I/71vIxYRApZL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 9,
            name: 'ROZEN Heavy Dutty Polyester Fabric Travel Duffle Bag (Sky Blue, 50 L, 22Inch)',
            price: 628,
            image: 'https://m.media-amazon.com/images/I/81Xxga9QacL._AC_UL600_FMwebp_QL65_.jpg',
        },
    ];

    return (
        <div>
          <div className="home-page">
            {Bags.map((item) => (
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

export default Bags;
