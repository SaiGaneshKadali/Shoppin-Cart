import React from 'react';
import './App.css';


// import 'bootstrap/dist/css/bootstrap.min.css';

function MensWear({addToCart}) {

    const items = [
        {
            id: 1,
            name: 'VeBNoR  Men Regular Fit Solid Mandarin Collar Casual Shirt',
            price: 359,
            image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/m/o/t/l-st1-vebnor-original-imagmsyxhvkrfjgz.jpeg?q=70',
        },
        {
            id: 2,
            name: 'icome  Men Regular Fit Striped Casual Shirt',
            price: 269,
            image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/t/l/2/xl-men-regular-super-slim-fit-striped-casual-shirt-icome-original-imagf9q2epye5kks-bb.jpeg?q=70',
        },
        {
            id: 3,
            name: 'Wild West Men Regular Fit Solid Mandarin Collar Casual Shirt',
            price: 489,
            image: 'https://rukminim1.flixcart.com/image/612/612/l29c9e80/shirt/c/r/p/m-sm-350-wild-west-original-imagdn3jkvzuqsnz.jpeg?q=70',
        },
        {
            id: 4,
            name: 'Tanip Men Slim Fit Checkered Spread Collar Casual Shirt',
            price: 319,
            image: 'https://rukminim1.flixcart.com/image/612/612/kovsvbk0/shirt/b/q/t/s-ts-shirt1029-tanip-original-imag38a3fen3wmv7.jpeg?q=70',
        },
        {
            id: 5,
            name: 'NB NICKY BOY Men Printed Round Neck Black T-Shirt',
            price: 249,
            image: 'https://rukminim1.flixcart.com/image/832/832/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg?q=70',
        },
        {
            id: 6,
            name: 'AUSK Men Striped Round Neck Blue T-Shirt',
            price: 289,
            image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/d/o/8/m-ausk0139-ausk-original-imagbqeesp893kxr-bb.jpeg?q=70',
        },
        {
            id: 7,
            name: 'MOONVELLY Pack of 2 Men Solid Polo Neck Multicolor T-Shirt',
            price: 449,
            image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/s/4/xxl-polo-combo-moonvelly-original-imagn8hzhhmcymmd.jpeg?q=70',
        },
        {
            id: 8,
            name: 'U.S. POLO ASSN.  Men Slim Mid Rise Blue Jeans',
            price: 2096,
            image: 'https://rukminim1.flixcart.com/image/832/832/l251xu80/jean/u/i/d/34-udjen0329-u-s-polo-assn-original-imagdjs8nshvvpev.jpeg?q=70',
        },
        {
            id: 9,
            name: 'FUBAR Men Slim Fit Light Green Cotton Blend Trousers',
            price: 549,
            image: 'https://rukminim1.flixcart.com/image/612/612/klscivk0/trouser/q/q/k/28-sktr-4242-olv-fubar-original-imagyuff8uq6cxny.jpeg?q=70',
        },
    ];

    return (
        <div>
          <div className="home-page">
            {items.map((item) => (
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

export default MensWear;
