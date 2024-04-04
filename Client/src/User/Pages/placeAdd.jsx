import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { PlaceAdds } from "../../Redux/userSlice";
import UserHeader from "../Components/userHeader";
import Footer from "../Components/footer";

const PlaceAdd = () => {
  const dispatch = useDispatch();
  const [loading, setLoding] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      propertyCategory: "",
      place: "",
      city: "",
      saleOrRent: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      phone: Yup.number().required("Required"),
      propertyCategory: Yup.string().required("Required"),
      place: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      saleOrRent: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setLoding(true);
      const response = await dispatch(PlaceAdds(values));
      if (response?.payload?.data?.status === "success") {
        toast.success(response?.payload?.data?.message);
        setLoding(false);
      } else {
        toast.error(response?.payload?.data?.message);
      }
    },
  });
  return (
    <>
      <body className="ui-smooth-scroll">
        <a href="#main-wrapper" id="backto-top" className="back-to-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/* <!-- Main Wrapper Start --> */}

        <div id="main-wrapper" className="main-wrapper overflow-hidden">
          <div id="scroll-container">
            <UserHeader />
            <section className="inner-banner">
              <div className="container">
                <h2>Place Add</h2>
              </div>
            </section>
            <div
              className="d-flex"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="col-xl-6">
                <div className="contact mb-24">
                  <h2 className="fw-5 fs-23 color-dark-2 font-sec mb-16">
                    {/* Place Your Add */}
                  </h2>
                  <form onSubmit={formik.handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-xl-12 col-md-6 col-12">
                        <div className="form-group mb-16">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            required
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 col-12">
                        <div className="form-group mb-16">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-12">
                        <div className="form-group mb-16">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            required
                            placeholder="Your Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-12">
                        <div className="form-group mb-16">
                          <select
                            className="form-control"
                            id="propertyCategory"
                            name="propertyCategory"
                            value={formik.values.propertyCategory}
                            onChange={formik.handleChange}
                            required
                          >
                            <option value="">Select Property Category</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Townhome">Townhome</option>
                            <option value="Office">Office</option>
                            <option value="Flat">Flat</option>
                            <option value="Villa">Villa</option>
                            <option value="Bungalow">Bungalow</option>
                            <option value="Loft">Loft</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-12">
                        <div className="form-group mb-16">
                          <select
                            className="form-control"
                            id="saleOrRent"
                            name="saleOrRent"
                            value={formik.values.saleOrRent}
                            onChange={formik.handleChange}
                            required
                          >
                            <option value="">Sale Or Rent</option>
                            <option value="Sale">Sale</option>
                            <option value="Rent">Rent</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 col-12">
                        <div className="form-group mb-16">
                          <input
                            type="text"
                            className="form-control"
                            id="place"
                            name="place"
                            value={formik.values.place}
                            onChange={formik.handleChange}
                            required
                            placeholder="Place"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 col-12">
                        <div className="form-group mb-16">
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            required
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-16">
                          <textarea
                            className="form-control"
                            rows="7"
                            required
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="real-btn bordered w-100">
                      {loading ? (
                        <CircularProgress size={24} color="success" />
                      ) : (
                        "Place Add Request"
                      )}
                    </button>
                    <div id="message" className="alert-msg"></div>
                  </form>
                </div>
              </div>
            </div>
            <Footer />
            <ToastContainer position="bottom-center"/>
          </div>
        </div>
      </body>
    </>
  );
};

export default PlaceAdd;
