import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import MenuIcon from "../../assets/HamburgerIcon.png";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
            // console.log(windowWidth)
        };
    });

    useEffect(() => {
        if (windowWidth > 800) setIsMobile(false)
    }, [windowWidth])

    return (
        <div className="nav-container">
            <nav className="navbar">
                <img
                    src="https://institute.e2ehiring.com/content/images/e2e_recruiter_Light%20bckground.svg"
                    className="logo"
                    alt=".."
                />
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                    {/* <ul className='nav-links'> */}
                    <Link to="/" href="a" className="nav-item">
                        <li className="home">Home</li>
                    </Link>
                    <Link to="/solution" href="a" className="nav-item">
                        <li className="solution">Solution</li>
                    </Link>
                    <Link to="/partners" href="a" className="nav-item">
                        <li className="partners">Partners</li>
                    </Link>
                    <Link to="/blogs" href="a" className="nav-item">
                        <li className="blogs">Blogs</li>
                    </Link>
                    <Link to="/register" href="a" className="nav-item">
                        <li className="register">Register</li>
                    </Link>
                    <Link to="/login" href="a" className="nav-item">
                        <li className="login">Login</li>
                    </Link>
                </ul>
                <button
                    className="mobile-menu-icon"
                    style={{ backgroundColor: "#fff", border: "none" }}
                    onClick={() => setIsMobile(!isMobile)}

                >
                    <img src={MenuIcon} style={{ height: "40px", width: "40px" }} className="bar-icon" alt="..." />
                    {/* {isMobile ? <img src={MenuIcon} style={{ height: "40px", width: "40px" }} /> : null} */}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
