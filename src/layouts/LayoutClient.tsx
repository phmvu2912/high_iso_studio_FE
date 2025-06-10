import { Outlet } from "react-router-dom"
import HeaderClient from "../components/client/HeaderClient/HeaderClient"
import SocialMedia from "../components/client/SocialMedia/SocialMedia"

const LayoutClient = () => {
    return (
        <>
            {/* Header */}
            <HeaderClient />

            <main>
                <Outlet />
            </main>

            <SocialMedia />
        </>
    )
}

export default LayoutClient