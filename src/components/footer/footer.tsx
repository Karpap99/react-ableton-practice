
import React from 'react';
import { Link } from 'react-router-dom';
import AbletonLogo from '../../assets/images/ableton-hallmark.ef5355379032.svg';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <h2>Ableton</h2>
                <div className="footer-grid">
                    <div>
                        <ul>
                            <li>Register Live or Push</li>
                            <li>About Ableton</li>
                            <li>Jobs</li>
                            <li>
                                <div className="footer-logos">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" alt="facebook" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" alt="tweeter" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" alt="youtube" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" alt="instagram" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <ul>
                            <li>Offers for students and teachers</li>
                            <li>Offers for institutions</li>
                            <li>Push 1 trade-in initiative</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Sign up to our newsletter</h3>
                        <p className="footer-newsletter-text">
                            Enter your email address to stay up to date with
                            <span> latest offers, tutorials, downloads and more</span>
                        </p>
                        <div className="footer-email">
                            <input type="text" placeholder="Email Address" />
                            <button className="footer-signup">Sign up</button>
                        </div>
                    </div>
                    <div>
                        <h3>Community</h3>
                        <ul>
                            <li>Find Ableton User Groups</li>
                            <li>Find Certified Training</li>
                            <li>Become a Certified Trainer</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Distributors</h3>
                        <ul>
                            <li>Find Distributors</li>
                            <li>Try Push in-store</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Language and Location</h3>
                        <div>
                            <select>
                                <option>English</option>
                            </select>
                            <select>
                                <option>United States</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <ul>
                        <li>Archieve</li>
                        <li>Contact Us</li>
                        <li>Press Resources</li>
                        <li>Legal Info</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Settings</li>
                        <li>Imprint</li>
                    </ul>
                    <div className="footer-bottom-right">
                        <div>Made in Berlin</div>
                        <Link to="/">
                            <img src={AbletonLogo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);