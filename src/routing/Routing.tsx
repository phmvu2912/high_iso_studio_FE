import { Route, Routes } from "react-router-dom"
import LayoutClient from "../layouts/LayoutClient"

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LayoutClient />}>
            
            </Route>
        </Routes>
    </>
  )
}

export default Routing