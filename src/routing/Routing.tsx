import { Route, Routes } from "react-router-dom"
import LayoutClient from "../layouts/LayoutClient"
import Homepage from "../pages/client/Homepage/Homepage"

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LayoutClient />}>
              <Route index element={<Homepage />} />
            </Route>
        </Routes>
    </>
  )
}

export default Routing