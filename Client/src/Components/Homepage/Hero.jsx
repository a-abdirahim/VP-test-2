import { FaRegPaperPlane } from "react-icons/fa6"
import { MdOutlineVerified } from "react-icons/md"
import { FaSitemap } from "react-icons/fa6"
import { BiSupport } from "react-icons/bi"
import { CiDeliveryTruck } from "react-icons/ci"
import { BsEmojiSmile } from "react-icons/bs"
import "./Hero.scss"
import Testimonials from "../../assets/testimonials.svg"
import { NavLink } from "react-router-dom"

const Hero = () => {
    return (
        <section>
            <div className="hero-section">
                <h1 className="title">Vital Mediquip, previously Vitol Agencies Ltd.</h1>
                <p className="description">
                    We offer a wide range of healthcare solutions for medical needs, including laboratory, surgical, dental,
                    imaging, theater, physiotherapy, maternity, as well as machine services and maintenance.
                </p>
                <button className="get-in-touch">
                    <NavLink to="/contact-us" className="contact-link">
                        Order Now
                        <FaRegPaperPlane className="plane-icon" />
                    </NavLink>
                </button>

                <div className="testimonial">
                    <img src={Testimonials} alt="testimonials" />
                    <p>Trusted by 100+ customers <MdOutlineVerified className="verified-icon" /></p>
                </div>
            </div>
            <div className="our-services">
                <div className="service">
                    <div className="icon-wrapper">
                        <FaSitemap className="icon" />
                    </div>

                    <div className="service-description">
                        <h3>Wide product range</h3>
                        <p>We offer a wide variety of items, equipment, and machines</p>
                    </div>
                </div>
                <div className="service">
                    <div className="icon-wrapper">
                        <CiDeliveryTruck className="icon" />
                    </div>

                    <div className="service-description">
                        <h3>Prompt delivery</h3>
                        <p>We guarantee that all orders will be delivered on time</p>
                    </div>
                </div>
                <div className="service">
                    <div className="icon-wrapper">
                        <BiSupport className="icon" />
                    </div>

                    <div className="service-description">
                        <h3>Superb Customer support </h3>
                        <p>Our customer service team is quick and friendly.</p>
                    </div>
                </div>
                <div className="service">
                    <div className="icon-wrapper">
                        <BsEmojiSmile className="icon" />
                    </div>

                    <div className="service-description">
                        <h3>Technical support:</h3>
                        <p>We offer expert assistance for product selection and after-sale support.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero