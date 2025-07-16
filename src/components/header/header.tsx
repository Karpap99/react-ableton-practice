import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AbletonLogo from '../../assets/images/ableton-hallmark.ef5355379032.svg';
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const navButtons = (
        <>
            <li className="try-live">Try Live for free</li>
            <li>Account</li>
            <li>Log out</li>
        </>
    );
    return (
        <header>
            {menuOpen && <div className="burger-overlay" onClick={() => setMenuOpen(false)} />}
            <div>
                <Link to="/">
                    <img src={AbletonLogo} alt="Ableton logo" />
                </Link>
                <button className="burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
                    <span className="burger-bar" />
                    <span className="burger-bar" />
                    <span className="burger-bar" />
                </button>
                <nav className={menuOpen ? 'open' : ''}>
                    <ul onClick={() => setMenuOpen(false)}>
                        <li><Link to="/live">Live</Link></li>
                        <li><Link to="/push">Push</Link></li>
                        <li><Link to="/link">Link</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/packs">Packs</Link></li>
                        <li><Link to="/help">Help</Link></li>
                        <li style={{ color: 'var(--orange)' }}><Link to="/more">More +</Link></li>
                        <span className="mobile-nav-buttons">{navButtons}</span>
                    </ul>
                </nav>
            </div>
            <ul className="desktop-nav-buttons">{navButtons}</ul>
        </header>
    );
};

export default React.memo(Header);