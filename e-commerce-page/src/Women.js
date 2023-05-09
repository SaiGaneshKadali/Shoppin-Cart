import React from 'react';
import './App.css';

function WomensWear({addToCart}) {
    const Womenitems = [
        {
            id: 1,
            name: 'RARE Womens Synthetic a-line Knee-Long Dress',
            price: 887,
            image: 'https://m.media-amazon.com/images/I/71nWkTTddlL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 2,
            name: 'FIBREZA Womens Georgette A-line Maxi Dress',
            price: 798,
            image: 'https://m.media-amazon.com/images/I/61anU1oPbEL._UY879_.jpg',
        },
        {
            id: 3,
            name: 'Glory Sarees Womens Kanchipuram Art Silk Saree With Blouse Piece',
            price: 559,
            image: 'https://m.media-amazon.com/images/I/91iiBtClCnL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 4,
            name: 'SGF11- Womens Kanjivaram Pure Zari Woven Soft Silk Saree With Blouse Piece',
            price: 949,
            image: 'https://m.media-amazon.com/images/I/71SU4PYQW4L._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 5,
            name: 'PANASH TRENDS womens Rangoli Silk Embroidered Saree',
            price: 1249,
            image: 'https://m.media-amazon.com/images/I/81IiovEhNxL._UY879_.jpg',
        },
        {
            id: 6,
            name: 'Preneum Pure Cotton Printed Casual Women Tshirt Pack of 3',
            price: 549,
            image: 'https://m.media-amazon.com/images/I/61GZkOA+qSL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 7,
            name: 'THE DRY STATE Womens Cotton All Over Print Multicolor Oversize Tshirt',
            price: 509,
            image: 'https://m.media-amazon.com/images/I/51XeD6LnxhL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 8,
            name: 'TRASA Ultra Soft Cotton Churidar Plus 35 Colours Leggings for Womens',
            price: 299,
            image: 'https://m.media-amazon.com/images/I/71z3w7u36nL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 9,
            name: 'BlissClub Women The Ultimate Leggings | Leggings for Women  4 Pockets',
            price: 549,
            image: 'https://m.media-amazon.com/images/I/41XPnHlebFL._UX679_.jpg',
        },
    ];

    return (
        <div>
          <div className="home-page">
            {Womenitems.map((item) => (
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

export default WomensWear;
