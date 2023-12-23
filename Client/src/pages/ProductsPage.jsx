import { json, useRouteLoaderData } from "react-router-dom"

import Products from "../Components/Products/Products"
import EnquireProvider from "../store/EnquireContextProvider"

const ProductsPage = () => {
    const { data } = useRouteLoaderData("root")
    const { categories, subCategories, products } = data


    return (
        <EnquireProvider>
            <Products categories={categories} products={products} subCategories={subCategories} />
        </EnquireProvider >
    )
}



export default ProductsPage

export const loader = async () => {
    const data = await fetch("http://127.0.0.1:3000/api/v1/products")
    if (!data.ok) {
        throw json({ message: "Could not fetch documents.." })
    } else {
        const res = await data.json()
        const newRes = res.data.data
        return { data: newRes }
    }

}