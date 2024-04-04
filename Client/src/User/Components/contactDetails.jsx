import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { ContactMail } from "../../Redux/userSlice";
import { CircularProgress } from "@mui/material";
const ContactDetails = () => {
  const dispatch = useDispatch();
  const [loading, setLoding] = useState(false);
  const formik = useFormik({
    initialValues: {
      f_name: "",
      l_name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      f_name: Yup.string().required("Required"),
      l_name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      phone: Yup.number().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setLoding(true);
      const response = await dispatch(ContactMail(values));
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
      <section className="properties-detail bg-white p-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="contact mb-24">
                <h2 className="fw-5 fs-23 color-dark-2 font-sec mb-16">
                  Feel Free To Contact Us
                </h2>
                <form onSubmit={formik.handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-xl-12 col-md-6 col-12">
                      <div className="form-group mb-16">
                        <input
                          type="text"
                          className="form-control"
                          id="f_name"
                          name="f_name"
                          value={formik.values.f_name}
                          onChange={formik.handleChange}
                          required
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-12">
                      <div className="form-group mb-16">
                        <input
                          type="text"
                          className="form-control"
                          id="l_name"
                          name="l_name"
                          value={formik.values.l_name}
                          onChange={formik.handleChange}
                          required
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-12">
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
                    <div className="col-xl-12 col-12">
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
                      "Send Message"
                    )}
                  </button>
                  <div id="message" className="alert-msg"></div>
                </form>
              </div>
            </div>
            <div className="col-xl-8 mb-32">
              <div className="map bg-gray p-32 radius-10">
                <h2 className="fw-6 fs-33 color-dark-2 font-sec lh-120 mb-16 text-capitalize">
                  We welcome your inquiries and look forward to hearing from
                  you.
                </h2>
                <p className="color-gray-4 font-sec mb-16">
                  Feel free to reach out to us with any questions or inquiries
                  you may have. We value your interest in our services and look
                  forward to the opportunity to assist you in any way we can.{" "}
                </p>
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395364528967!2d-122.08626633780452!3d37.421994070413874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2ske!4v1585314748051!5m2!1sen!2ske"
                    height={516}
                    style={{ border: "0" }}
                    allowFullScreen={true}
                    aria-hidden={false}
                    tabIndex={0}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-12">
              <div className="contact-link bg-gray p-32 radius-10 mb-24 mb-lg-0">
                <h5 className="fw-5 fs-23 color-dark-2 font-sec mb-16">
                  Call Us:
                </h5>
                <a
                  href="tel:0471 4607022"
                  className="fw-4 fs-19 lh-130 color-gray-4 m-0 color-hover font-sec d-inline-block"
                >
                  0471 4607022
                </a>
                <a
                  href="tel:9072552100"
                  className="fw-4 fs-19 lh-130 color-gray-4 m-0 color-hover font-sec d-inline-block ms-4"
                >
                  +91 9072552100
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-12">
              <div className="contact-link bg-gray p-32 radius-10 mb-24 mb-lg-0">
                <h5 className="fw-5 fs-23 color-dark-2 font-sec mb-16">
                  Address:
                </h5>
                <p className="fw-4 fs-19 lh-130 color-gray-4 m-0 font-sec d-inline-block">
                  TC 44/780, Jagathy, Kochar Road Thiruvananthapuram, Kerala,
                  695014{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-12">
              <div className="contact-link bg-gray p-32 radius-10">
                <h5 className="fw-5 fs-23 color-dark-2 font-sec mb-16">
                  Email:
                </h5>
                <a
                  href="mailto:info@homelyexample.com"
                  className="fw-4 fs-19 lh-130 color-gray-4 m-0 color-hover font-sec d-inline-block"
                >
                  support@onedealsrealty.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default ContactDetails;
