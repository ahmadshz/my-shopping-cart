import React from 'react';
import menshion from '../../1-assets/mensFashion.png';

const Hero = () => {
    return (
        <section 
            id="home" 
            className="mt-2 mt-md-5 m-2 rounded d-flex justify-content-center align-items-center" 
            style={{ backgroundColor: '#DFF2EB', minHeight: '85vh' }}
        >
            <div className="container mx-md-5 row justify-content-between align-items-center">
                {/* Left Content */}
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                    <h1 className="fw-bold animate__animated animate__fadeInLeft" style={{ fontSize: '40px' }}>
                        Men's Fashion
                    </h1>
                    <p className="lead animate__animated animate__fadeInLeft px-4 px-lg-0">
                        Discover the latest in men's fashion with our curated collection of stylish outfits and accessories.
                    </p>
                    <p 
                        className="fw-bold text-primary animate__animated animate__fadeIn animate__slow"
                        style={{ fontSize: '90px', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)' }}
                    >
                        <span style={{ fontSize: '100px', color: 'rgb(38,67,90)' }}>20%</span>
                    </p>
                    <button className="button-card fs-5 px-5 animate__animated animate__fadeInUp animate__slow">
                        Shop Now
                    </button>
                </div>

                {/* Right Image */}
                <div className="col-lg-3 px-4 d-none d-lg-block">
                    <img 
                        className="mt-5 animate__animated animate__fadeIn animate__slow"
                        style={{
                            filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2), 0px 2px 9px rgba(0, 0, 0, 0.2))',
                        }}
                        src={menshion}
                        alt="Men's Fashion"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
