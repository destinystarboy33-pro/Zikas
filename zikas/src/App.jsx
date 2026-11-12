import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Home/Index";
import Form from "./Pages/Form";
// import ProductCards from './Home/ProductCards'
import MainLayout from "./Layout/MainLayout";
import ProductDetails from "./Pages/ProductDetails";
import VerifyPayment from "./Pages/VerifyPayment";
import AboutHero from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Admin/Register";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./Admin/Dashboard";
import CreateProduct from "./Admin/CreateProducts";
import Login from "./Admin/Login";
import EditProduct from "./Admin/EditProduct";
import ScrollToTop from "./Components/ScrollToTop";
import Collections from "./Pages/Collections";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />}></Route>

            <Route path="form/:id" element={<Form />}></Route>
            <Route
              path="productdetails/:id"
              element={<ProductDetails />}></Route>
            <Route path="/verify/payment:id" element={<VerifyPayment />}></Route>
            <Route path="/about" element={<AboutHero />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/collections" element= {<Collections />}></Route>
          </Route>

          
          
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element = {<Login />}></Route>

          <Route element ={<AdminLayout />}>
          <Route path="/dashboard" element= {<Dashboard />}></Route>
          <Route path="/admin/createproduct" element= {<CreateProduct />}></Route>
          <Route path="/admin/editproduct/:id" element= {<EditProduct />}></Route>
          
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
