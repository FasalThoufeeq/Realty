import { CircularProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ScheduleTour } from "../../Redux/userSlice";
const PropertyDetailArea = ({ propertyDetail }) => {
  const property = propertyDetail;
  const propertyId = property?._id;
  const dispatch = useDispatch();
  const [loading, setLoding] = useState(false);
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      phone: Yup.number().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setLoding(true);

      const response = await dispatch(
        ScheduleTour({ propertyId, payload: values })
      );
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
          <h2 className="fw-6 fs-40 ls-1 color-dark-2 text-uppercase mb-32 ">
            {property?.headline}
          </h2>
          <div className="item">
            <img
              src={property?.propertyImages[0].url}
              className="radius-10 mb-24"
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "100%",
                maxHeight: "900px",
              }}
              alt=""
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {property?.propertyImages?.length === 1 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "20px",
                  backgroundColor: "#f7f7f7",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  marginBottom: "20px",
                }}
              >
                <Typography variant="h5" color="textSecondary">
                  No Additonal Photos Served
                </Typography>
              </div>
            ) : (
              property.propertyImages.slice(1).map((photo, index) => (
                <div
                  key={index}
                  className="item"
                  style={{
                    width: "300px",
                    height: "150px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={photo.url}
                    className="radius-10 mb-24"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </div>
              ))
            )}
          </div>

          <div className="row">
            <div className="col-xl-4">
              <div className="contact mb-24">
                <h2 className="fw-5 fs-23 color-dark-2 font-sec mb-16">
                  Schedule a Tour
                </h2>
                <form onSubmit={formik.handleSubmit} className="review-form">
                  <div className="row">
                    <div className="col-xl-12 col-md-6 col-12">
                      <div className="form-group mb-24">
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          value={formik.values.date}
                          onChange={formik.handleChange}
                          name="date"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-12">
                      <div className="form-group mb-24">
                        <input
                          type="time"
                          className="form-control"
                          value={formik.values.time}
                          onChange={formik.handleChange}
                          id="time"
                          name="time"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-12">
                      <div className="form-group mb-24">
                        <input
                          type="text"
                          className="form-control"
                          id="_name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          required
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-12">
                      <div className="form-group mb-24">
                        <input
                          type="email"
                          className="form-control"
                          id="_email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          required
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-12">
                      <div className="form-group mb-24">
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          required
                          placeholder=" Your Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-24">
                        <textarea
                          className="form-control"
                          required
                          name="message"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="form-btn">
                    {loading ? (
                      <CircularProgress size={24} color="success" />
                    ) : (
                      "Submit A Tour Request"
                    )}
                  </button>

                  <div id="_message" className="alert-msg"></div>
                </form>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="house-detail">
                <h2 className="st-2">Details</h2>
                <ul className="list-unstyled">
                  <li>
                    <img src="./assets/media/icon/bed.png" alt="" />2 Bed Rooms
                  </li>
                  <li>
                    <img src="./assets/media/icon/toom.png" alt="" />2 Bath
                    Rooms
                  </li>
                  <li>
                    <img src="./assets/media/icon/scale.png" alt="" />
                    {property?.squarefeet} sq. ft.
                  </li>
                  {/* <li>
                  <img src="./assets/media/icon/brick-wall.png" alt="" />
                  Year Build 2014
                </li>
                <li>
                  <img src="./assets/media/icon/garage.png" alt="" />
                  Garages
                </li> */}
                  <li>
                    <img src="./assets/media/icon/home.png" alt="" />
                    {property?.propertyCategory}
                  </li>
                </ul>
              </div>
              <div className="house-detail">
                <h2 className="mb-16">Overview</h2>
                <p className="mb-0">{property?.shortParagraph}</p>
              </div>
              {/* <div className="house-detail">
              <h2 className="mb-16">Location</h2>
              <span className="mb-16">678 Ocean View Drive</span>
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395364528967!2d-122.08626633780452!3d37.421994070413874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2ske!4v1585314748051!5m2!1sen!2ske"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  aria-hidden={false}
                  tabIndex={0}
                ></iframe>
              </div>
            </div> */}
              {/* <div className="house-detail">
              <h2 className="mb-16">Floor Plans</h2>
              <div className="row" id="faqExample">
                <div className="col-12">
                  <div className="text-block bg-white-1 radius-10 mb-16">
                    <button
                      className="accordion-button collapsed fw-6 fs-25 font-sec color-dark-2 lh-130 "
                      data-bs-toggle="collapse"
                      data-bs-target="#slide1"
                      aria-expanded="true"
                      aria-controls="slide1"
                    >
                      <span className="st-1">
                        <i className="fal fa-angle-down"></i> First Floor
                      </span>
                      <samp className="d-flex align-items-center justify-content-between">
                        <span>Rooms: 2</span>
                        <span>Baths: 2</span>
                        <span>Size: 200 sq. ft.</span>
                      </samp>
                    </button>
                    <div
                      id="slide1"
                      className="accordion-collapse collapse"
                      aria-labelledby="slide1"
                      data-bs-parent="#faqExample"
                    >
                      <img src="./assets/media/about/blue-print.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-block bg-white-1 radius-10 mb-16">
                    <button
                      className="accordion-button collapsed fw-6 fs-25 font-sec color-dark-2 lh-130"
                      data-bs-toggle="collapse"
                      data-bs-target="#slide2"
                      aria-expanded="true"
                      aria-controls="slide2"
                    >
                      <span className="st-1">
                        <i className="fal fa-angle-down"></i> Second Floor
                      </span>
                      <samp className="d-flex align-items-center justify-content-between">
                        <span>Rooms: 2</span>
                        <span>Baths: 2</span>
                        <span>Size: 200 sq. ft.</span>
                      </samp>
                    </button>
                    <div
                      id="slide2"
                      className="accordion-collapse collapse "
                      aria-labelledby="slide2"
                      data-bs-parent="#faqExample"
                    >
                      <img src="./assets/media/about/blue-print.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-block bg-white-1 radius-10 mb-0">
                    <button
                      className="accordion-button collapsed fw-6 fs-25 font-sec color-dark-2 lh-130"
                      data-bs-toggle="collapse"
                      data-bs-target="#slide3"
                      aria-expanded="true"
                      aria-controls="slide3"
                    >
                      <span className="st-1">
                        <i className="fal fa-angle-down"></i> Third Floor
                      </span>
                      <samp className="d-flex align-items-center justify-content-between">
                        <span>Rooms: 2</span>
                        <span>Baths: 2</span>
                        <span>Size: 200 sq. ft.</span>
                      </samp>
                    </button>
                    <div
                      id="slide3"
                      className="accordion-collapse collapse "
                      aria-labelledby="slide3"
                      data-bs-parent="#faqExample"
                    >
                      <img src="./assets/media/about/blue-print.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
              {/* <div className="house-detail">
              <h2 className="mb-16">video</h2>
              <div className="video" id="vid">
                <div className="img-box">
                  <img
                    className="detail-image"
                    src="./assets/media/about/img-3.png"
                    alt=""
                  />
                  <div className="overlay">
                    <a href="#vid" className="play-btn">
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
                <div className="video-box">
                  <video controls>
                    <source
                      src="https://vjs.zencdn.net/v/oceans.mp4?HD"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div> */}
              {/* <div className="house-detail">
              <h2 className="mb-16">(3 Reviews)</h2>
              <div className="review border-0 mb-32">
                <div className="d-flex align-items-center justify-content-between mb-16">
                  <div className="user">
                    <img src="./assets/media/user/img-8.png" alt="" />
                    <div className="content">
                      <h4>Sarah M</h4>
                      <p>May 10, 2023</p>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p>
                  {
                    "My family and I have been living in Forest Heights Homes for the past 2 years and we absolutely love it here. The community is safe and welcoming, and the amenities are top-notch. The management team is also very responsive and helpful."
                  }
                </p>
              </div>
              <div className="review border-0 mb-32">
                <div className="d-flex align-items-center justify-content-between mb-16">
                  <div className="user">
                    <img src="./assets/media/user/img-9.png" alt="" />
                    <div className="content">
                      <h4>John D</h4>
                      <p>May 12, 2023</p>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p>
                  {
                    "I had a great experience renting a home in Forest Heights. The property was well-maintained, and the leasing process was easy and straightforward. I highly recommend Forest Heights Homes for anyone looking for a comfortable and convenient place to live."
                  }
                </p>
              </div>
              <div className="review border-0 mb-0">
                <div className="d-flex align-items-center justify-content-between mb-16">
                  <div className="user">
                    <img src="./assets/media/user/img-10.png" alt="" />
                    <div className="content">
                      <h4>Emily P</h4>
                      <p>May 14, 2023</p>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="mb-0">
                  {
                    "I recently purchased a home in Forest Heights and couldn't be happier with my decision. The community is peaceful, the homes are beautiful, and the location is unbeatable. Highly recommend!"
                  }
                </p>
              </div>
            </div>
            <div className="house-detail">
              <h2>add a Review</h2>
              <div className="d-flex align-items-center">
                <div className="user">
                  <h6 className="pe-3">Rating</h6>
                </div>
                <div className="form-group">
                  <fieldset>
                    <span className="star-cb-group">
                      <input
                        type="radio"
                        id="rating-5"
                        name="rating"
                        value="5"
                      />
                      <label htmlFor="rating-5">5</label>
                      <input
                        type="radio"
                        id="rating-4"
                        name="rating"
                        value="4"
                      />
                      <label htmlFor="rating-4">4</label>
                      <input
                        type="radio"
                        id="rating-3"
                        name="rating"
                        value="3"
                      />
                      <label htmlFor="rating-3">3</label>
                      <input
                        type="radio"
                        id="rating-2"
                        name="rating"
                        value="2"
                      />
                      <label htmlFor="rating-2">2</label>
                      <input
                        type="radio"
                        id="rating-1"
                        name="rating"
                        value="1"
                        checked="checked"
                      />
                      <label htmlFor="rating-1">1</label>
                      <input
                        type="radio"
                        id="rating-0"
                        name="rating"
                        value="0"
                        className="star-cb-clear"
                      />
                      <label htmlFor="rating-0">0</label>
                    </span>
                  </fieldset>
                </div>
              </div>
              <form
                method="post"
                action="./properties-detail.html"
                className="rev-form"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="form-group mb-16">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="form-group mb-16">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="formGroup mb-16">
                      <input type="checkbox" id="keepcheck" />
                      <label htmlFor="keepcheck">
                        Keep me posted via email for future comments on this
                        website.
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-16">
                      <textarea
                        className="form-control"
                        required
                        name="message"
                        placeholder="Review"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="form-btn">
                  Submit Review
                </button>

                <div id="message" className="alert-msg"></div>
              </form>
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-center"/>
    </>
  );
};
PropertyDetailArea.propTypes = {
  propertyDetail: PropTypes.object.isRequired,
};

export default PropertyDetailArea;
