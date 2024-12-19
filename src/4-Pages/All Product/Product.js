import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Card from '../../2-Components/Card/card';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const productsPerPage = 6;

  // Reference for the Products title
  const productsTitleRef = useRef(null);

  // Get All Products
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Get Categories
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error Fetching Categories:', err));
  }, []);

  // Handle category change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setCurrentPage(1);

    if (category === 'all') {
      axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching data:', error));
    } else {
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to the Products section
    if (productsTitleRef.current) {
      productsTitleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={productsTitleRef} className="container  my-5" style={{paddingTop:'100px'}}>

      {/* Products Title */}
      <h1  className="title text-center mb-4" id='products'>Products</h1>

      {/* Category Filter */}
      <div className="row my-4">
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <select
            className="rounded p-2 text-dark fw-bold"
            onChange={handleCategoryChange}
            aria-label="Select Category"
          >
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Display */}
      <div style={{minHeight:'70vh'}}>
      <Card currentProducts={currentProducts} />
</div>
      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center mt-4">
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
            <li
              key={index}
              className='overflow-hidden rounded-circle mx-1'
              style={{
                transition: 'all 0.3s',
              }}
            >
              <button
                onClick={() => paginate(index + 1)}
                className="d-flex justify-content-center align-items-center fw-bold border-none rounded-circle"
                style={{
                  backgroundColor: currentPage === index + 1 ? '#26435A' : '#f8f9fa',
                  color: currentPage === index + 1 ? 'white' : '#26435A',
                  width: '40px',
                  height: '40px',
                }}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Product;
