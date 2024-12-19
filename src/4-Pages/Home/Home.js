import React, { useEffect, useState } from 'react'
import Product from '../All Product/Product'
import Hero from '../../2-Components/Hero/Hero'
import Footer from '../../2-Components/Footer/Footer'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

const Home = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 200) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            })    
    }, [])

    return (
        <div>
                <div
                    className="arrow d-flex justify-content-center align-items-center shadow rounded-circle"
                    style={{ opacity: isVisible ? 1 : 0, transition: '1s' }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <MdKeyboardDoubleArrowUp size={30} />
                </div>
            <Hero />
            <Product />
            <Footer />
        </div>
    )
}

export default Home