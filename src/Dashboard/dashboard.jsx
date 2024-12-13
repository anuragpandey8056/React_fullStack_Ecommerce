import { Outlet,Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const Dashboard = () => {
    const navigate=useNavigate;
    return (
        <>
            <section>
                <nav className="navbar">
                    <h1>Dashboard</h1>
                    <ul className="nav-links">
                      <Link to="home"><li><IoIosHome style={{fontSize:"24px",color:"pink"}} /></li></Link>                     
                      <Link to="home"><li><IoSettings style={{fontSize:"24px",color:"pink"}} /></li></Link>                     
                      
                        <Link to="logout"><li><IoMdLogOut style={{fontSize:"24px",color:"pink"}} /></li></Link>  

                    </ul>
                </nav>
            </section>

            <section id="section2" className="dashboard-body">
                <aside className="sidebar">
                    <ul id="navbaraside">
                      <Link to="dashhome"><li>Home</li></Link>  
                      <Link to="insert" ><li>Insert</li></Link> 
                      <Link to="oderhistory"><li>OrderHistory</li></Link>  
                      <Link to="display"><li>Display</li></Link>  
                      <Link><li>Help</li></Link>  

                       

                    </ul>
                </aside>

                <div className="main-content">
                  
                    <Outlet/>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
