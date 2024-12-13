import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Mycart from "./Pages/Mycart"
import About from "./Pages/About"
import Model from "./Pages/Model"
import Contact from "./Pages/Contact"
import Checkout from "./Pages/Checkout"
import PaymentDone from "./Pages/PaymentDone"
import Login from "./Pages/Login"
import Dashboard from "./Dashboard/dashboard"
import Register from "./Pages/Register"
import Insert from "./Dashboard/Insert"
import OrderPlaced from "./Dashboard/OrderPlaced"
import Display from "./Dashboard/Display"
import Edit from "./Dashboard/Edit"
import Dashhome from "./Dashboard/Dashhome"
import Search from "./Pages/Search"
import ProductDetail from "./Pages/ProductDetail"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Mycart />} />
            <Route path="About" element={<About />} />
            <Route path="search" element={<Search/>}/>
            <Route path="model" element={<Model />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/checkout/:amt" element={<Checkout />} />
            <Route path="paymentdone" element={<PaymentDone />}/>
            <Route path="/dashboard/home" element={<Home/>}/>
            <Route path="/shop/productdetail/:id" element={<ProductDetail/>}/>
            <Route path="/search/productdetail/:id" element={<Search/>}/>


            
          </Route>
          <Route path="/dashboard/logout" element={<Login/>}/>
          <Route index element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Dashhome />} />

            <Route path="insert" element={<Insert />} />
            <Route path="oderhistory" element={<OrderPlaced />} />
            <Route path="display" element={<Display />} />
            <Route path="editrec/:id" element={<Edit />} />
            <Route path="dashhome" element={<Dashhome />} />


          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
