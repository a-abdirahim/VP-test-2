/* eslint-disable react/prop-types */
import "./Trending.scss"

import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from "react-router-dom";

const Trending = ({ products, categories, subCategories }) => {
    const trendingProducts = products.slice(0, 16);

    const categoryMap = {}
    const subCategoryMap = {}
    const categorySlugs = {}
    const subCategorySlugs = {}

    categories.forEach(category => {
        categoryMap[category._id] = category.name
    })
    categories.forEach(category => {
        categoryMap[category._id] = category.name
    })

    categories.forEach(category => {
        categorySlugs[category._id] = category.slug
    })

    subCategories.forEach(subCategory => {
        subCategoryMap[subCategory._id] = subCategory.name
    })
    subCategories.forEach(subCategory => {
        subCategorySlugs[subCategory._id] = subCategory.slug
    })
    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className='trending-container section'>
            <div className="navigation">
                <h2>Trending / New</h2>
            </div>
            <Swiper
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={2}
                pagination={{ clickable: true }}
                infinite={"true"}
                autoplay
                breakpoints={{
                    950: {
                        slidesPerView: 4,
                    },
                    650: {
                        slidesPerView: 3,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    450: {
                        slidesPerView: 1
                    }
                }}
                className="trending-wrapper"
            >
                {trendingProducts.map(obj => {
                    const categoryName = categoryMap[obj.category] || "unknown Category";
                    const subCategoryName = subCategoryMap[obj.subCategory] || "unknown Category";

                    return (
                        <SwiperSlide key={obj._id} className="single-caraousel" onClick={handleOnscroll}>
                            <NavLink to={
                                subCategoryName === "unknown Category"
                                    ? `/allProducts/${categorySlugs[obj.category]}/all/${obj.slug}`
                                    : `/allProducts/${categorySlugs[obj.category]}/${subCategorySlugs[obj.subCategory]}/${obj.slug}`
                            } className="product-wrapper">
                                <div className="product-image">
                                    <img src={`/public/uploads/products/${obj.productImage}`} alt="product" crossOrigin="anonymous" />
                                </div>
                                <div className="product-description">
                                    <p className="category">{categoryName}</p>
                                    <p className="name">{obj.name}</p>
                                </div>
                            </NavLink>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    )
}

export default Trending