import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App';
import { useCart } from '../../Context/CartContext';
import Footer from '../Footer/Footer';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import Loading from '../../3-style/Loading';

const SingleProduct = () => {
  const [product, setProduct] = useState(null); // Product is an object, not an array
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const { id } = useParams(); // Get the product ID from route params
  const { addToCart } = useCart(); // Cart context function

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    window.scrollTo(0, 0); 
    fetchProduct();
  }, [id]);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show this if no product has been uploaded
  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
        <Loading/>
      </div>
    );
  }

  const { image, title, category, description, price } = product;

  return (
    <div>
      {/* Scroll to Top Arrow */}
      <div
        className="arrow d-flex justify-content-center align-items-center shadow rounded-circle"
        style={{
          opacity: isScrollVisible ? 1 : 0,
          transition: 'opacity 0.5s',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <MdKeyboardDoubleArrowUp size={30} />
      </div>

      {/* Show Product */}
      <div
        className="d-flex justify-content-center align-items-center gap-5"
        style={{ margin: '100px 0', minHeight: '70vh' }}
      >
        <div className="container row justify-content-between align-items-center py-md-5 mx-0">
          {/* Product Image */}
          <div className="col-10 col-md-7 col-lg-5 pb-5 mx-auto mx-md-none">
            <img
              src={image}
              alt={title}
              className="img-fluid h-100 px-4"
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '20px 0 0 20px',
              }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-12 col-lg-6 d-flex flex-column">
            <h1 className="card-title">{title}</h1>
            <p className="text-muted pt-3">{category.toUpperCase()}</p>
            <p className="text-muted">{description}</p>
            <h1 className="text-success fw-bold">${price}</h1>
            <button
              onClick={() => addToCart(product)}
              className="button-card mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SingleProduct;
