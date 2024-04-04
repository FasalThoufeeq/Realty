import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserHome from "./User/Pages/userHome";
import UserAbout from "./User/Pages/userAbout";
import UserProperties from "./User/Pages/userProperties";
import Contact from "./User/Pages/contact";
import PropertyDetails from "./User/Pages/propertyDetails";
import AdminViewAllProperties from "./Admin/Pages/adminViewAllProperties";
import AdminAddProperty from "./Admin/Pages/adminAddProperty";
import AdminLogin from "./Admin/Pages/adminLogin";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminEditProperty from "./Admin/Pages/adminEditProperty";
import PlaceAdd from "./User/Pages/placeAdd";

function App() {
  const adminToken = useSelector((state) => state?.admin?.admin?.token);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/about" element={<UserAbout />} />
          <Route path="/properties" element={<UserProperties />} />
          <Route path="/prodetails" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/place_add" element={<PlaceAdd />} />

          <Route
            path="/admin"
            element={
              adminToken ? (
                <AdminViewAllProperties />
              ) : (
                <Navigate to={"/admin/login"} />
              )
            }
          />
          <Route
            path="/admin/add_property"
            element={
              adminToken ? (
                <AdminAddProperty />
              ) : (
                <Navigate to={"/admin/login"} />
              )
            }
          />
          <Route
            path="/admin/edit_property"
            element={
              adminToken ? (
                <AdminEditProperty />
              ) : (
                <Navigate to={"/admin/login"} />
              )
            }
          />
          <Route
            path="/admin/login"
            element={adminToken ? <Navigate to={"/admin"} /> : <AdminLogin />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
