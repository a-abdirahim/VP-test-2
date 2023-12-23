import { useEffect, useState } from 'react'
import { Outlet, useNavigation } from "react-router-dom"

import ScaleLoader from "react-spinners/ScaleLoader";
import Navigation from "../Components/Common/Navigation"
import Footer from "../Components/Homepage/Footer"
import GetQuote from "../Components/Common/GetQuote"
import Whatsapp from '../Components/UI/Whatsapp';


const RootLayout = () => {
    const navigation = useNavigation()
    let [loading, setLoading] = useState(false)
    const [formIsShown, setFormIsShown] = useState(false)
    const [ShowSideMenu, setShowSideMenu] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000);
        return () => clearTimeout()
    }, [loading])
    const showFormHandler = () => {
        setFormIsShown(formIsShown => !formIsShown)
    }
    const closeFormHandler = () => {
        setFormIsShown(formIsShown => formIsShown !== true)
    }
    const handleShowSideMenu = () => {
        setShowSideMenu(true)
    }
    const handleCloseSideMenu = () => {
        setShowSideMenu(false)
    }
    return (
        <>
            <Navigation onShowForm={showFormHandler} onShowSide={handleShowSideMenu} onCloseSide={handleCloseSideMenu} />
            {formIsShown && <GetQuote onClose={closeFormHandler} />}
            <main >
                <Whatsapp />
                {navigation.state === "loading" &&
                    <ScaleLoader
                        className="loader"
                        color={"#1d9b47"}
                        loading={loading}
                        size={800}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                }
                {navigation.state === 'idle' && <Outlet />}
            </main>
            <Footer />
        </>
    )
}

export default RootLayout