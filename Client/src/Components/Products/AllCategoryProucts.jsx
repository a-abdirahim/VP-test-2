/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, useParams, useRouteLoaderData } from "react-router-dom"
import { useSearch } from "../../Hooks/UseSearch";

import SearchAndFilter from "../Common/SearchAndFilter";
import ReactPaginate from 'react-paginate';
import { BsArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import "./AllCategoryProducts.scss"

const ITEMS_PER_PAGE = 8

const AllCategoryProucts = () => {

    const { data } = useRouteLoaderData("root")
    const { subCategories, categories, products } = data
    const allCategories = categories
    const allSubCategories = subCategories
    const allProducts = products
    const { category } = useParams()

    const [currentPage, setCurrentPage] = useState(0);
    const { searchText, handleSearch } = useSearch("");
    const subCategoryMap = {}
    allSubCategories.forEach(subCategory => {
        subCategoryMap[subCategory._id] = subCategory.name
    })
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const selectedCategory = allCategories.find(cat => cat.slug === category)

    const productsForSubcategory = allProducts.filter(product => {
        return product.category === selectedCategory._id;
    });
    const offset = currentPage * ITEMS_PER_PAGE;
    const paginatedProducts = productsForSubcategory.slice(offset, offset + ITEMS_PER_PAGE);
    const filteredProduct = paginatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="all-product-section">
            <SearchAndFilter onSearch={handleSearch} />
            <div className="product-wrapper">
                {filteredProduct.length === 0 ? (
                    <p className="nothing-found">No product found with that name</p>
                ) : (
                    filteredProduct.map(obj => (
                        <ProductLink
                            key={obj._id}
                            product={obj}
                            category={category}
                            selectedCategory={selectedCategory}
                            imageUrl={obj.productImage}
                        />
                    ))
                )}
            </div>
            {paginatedProducts.length > ITEMS_PER_PAGE && (
                <div className="paginate">
                    <ReactPaginate
                        previousLabel={<BsArrowLeftCircleFill />}
                        nextLabel={<BsFillArrowRightCircleFill />}
                        pageCount={Math.ceil(allProducts.length / ITEMS_PER_PAGE)}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        onClick={handleOnscroll}
                    />
                </div>
            )}
        </div>
    )
}

function ProductLink({ product, category, selectedCategory, imageUrl }) {

    return (
        <NavLink
            key={product._id}
            to={`/allProducts/${category}/all/${product.slug}`}
        >
            <div className='products-container'>
                <div className="product-image">
                    <img src={imageUrl} alt="microscope" crossOrigin='anonymous' />
                </div>
                <div className="product-detail">
                    <p className="category">{selectedCategory.name}</p>
                    <p className="sub-category">{product.name}</p>
                </div>
            </div>
        </NavLink>
    );
}

export default AllCategoryProucts