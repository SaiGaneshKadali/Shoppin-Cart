import React from 'react';
import './App.css';
// import Mens from './Mens';
// import Women from './Women';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const products = [
    {
      id: 1,
      name: 'Mens Wear',
      price: 10,
      image: 'https://m.media-amazon.com/images/I/71g+jiARxCL._AC_UL600_FMwebp_QL65_.jpg'  ,
    },
    {
      id: 2,
      name: 'Women Wear',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/91gbtGzyPTS._AC_UL600_FMwebp_QL65_.jpg',
    },
    {
      id: 3,
      name: 'Kids Wear',
      price: 30,
      image: 'https://m.media-amazon.com/images/I/71FaxT3+I4L._AC_UL600_FMwebp_QL65_.jpg',
    },
    {
      id: 4,
      name: 'Mobiles & Laptops',
      price: 40,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GFxTaNPZNDFYfERww2_eY19fAEXTvXa8Gg&usqp=CAU',
    },
    {
      id: 5,
      name: 'Sandals',
      price: 50,
      image: 'https://m.media-amazon.com/images/I/71-IRy6dV0L._AC_UL600_FMwebp_QL65_.jpg',
    },
    {
      id: 6,
      name: 'Grocery',
      price: 60,
      image: 'https://cdn.citymapia.com/kottayam/bon-bons-supermarket/29830/Portfolio.jpg?biz=8282',
    },
    {
      id: 7,
      name: 'Electric Gadzets',
      price: 70,
      image: 'https://cdn1.vectorstock.com/i/1000x1000/88/60/electronic-gadgets-icons-technology-electronics-vector-13968860.jpg',
    },
    {
      id: 8,
      name: 'Watches',
      price: 80,
      image: 'https://m.media-amazon.com/images/I/61lnO6dlSYL._AC_UL600_FMwebp_QL65_.jpg',
    },
    {
      id: 9,
      name: 'Bags',
      price: 90,
      image: 'https://m.media-amazon.com/images/I/81KEKEDFUcL._AC_UY327_FMwebp_QL65_.jpg',
    },
  ];

  return (
    <div className='big-image'>
        <img src="https://thumbs.dreamstime.com/b/summer-sale-happy-young-woman-holding-shopping-bags-summer-sale-happy-young-woman-holding-shopping-bags-yellow-120112576.jpg" alt='big-image' className='home-image' />
      
    <div className="home-page">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className='product-img'>
          <img src={product.image} alt={product.name}/>
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
             {product.id === 1 ? (
              <Link to="/menswear">
                <button>View More</button>
              </Link>
            ) : product.id === 2 ? (
              <Link to="/womenswear">
                <button>View More</button>
              </Link>
            ) : product.id === 3 ? (
              <Link to="/kidswear">
                <button>View More</button>
              </Link>
            ) : product.id === 4 ? (
              <Link to="/mobilesLaptops">
                <button>View More</button>
              </Link>
            ) : product.id === 5 ? (
              <Link to="/sandals">
                <button>View More</button>
              </Link>
            ) : product.id === 6 ? (
              <Link to="/grocery">
                <button>View More</button>
              </Link>
            ) : product.id === 7 ? (
              <Link to="/gadzets">
                <button>View More</button>
              </Link>
            ) : product.id === 8 ? (
              <Link to="/watches">
                <button>View More</button>
              </Link>
            ) : (
              <Link to="/bags">
                <button>View More</button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default HomePage;
