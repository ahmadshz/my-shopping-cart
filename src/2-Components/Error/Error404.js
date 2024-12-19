import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className='d-flex justify-content-center align-items-center ' style={{ minHeight: '85vh' }}>
            <div className=' d-flex justify-content-center align-items-center flex-column' >
                <h1 className='fw-bold ' style={{
                    fontSize: '100px',
                    color: '#ff5e57',
                    textShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
                }}>404</h1>
                <h2 className='text-center mb-3' style={{
                    fontSize: '36px',
                    color: '#6c757d',
                }}>Oops! The page you’re looking for doesn’t exist.</h2>
                <p className='text-center fs-3 mb-5' style={{
                    color: '#495057',
                }}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link href="/" className="btnn-cart p-3" style={{ textDecoration: 'none' }}>
                    Go to Homepage
                </Link>
            </div>

        </div>

    )
}

export default Error404