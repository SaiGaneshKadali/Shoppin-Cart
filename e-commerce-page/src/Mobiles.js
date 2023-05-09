import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function MobileLaptops({addToCart}) {
    const mobileLaptops = [
        {
            id: 1,
            name: 'Samsung Galaxy M14 5G (Berry Blue, 6GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core | Android 13 | Without Charger',
            price: 16490,
            image: 'https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 2,
            name: 'Nokia G21 Android Smartphone, Dual SIM, 3-Day Battery Life, 6GB RAM + 128GB Storage, 50MP Triple AI Camera | Nordic Blue',
            price: 13999,
            image: 'https://m.media-amazon.com/images/I/71x+m2-yb7L._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 3,
            name: 'realme narzo N55 (Prime Black, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera',
            price: 10999,
            image: 'https://m.media-amazon.com/images/I/418G+T7WDaL._SY300_SX300_.jpg',
        },
        {
            id: 4,
            name: 'Lava Blaze 5G (Glass Green, 6GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | Upto 9GB Expandable RAM',
            price: 11999,
            image: 'https://m.media-amazon.com/images/I/51jyWjssSAL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 5,
            name: 'Oppo A78 5G (Glowing Blue, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate',
            price: 18999,
            image: 'https://m.media-amazon.com/images/I/8104evx11QL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 6,
            name: 'HP 15s, 11th Gen Intel Core i3 8GB RAM/1TB HDD+256 GB SSD 15.6-inches/39.6 cm FHD Laptop/Windows 11/Intel UHD Graphics',
            price: 39990,
            image: 'https://m.media-amazon.com/images/I/810Y-PUrbyL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 7,
            name: 'Dell Inspiron 7420 2in1 Laptop,12th Gen Intel Core i3-1215U, 8GB & 256GB SSD, 14.0" (35.56Cms) FHD+ WVA Touch 250 nits, Backlit KB',
            price: 53490,
            image: 'https://m.media-amazon.com/images/I/51fgAJr01TL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            id: 8,
            name: 'ASUS Vivobook 14, Intel Core i3-1115G4 11th Gen, 14" (35.56 cm) FHD, Thin and Light Laptop (8GB/512GB SSD/Office 2021/Windows 11 Home',
            price: 35990,
            image: 'https://m.media-amazon.com/images/I/41qT2pEyaOL._SX300_SY300_QL70_FMwebp_.jpg',
        },
        {
            id: 9,
            name: 'Lenovo V15 AMD Ryzen5 5500U 15.6" (39.62 cm) FHD (1920x1080) Antiglare 250 nits Thin and Light Laptop (8GB RAM/512GB SSD',
            price: 37990,
            image: 'https://m.media-amazon.com/images/I/51uMR8hdx9L._AC_UY327_FMwebp_QL65_.jpg',
        },
    ];

    return (
        <div>
          <div className="home-page">
            {mobileLaptops.map((item) => (
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


export default MobileLaptops;
