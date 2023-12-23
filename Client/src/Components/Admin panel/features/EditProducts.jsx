import { NavLink, useRouteLoaderData } from "react-router-dom"
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Edit.scss"
import { FaSearch } from "react-icons/fa";
import parser from "html-react-parser"

const EditProducts = () => {
    const { data } = useRouteLoaderData("product-loader")
    const { products } = data
    const allProducts = products

    const handleDelete = (id) => {
        axios.delete("http://127.0.0.1:3000/api/v1/products/" + id)
            .then(() => {
                toast.success("product deleted succesfully")
                setTimeout(() => {
                    window.location.reload()
                }, 3000);
            })
            .catch(err => {
                console.log(err)
                toast.error("an error eccoured")
            })

    }
    return (
        <div className='edit-container'>
            <ToastContainer />
            <div className="search-container">
                <input type="text" className="search-bar" />
                <FaSearch className="search-icon" />
            </div>
            {allProducts.length < 1 && <p style={{ textAlign: "center" }}>No Products Available 😥</p>}
            {allProducts.map((product) => {
                return (
                    <div className="product-container" key={product._id}>
                        <div className="product-details">
                            <img src={`http://127.0.0.1:3000/public/uploads/products/${product.productImage}`} alt="product image" />
                            <div className="product-info">
                                <p>{product.name}</p>
                                <p>{parser(product.description)}</p>
                            </div>
                        </div>
                        <div className="btn-container">
                            <NavLink to={`/admin/edit/${product._id}`} state={{ product }}>
                                <button>Edit</button>
                            </NavLink>
                            <button onClick={() => handleDelete(product._id)}>delete</button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default EditProducts