import React from 'react'
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function ProductInfo(props) {
    const product = props.product;
    return (
        <div style={{ padding: 70 }}>
            <Row>
                {/* Product image */}
                <Col sm={12} md={4} lg={4}>
                    <img style={{ maxWidth: '350px' }} src={product.image} alt={product.name} />
                </Col>
                {/* Product details */}
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div>
                        <h2 style={{ paddingTop: 10, fontWeight: 'bold100' }}>{product.name}</h2>
                    </div>
                    <div style={{ padding: 10 }}>
                        <h5> <span style={{ color: 'black' }} > <Rating rating={product.rating} /> </span></h5>
                    </div>
                    <div style={{ padding: 10 }}>
                        <h5 style={{ fontWeight: 'bold' }}>Category: </h5>
                        <h5 style={{ padding: 10, color: 'grey' }}>{product.category}</h5>
                    </div>
                    {
                        product.buy ? (<div style={{ padding: 10 }}>
                            <h5 style={{ fontWeight: 'bold' }}>Price: </h5>
                            <h5 style={{ padding: 10 }}>$ {product.price}</h5>
                        </div>)
                            :
                            (<div style={{ padding: 10 }}>
                                <h5 style={{ fontWeight: 'bold' }}>Price: </h5>
                                <h5 style={{ padding: 10, color: 'red', fontSize: '18px' }}>This Product is available for Swapping only.</h5>
                            </div>)
                    }
                    <div style={{ padding: 10 }}>
                        <h5 style={{ fontWeight: 'bold' }}>Description: </h5>
                        <h5 style={{ padding: 10, fontSize: '18px' }}>{product.desc}</h5>
                    </div>
                    <div style={{ padding: 10 }}>
                        <Row>
                            <Col xs={6} sm={6} md={3} lg={4} >
                                {product.swap ? (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This Product is available for swapping by contacting the owner.</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button style={{ pointerEvents: 'none', backgroundColor: 'green', borderColor: 'green', borderRadius: '1rem', width: '190px' }}>
                                            Available to Swap
                                        </Button>
                                    </span>
                                </OverlayTrigger>) : (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This Product is Not Available for Swapping.</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button style={{ pointerEvents: 'none', backgroundColor: 'red', borderColor: 'red', borderRadius: '1rem', width: '190px' }}>
                                            Unavailable to Swap
                                        </Button>
                                    </span>
                                </OverlayTrigger>)}
                            </Col>
                            <Col xs={6} sm={6} md={3} lg={4}>
                                {product.buy ? (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This Product is available for Buying by contacting the owner.</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button style={{ pointerEvents: 'none', backgroundColor: 'green', borderColor: 'green', borderRadius: '1rem', width: '190px' }}>
                                            Available to Buy
                                        </Button>
                                    </span>
                                </OverlayTrigger>) : (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This Product is Not Available for Buying.</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button style={{ pointerEvents: 'none', backgroundColor: 'red', borderColor: 'red', borderRadius: '1rem', width: '190px' }}>
                                            Unavailable to Buy
                                        </Button>
                                    </span>
                                </OverlayTrigger>)}
                            </Col>
                        </Row>
                    </div>

                </Col>
                {/* contact user */}
                <Col sm={12} md={2} lg={2}>
                    <div style={{ paddingTop: 100 }}>
                        <h5 style={{ fontWeight: 'bold' }}>Owner:</h5>
                        <h5 style={{ padding: 10, fontSize: '18px' }}><Link style={{ color: '#b7b7b7' }} to="#">{product.owner}</Link></h5>
                    </div>
                    <div style={{ paddingTop: 10 }}>
                        <h5 style={{ fontWeight: 'bold' }}>Phone Number:</h5>
                        <h5 style={{ padding: 10, fontSize: '18px' }}><Link style={{ color: '#b7b7b7' }} to="#">+0X-XXX-XXXX</Link></h5>
                    </div>
                    <div style={{ paddingTop: 10 }}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Add this Item to your wishlist, if you want to save it for a future swapping.</Tooltip>}>
                            <span className="d-inline-block">
                                <Button onClick={<Link to="/wishList"></Link>} style={{ backgroundColor: '#255459', borderColor: '#255459', borderRadius: '1rem', width: '170px' }}>
                                    <Link style={{ color: '#fff' }} to="/">Add to your Wishlist</Link>
                                </Button>
                            </span>
                        </OverlayTrigger>
                    </div>
                    <div style={{ paddingTop: 10 }}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Add this Item to your wishlist, if you want to save it for a future swapping.</Tooltip>}>
                            <span className="d-inline-block">
                                <Button onClick={<Link to="/Contact"></Link>} style={{ backgroundColor: '#255459', borderColor: '#255459', borderRadius: '1rem', width: '170px' }}>
                                    Contact the Owner
                                </Button>
                            </span>
                        </OverlayTrigger>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default ProductInfo