import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function KidsWear({addToCart}) {
    const Kiditems = [
        {
            id: 1,
            name: 'Hopscotch Girls Empire Knee length dress',
            price: 1149,
            image: 'https://m.media-amazon.com/images/I/51s054ksZyL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 2,
            name: 'White Button Girls Polyester Blend Readymade Lehenga Choli Set',
            price: 1176,
            image: 'https://m.media-amazon.com/images/I/71PN7SbSUXL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 3,
            name: 'Beebay Girls Cotton A-Line Knee-Length Dress',
            price: 795,
            image: 'https://m.media-amazon.com/images/I/51DGwmaAwML._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 4,
            name: 'Googo Gaaga Boys Cotton Printed T-Shirt with Denim Shorts Set in Red Color',
            price: 545,
            image: 'https://m.media-amazon.com/images/I/51z0B0H2wLL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 5,
            name: 'Krishn Sweatshirt Pant Set For Boys | Kids Hosiery Cotton Printed Dress',
            price: 399,
            image: 'https://m.media-amazon.com/images/I/518ol1iX8sL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 6,
            name: 'HIKUJ 2pcs Baby Boy Dress Clothes Toddler Outfits Infant Formal Suits',
            price: 549,
            image: 'https://m.media-amazon.com/images/I/61Zy04j33KL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 7,
            name: 'THE DRY STATE Womens Cotton All Over Print Multicolor Oversize Tshirt',
            price: 509,
            image: 'https://m.media-amazon.com/images/I/61OPHKQ1cGL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 8,
            name: 'Triviso Girls Cotton Knee Length Frock Dress/Girls for 0 Month - 5 Years',
            price: 558,
            image: 'https://m.media-amazon.com/images/I/91BxSI1-uPL._AC_UL600_FMwebp_QL65_.jpg',
        },
        {
            id: 9,
            name: 'TotzTouch Baby | Kid Girls Night Wear T Shirt | Pajama Pant Set of 3',
            price: 1099,
            image: 'https://m.media-amazon.com/images/I/81ujbvQj8sL._AC_UL600_FMwebp_QL65_.jpg',
        },
    ];

    return (
        <div>
          <div className="home-page">
            {Kiditems.map((item) => (
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
export default KidsWear;
