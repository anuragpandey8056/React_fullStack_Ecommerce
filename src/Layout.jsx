import { Outlet } from "react-router-dom";
import Topmenu from "./Component/Topmenu";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

const Layout=()=>{
    return(
        <>
        <Header/>
        <Topmenu/>
        <Outlet/>
        <Footer/>
        
        
        
        </>
    )
}
export default Layout;