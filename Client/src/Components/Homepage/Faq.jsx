/* eslint-disable react/no-unescaped-entities */
import "./Faq.scss"
import { BsPlusCircle } from "react-icons/bs"
import Testimonials from "../../assets/testimonials.svg"
import { NavLink } from "react-router-dom"

const Faq = () => {
    const scrollToTop = () => {
        window, scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className="faq-container ">
            <div className="header">
                <h2>Frequently Asked Questions</h2>
                <p>Have any Questions? we are here to help</p>
            </div>
            <ul className="accordion">
                <li>
                    <input type="radio" name="accodrion" id="first" />
                    <label htmlFor="first">
                        <h3>
                            What types of medical care and healthcare products does your company offer?
                        </h3>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>We offer a wide range of medical and healthcare products, including items for laboratories, operating
                            rooms, dental practices, imaging facilities, maternity care, and more.
                            Additionally, we offer products suitable for hospitality businesses like hotels and spas, as well as
                            educational institutions. Our services cover the maintenance and repair of various machines.
                        </p>
                        <br />
                        <a href="/allproducts">Please click on this link to explore our product and service range and view some featured items.</a>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accodrion" id="second" />
                    <label htmlFor="second">
                        <h3>
                            What are your business hours?
                        </h3>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>We operate from Monday to Saturday.</p>
                        <div className="details">
                            <div className="bullets"></div>
                            <span>Weekdays: 8.00 am to 5.00 pm</span>
                        </div>
                        <div className="details">
                            <div className="bullets"></div>
                            <span> Saturdays: 9.00 am to 3.00 pm</span>
                        </div>
                        <br />
                        <p>
                            Please <a href="/contact-us">contact us</a> before your visit so we can make the necessary preparations for your arrival.</p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accodrion" id="third" />
                    <label htmlFor="third">
                        <h3>
                            Do you offer product delivery services?
                        </h3>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>
                            Certainly! We proudly serve clients across all regions in East Africa. To arrange product delivery, simply
                            order and inform us of your preferred courier service. We will utilize your chosen courier to ensure the
                            timely delivery of your products
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accodrion" id="fourth" />
                    <label htmlFor="fourth">
                        <h3>
                            Why aren't product prices listed on your website or your company’s documents?
                        </h3>
                        <div className="icon">
                            <BsPlusCircle className="accordion-icon" />
                        </div>
                    </label>
                    <div className="content">
                        <p>
                            We don't show prices on our website or documents because we sell products from many different
                            brands. For example, we have two brands of infrared thermometers, Blunt Bird and Dikang. Each of
                            these brands has its own price. That's why we can't put fixed prices on our website, as they vary
                            depending on your chosen brand.<br /><br />
                            If you let us know which brand you're interested in, we'll gladly tell you the price for that specific brand.
                            Just reach out to us, share the brand you prefer, and we'll provide you with the price. We're here to help
                            you find the information you need!
                        </p>
                    </div>
                </li>
            </ul>

            <div className="faq-des">
                <img src={Testimonials} alt="testimonials" />
                <div className="subtext">
                    <h3>Still have questions ?</h3>
                    <NavLink to="/Faqs" onClick={scrollToTop}>
                        <button className="view-button">View More question</button>
                    </NavLink>
                    <p>Can’t find the answer you’re looking for? Please Reach out to our friendly{" "}
                        <NavLink to="/contact-us" className="contact-link" onClick={scrollToTop}>
                            team
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Faq