import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { CgCloseO } from 'react-icons/cg';
import { GoSearch } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useCart } from '../../Context/CartContext';

const Navbarr = () => {
    const [products, setProducts] = useState('');
    const [search, setSearch] = useState('');
    const [filterProducts, setFilterProducts] = useState([]);
    const navigate = useNavigate(); // Use useNavigate for programmatic navigation

    // Context Length of cart 
    const { cart } = useCart();

    // Get products from Api 
    useEffect(() => {
        try {
            axios
                .get('https://fakestoreapi.com/products')
                .then((response) => setProducts(response.data));
        } catch (err) {
            console.log(err);
        }
    }, []);

    // Handle Search Input Changes
    const handleSearchChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearch(searchValue);
        if (searchValue) {
            const filterSearch = products.filter((pro) => (
                pro.title.toLowerCase().includes(searchValue)
            ));
            setFilterProducts(filterSearch);
        } else {
            setFilterProducts([]);
        }
    };

    // Clear search input and results
    const clearSearch = () => {
        setSearch('');
        setFilterProducts([]);
    };

    // Function to navigate to the single product page and clear search
    const handleProductClick = (productId) => {
        navigate(`/singleProduct/${productId}`);
        clearSearch(); // Clear the search when navigating
    };

    return (
        <div>
            <nav className='d-flex justify-content-between align-items-center flex-wrap px-3 px-md-5 py-3 fixed-top'
                style={{
                    backgroundColor: '#26435A', color: 'white'
                }}
            >
                <Link to='/' className='text-white ' style={{ textDecoration: 'none' }}>
                    <h2 className='order-1  '>E-commerce</h2>
                </Link>
                <Form className="position-relative d-flex align-items-center order-3  my-3 my-md-2 my-lg-0 mx-auto search-bar">
                    <input type='search'
                        placeholder='Search'
                        className='search'
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <button className=" position-absolute  fs-4 "><GoSearch /></button>
                </Form>
                <div className='order-2 order-md-4'>
                    {
                        ///// shopping Cart/////
                        <div className='position-relative'>
                            <ShoppingCart />
                            <div style={{ background: 'red ', width: '15px', top: '-10px', borderRadius: '20px' }} className='position-absolute end-0 text-center '>{cart.length}</div>
                        </div>
                    }
                </div>
            </nav>
            {/* Search Results List */}
            {search && filterProducts.length > 0 && (
                <div >
                    <ul className="filterSearch  mb-0">
                        <div
                            className='animate__animated animate__zoomIn p-3 pt-5 mx-auto position-relative'
                            style={{
                                maxWidth: '500px',
                                background: '#fff',
                            }}
                        >
                            <span className='position-absolute top-0 mt-3 end-0 me-3 ' onClick={clearSearch} ><CgCloseO color={'red'} fontSize={30} /></span>
                            {filterProducts.map((product) => (
                                <div key={product.id} >
                                    <div onClick={() => handleProductClick(product.id)} style={{ textDecoration: 'none' }} >
                                        <li
                                            className="d-flex align-items-center gap-3 p-3"
                                            style={{
                                                borderBottom: '1px solid #ddd',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <div>
                                                <img style={{ width: '50px', height: '50px' }} src={product.image} alt={product.title} />
                                            </div>
                                            <div style={{ color: 'black' }}>{product.title}</div>
                                        </li>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ul>
                </div>
            )}
            {/* If there are no results for the search */}
            {search && filterProducts.length === 0 && (
                <div className="filterSearch d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-center">No Products Found!!!</h3>
                    <button onClick={clearSearch} className='button-card fs-5 px-5 mt-3'>Go Back</button>
                </div>
            )}
        </div>
    );
}

export default Navbarr;
