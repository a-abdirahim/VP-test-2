
import { FaSearch } from "react-icons/fa"
import Filter from "../Common/Filter";
import { useState } from "react";
import "./SearchAndFilter.scss"

const SearchAndFilter = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("")
    const handleOnchange = (e) => {
        const text = e.target.value;
        setSearchText(text)
        onSearch(text)
    }
    return (
        <div className="category-section">
            <div className="search-bar">
                <input type="text" placeholder="search..." onChange={handleOnchange} value={searchText} />
                <FaSearch className="search-icon" />
            </div>
            <Filter />
        </div>
    )
}

export default SearchAndFilter