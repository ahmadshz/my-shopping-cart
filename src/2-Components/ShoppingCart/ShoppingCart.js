import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { FaCartShopping } from 'react-icons/fa6';
import { MdLogout, MdOutlineDeleteForever } from 'react-icons/md';
import { useCart } from '../../Context/CartContext';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const ShoppingCart = () => {
    const [show, setShow] = useState(false);

    const navigate = useNavigate()

    // Context Shopping Cart
    const { cart, plus, minus, removeFromCart, removeAllProduct } = useCart()

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((prev) => !prev);

    // Calculate the total number of unique products in the cart
    const totalCount = cart.length;

    // Calculate the total quantity of all items in the cart (including duplicates)
    const totalQuantity = cart.reduce((sum, item) => sum + (item.count * item.price), 0);

    // go to single product 

    const goToSingleProduct = (id) => {
        navigate(`/singleProduct/${id}`);
        setShow(false)
    }

    return (
        <div>
            <div onClick={toggleShow} className=" me-2">
                <FaCartShopping size={20} />
            </div>
            <Offcanvas show={show} placement='end' >
                <Offcanvas.Header className='d-felx justify-content-between border-bottom pb-4' >
                    <Offcanvas.Title >Shopping Cart ({totalCount})</Offcanvas.Title>
                    <MdLogout size={25} onClick={handleClose} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cart.length === 0 ? (
                            <p> Your Cart is empty.</p>
                        )
                            :
                            (
                                cart.map((item, idx) => (
                                    <div className='row gap-1 py-2 mx-1 border-bottom pb-2 ' key={idx}>
                                        {/* Close Icon */}
                                        <div className='col-12 position-relative mb-4'>
                                            <IoIosCloseCircleOutline
                                                className='position-absolute end-0    '
                                                size={25}
                                                color='red'
                                                onClick={() => removeFromCart(item.id)}
                                            />
                                        </div>
                                        {/* Product Image */}
                                        <img
                                            style={{ width: '80px', height: '60px' }}
                                            className='col-2'
                                            src={item.image}
                                            alt=''
                                        />

                                        {/* Product Details */}
                                        <div className='col-8'>
                                            <div
                                                onClick={() => goToSingleProduct(item.id)}
                                                className='text-muted cursor-pointer fw-bold'
                                                style={{ textDecoration: 'none', cursor: 'pointer' }}
                                            >
                                                {item.title}
                                            </div>
                                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                                <p className='text-muted'>{item.price}$</p>
                                                <p className='fw-bold'>{(item.price * item.count).toFixed(2)}$</p>
                                               
                                            </div>
                                             <div className=' col-5 d-flex gap-2 justify-content-center align-items-center mb-3 border rounded p-1'>
                                                    <LuMinus onClick={() => minus(item.id)} />
                                                    <div className='fw-semibold mx-1'>{item.count}</div>
                                                    <LuPlus onClick={() => plus(item.id)} />
                                                </div>
                                        </div>
                                    </div>
                                ))
                            )
                    }
                    {cart.length > 0 && (
                        <div className='mt-3 d-flex justify-content-between align-items-center'>
                            <h6>Total: {totalQuantity.toFixed(2)}$</h6>
                            <MdOutlineDeleteForever onClick={removeAllProduct} size={30} color='red' />
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas></div>
    )
}

export default ShoppingCart