import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-24">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Main
