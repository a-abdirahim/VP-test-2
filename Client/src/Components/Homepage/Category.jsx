import { NavLink } from "react-router-dom"

import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"
import "./Category.scss"

import Laboratory from "../../assets/categories/laboratory.jpg"
import Medical from "../../assets/categories/medical.jpg"
import Services from "../../assets/categories/services.jpg"
import Theater from "../../assets/categories/theater.jpg"
import { Link } from "react-router-dom"

const Category = () => {
    const handleOnClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className='category-container section'>
            <h2>Category</h2>
            <div className="category-wrapper">
                <NavLink to="/allProducts/laboratory" className="category" onClick={handleOnClick}>
                    <img src={Laboratory} alt="lab-img" />
                    <div className="des">
                        <h3>Laboratory</h3>
                        <label>
                            <BsFillArrowRightCircleFill className="cat-icon" />
                            <p>Browse</p>
                        </label>
                    </div>
                </NavLink>
                <NavLink to="/allProducts/general-hospital" className="category" onClick={handleOnClick}>
                    <img src={Medical} alt="lab-img" />
                    <div className="des">
                        <h3>General Hospital</h3>
                        <label>
                            <BsFillArrowRightCircleFill className="cat-icon" />
                            <p>Browse</p>
                        </label>
                    </div>
                </NavLink>
                <NavLink to="/allProducts/theatre-and-icu/all" className="category" onClick={handleOnClick}>
                    <img src={Theater} alt="theater-img" />
                    <div className="des">
                        <h3>Theater & ICU</h3>
                        <label>
                            <BsFillArrowRightCircleFill className="cat-icon" />
                            <p>Browse</p>
                        </label>
                    </div>
                </NavLink>
                <NavLink to="/allproducts/services-&-maitenance" className="category" onClick={handleOnClick}>
                    <img src={Services} alt="lab-img" />
                    <div className="des">
                        <h3>Services & maintenance</h3>
                        <label>
                            <BsFillArrowRightCircleFill className="cat-icon" />
                            <p>Browse</p>
                        </label>
                    </div>
                </NavLink>
            </div>

            <Link className="other-cat-link" to='/allproducts'>See more <AiOutlineArrowRight /></Link>
        </div >
    )
}

export default Category