import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const SharedLayout = () => {
  return <div className="bg-black-wash min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
}

export default SharedLayout