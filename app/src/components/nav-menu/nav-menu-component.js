import React from 'react';
import styled from 'styled-components';
import refreshArrow from '../../assets/SVG/refresh-arrow.svg';
import cart from '../../assets/SVG/cart.svg';
import ig from '../../assets/SVG/ig-logo.svg';
import scrollLogo from '../../assets/SVG/scroll-image.svg';
import shuffleLogo from '../../assets/SVG/shuffle-image.svg';
import { useLocation } from 'react-router-dom'
import './nav-menu-component.css';

const NavMenuComponent = ({forceUpdate}) => {

    const path = useLocation().pathname.substr(1);


    return (
        <NavMenu>
            <button onClick={forceUpdate} className={path === 'shuffle' ? 'button nav-item' : 'hidden'}><img className="arrow" alt="refresh-arrow" src={refreshArrow} /></button>
            <a className={path === 'shuffle' ? 'nav-item' : 'hidden'} href="/"><img className="cart" alt="cart-logo" src={scrollLogo} /></a> 
            <a className={path === 'shuffle' ? 'hidden' : 'nav-item'} href="/shuffle"><img className="cart" alt="cart-logo" src={shuffleLogo} /></a>
            <a className="nav-item" href="https://eidolonnyc.myshopify.com/"><img className="cart" alt="cart-logo" src={cart} /></a>
            <a className="nav-item" href="https://www.instagram.com/e.idol.on/"><img className="ig-logo" alt="ig-logo" src={ig} /></a>

        </NavMenu>
    );
};

export const NavMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    color: white;
    display: flex;
    max-width: 100%;
    justify-content: flex-end;
`;

export default NavMenuComponent;