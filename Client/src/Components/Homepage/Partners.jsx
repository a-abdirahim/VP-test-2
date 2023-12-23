import "./Partners.scss"

import { Autoplay, } from 'swiper/modules';


import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import Partner1 from "../../assets/partners/1.png"
import Partner2 from "../../assets/partners/2.png"
import Partner3 from "../../assets/partners/3.png"
import Partner4 from "../../assets/partners/4.jpg"
import Partner5 from "../../assets/partners/5.webp"
import Partner6 from "../../assets/partners/6.gif"
import Partner7 from "../../assets/partners/7.png"
import Partner8 from "../../assets/partners/8.png"



const partnerImages = [
    {
        id: 1,
        img: Partner1,
        link: 'http://www.cornley.com/en/product-7.html',
        alt: "Cornley company logo"
    },
    {
        id: 2,
        img: Partner2,
        link: 'https://www.edan.com/',
        alt: "Edan company logo"
    },
    {
        id: 3,
        img: Partner3,
        link: 'https://www.intecasi.com/',
        alt: "InTec company logo ",
        className: "intec"
    },
    {
        id: 4,
        img: Partner4,
        link: 'https://www.ozonebio.com/world',
        alt: "Medsource Ozone Biomedicals company logo"
    },
    {
        id: 5,
        img: Partner5,
        link: 'https://nsbiotec.com/',
        alt: "NS Biotec company logo"
    },
    {
        id: 6,
        img: Partner6,
        link: 'http://www.sinnowa.com/old/english/about/about.asp',
        alt: "Sinnowa company logo"
    },
    {
        id: 7,
        img: Partner7,
        link: 'http://www.urit.com/en2/index.aspx',
        alt: "URIT company logo"
    },
    {
        id: 8,
        img: Partner8,
        link: 'https://en.wondfo.com/',
        alt: "Wondfo company logo"
    },
]

const Partners = () => {


    return (
        <div className="our-partners">
            <div className="partner-description">
                <h2>Why partner with Vital Mediquip</h2>

                <div className="reasons">
                    <ul>
                        <li>
                            <div className="bullets"></div>
                            Great price slash
                        </li>
                        <li>
                            <div className="bullets"></div>
                            Timely delivery
                        </li>
                        <li>
                            <div className="bullets"></div>
                            Expert guidance

                        </li>

                        <li>
                            <div className="bullets"></div>
                            Exceptional customer service
                        </li>

                        <li>
                            <div className="bullets"></div>
                            Broad product range
                        </li>

                        <li>
                            <div className="bullets"></div>
                            Customized solutions
                        </li>
                        <li>
                            <div className="bullets"></div>
                            High-quality products
                        </li>
                    </ul>

                </div>

                <h3 className="subTitle">Our partners</h3>
            </div>
            <div className="partners-img">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        950: {
                            slidesPerView: 7,
                        },
                        650: {
                            slidesPerView: 6,
                        },
                        500: {
                            slidesPerView: 4,
                        },
                        450: {
                            slidesPerView: 3
                        },
                        350: {
                            slidesPerView: 2
                        }
                    }}
                    className="trending-wrapper"
                >

                    {partnerImages.map(partner => {
                        return (

                            <SwiperSlide key={partner.id} className={!partner.className ? "single-caraousel" : `single-caraousel ${partner.className}`}>
                                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                                    <img src={partner.img} alt={partner.alt} />
                                </a>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </div>
    )
}

export default Partners