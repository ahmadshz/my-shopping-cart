import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

const Card = (props) => {
  const { addToCart } = useCart()
  return (
    <div className="row ">
      {/* Products Display */}
      {
        props.currentProducts.map((product) => (
          <div
            style={{ minHeight: '500px' }}
            className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex justify-content-center animate__animated animate__fadeIn "
            key={product.id}
          >
            <div
              style={{
                minHeight: '400px',
                boxShadow: `
                15px 15px 30px rgba(190, 190, 190, 0.8),
                -15px -15px 30px rgba(255, 255, 255, 0.9) `,
                borderRadius: '30px',
                padding: '20px',
              }}
              className="h-100 text-center p-3"
            >
              <h5 className="card-title">
                <strong>
                  {product.title
                    ? product.title.length > 20
                      ? `${product.title.substring(0, 20)}...`
                      : product.title
                    : 'No Title'}
                </strong>
              </h5>
              <Link to={`/singleProduct/${product.id}`}>
                <img
                  className="my-5"
                  height={150}
                  width={150}
                  src={product.image}
                  alt={product.title}
                />
              </Link>
              <div >
                <p className=" text-muted">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 70)}...`
                    : product.description}
                </p>
                <p >
                  Price: <strong>${product.price}</strong>
                </p>
                <div className="d-flex justify-content-between align-items-center py-3 px-1 ">
                  <div />
                  <button onClick={() => addToCart(product)} className="button-card" > Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>

  );
};

export default Card;
