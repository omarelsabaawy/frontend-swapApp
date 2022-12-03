import React from "react";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/esm/Badge";
import Button from 'react-bootstrap/Button';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

import { FaAppStore, FaSearch, FaRegHeart, FaExchangeAlt } from "react-icons/fa";


import Location from './Location';
import Items from './Items';

function Responsiveness() {
    const renderTooltipWishList = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Your wishlist
        </Tooltip>
    );
    const renderTooltipSwapList = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Your SwapList
        </Tooltip>
    );
    const renderTooltipSearch = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Search
        </Tooltip>
    );
    return (
        <div>
            <div class="offcanvas-menu-overlay"></div>
            <div class="offcanvas-menu-wrapper">
                <div class="offcanvas__option">
                    <div class="offcanvas__links">
                        <Link to="/signIn">Sign in</Link>
                    </div>
                    <div class="offcanvas__links">
                        <Button variant="transparent" style={{ color: 'black' }}>
                            Messages <Badge bg="secondary">0</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                    </div>
                    <div class="offcanvas__top__hover">
                        <Location res={true} />
                    </div>
                </div>
                <div class="offcanvas__nav__option">
                    <Row>
                        <Col xs={4} sm={4} md={4} lg={4}>
                            <Link to="#" class="search-switch">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltipSearch}
                                >
                                    <Button variant='transparent'>
                                        <FaSearch style={{ color: 'black' }} />
                                    </Button>
                                </OverlayTrigger>
                            </Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                            <Link to="/" className="Lists">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltipWishList}
                                >
                                    <Button variant='transparent'>
                                        <FaRegHeart style={{ color: 'black' }} />
                                    </Button>
                                </OverlayTrigger>
                            </Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                            <Link to="/" className="Lists">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltipSwapList}
                                >
                                    <Button variant='transparent'>
                                        <FaExchangeAlt style={{ color: 'black' }} />
                                    </Button>
                                </OverlayTrigger>
                            </Link>
                        </Col>

                    </Row>
                </div>
                <div id="mobile-menu-wrap">
                    <div className="slicknav_nav">
                        <Items />
                    </div>
                </div>
                <div class="offcanvas__text">
                    <hr style={{ height: '3px', color: 'black' }} />
                    <p style={{ fontWeight: 'bold' }}>You can Download SWAPPHA App from  <span> <Link style={{ color: 'black' }} to='/'> AppStore <FaAppStore style={{ fontSize: "20px" }} /> </Link> </span> </p>
                </div>
            </div>

        </div>
    );
}

export default Responsiveness;