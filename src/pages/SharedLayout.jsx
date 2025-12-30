import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const SharedLayout = () => {
  return <div className="bg-black-wash min-h-screen">
      <Navbar />
      <Outlet />
    </div>
}

export default SharedLayout