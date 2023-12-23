import { useLoaderData } from 'react-router-dom'
import Category from '../Components/Homepage/Category'
import Faq from '../Components/Homepage/Faq'
import Hero from '../Components/Homepage/Hero'
import Partners from '../Components/Homepage/Partners'
import Trending from '../Components/Homepage/Trending'

const HomePage = () => {
    const data = useLoaderData()
    const { products, categories, subCategories } = data.data

    return (
        <>
            <Hero />
            <Category />
            <Trending products={products} categories={categories} subCategories={subCategories} />
            <Partners />
            <Faq />
        </>
    )
}

export default HomePage
