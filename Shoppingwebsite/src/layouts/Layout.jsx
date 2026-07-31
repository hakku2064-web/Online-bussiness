import Header from "../components/nav/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
function Layout() {
  return (
   <>
   <Header/>
   <main><Outlet/></main>
   
   <Footer/>
   </>
  )
}

export default Layout