import React from "react";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import logo from './NavImages/Swap.png';

import Location from './Location';
import Items from './Items';
import { FaAppStore, FaSearch, FaRegHeart, FaExchangeAlt } from "react-icons/fa";

function NoResponsiveness() {

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
        <header class="header">
            <div class="header__top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-7">
                            <div class="header__top__left">
                                <p style={{ fontWeight: 'bold', paddingTop: 7 }}>You can Download SWAPPHA App from  <span> <Link style={{ color: 'white' }} to='/'> AppStore <FaAppStore style={{ fontSize: "20px" }} /> </Link> </span> </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-5">
                            <div class="header__top__right">
                                <div class="header__top__links">
                                    <Link to="/signIn">Sign in</Link>
                                </div>
                                <div class="header__top__links">
                                    <Button variant="transparent" style={{ color: 'white' }}>
                                        Messages <Badge bg="secondary">0</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                </div>
                                <div class="header__top__hover">
                                    <Location res={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3">
                        <div class="header__logo">
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <nav class="header__menu mobile-menu">
                            <Items />
                        </nav>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <div class="header__nav__option">
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
                        </div>
                    </div>
                </div>
                <div class="canvas__open"><i class="fa fa-bars"></i></div>
            </div>
        </header>
    );
}

export default NoResponsiveness;