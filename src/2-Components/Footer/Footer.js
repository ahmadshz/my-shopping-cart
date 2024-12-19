import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsPrinterFill, BsTelephoneInboundFill } from 'react-icons/bs'
import { FaEnvelope, FaGem, FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'
import { TiHome } from 'react-icons/ti'

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundColor: "#26435A" }} className='text-center text-lg-start text-white '>
                <section className='d-flex justify-content-center justify-content-lg-between px-5 p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='#!' className='me-4 text-reset'>
                            <RiWhatsappFill className='fs-3' />
                        </a>
                        <a href='#!' className='me-4 text-reset'>
                            <RiInstagramFill className='fs-3' />
                        </a>
                        <a href='#!' className='me-4 text-reset'>
                            <FaLinkedin className='fs-3' />
                        </a>
                        <a href='#!' className='me-4 text-reset'>
                            <FaGithub className='fs-3' />
                        </a>
                    </div>
                </section>

                <section >
                    <Container className='text-center text-md-start mt-5'>
                        <Row className='mt-3'>
                            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <FaGem />              E-commerce
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </Col>

                            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#home' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='#products' className='text-reset'>
                                        Product
                                    </a>
                                </p>
                              
                            </Col>

                            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <TiHome />            North-Lebanon, Lebanon
                                </p>
                                <p>
                                    <FaEnvelope />              info@example.com
                                </p>
                                <p>
                                    <BsTelephoneInboundFill />     +961 81...        </p>
                                <p>
                                    <BsPrinterFill />          +961 81...  </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://my-portf-olio-sh.netlify.app'>
                        Ahmad Sh
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer