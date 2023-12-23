
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import Button from "../UI/Button"


import { HiOutlineBars3BottomRight } from "react-icons/hi2"
import Logo from "../../../public/logo.svg"

import "./Navigation.scss"
import { useState } from "react"
import NavDetails from "./NavDetails"
import SideBar from "../UI/SideBar"


const Navigation = ({ onShowForm }) => {

    const [isActive, setIsActive] = useState(false);

    const toggleSideBar = () => {
        setIsActive(!isActive);
        console.log(isActive)
    };


    const scrolltoTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <SideBar className={isActive ? "active" : ""} onClose={toggleSideBar} onShow={onShowForm} />
            <div className="nav-wrapper">
                <NavDetails />

                <nav>
                    <div className="nav-bar">
                        <div></div>
                        <NavLink to="/" className="logo">
                            <img src={Logo} alt="" />
                        </NavLink>
                        <div className="nav-links">
                            <div className="bars">
                                <HiOutlineBars3BottomRight className="hamburger" onClick={toggleSideBar} />
                            </div>
                            <ul className="nav-items">
                                <li><NavLink to="/" className={({ isActive }) =>
                                    isActive ? "active" : undefined
                                } onClick={scrolltoTopHandler}>Home</NavLink></li>
                                <li><NavLink to="/allProducts" onClick={scrolltoTopHandler}>Products</NavLink></li>
                                <li><NavLink to="/about" onClick={scrolltoTopHandler}>About Us</NavLink></li>
                                <li><NavLink to="/faqs" onClick={scrolltoTopHandler}>FAQS</NavLink></li>
                                <li><NavLink to="/contact-us" onClick={scrolltoTopHandler}>Contact us</NavLink></li>
                            </ul>
                            <Button label="Get Quote" className="get-quote" onClick={onShowForm} />
                        </div>
                    </div>
                </nav>
            </ div>
        </>
    )
}

Navigation.propTypes = {
    onShowForm: PropTypes.func,
};

export default Navigation