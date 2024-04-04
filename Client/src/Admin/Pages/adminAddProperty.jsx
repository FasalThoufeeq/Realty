import { useState } from "react";
import AdminHeader from "../Components/adminHeader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { AddProperty } from "../../Redux/adminSlice";
import {
  Autocomplete,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import Footer from "../../User/Components/footer";
import { uploadCloudinary } from "../../api/clodinaryApi";

const AdminAddProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setloading] = useState(false);
  const formik = useFormik({
    initialValues: {
      headline: "",
      subHeading: "",
      propertyCategory: "",
      place: "",
      city: "",
      shortParagraph: "",
      saleOrRent: "",
      squarefeet: "",
      rate: "",
      rateInWords: "",
      bedCount: "",
      bathCount: "",
      propertyImages: [],
    },
    validationSchema: Yup.object({
      headline: Yup.string().required("Required"),
      subHeading: Yup.string().required("Required"),
      propertyCategory: Yup.string().required("Required"),
      place: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      shortParagraph: Yup.string()
        .min(20, "Must be atleast 20 characters")
        .max(200, "Not more than 200 character")
        .required("Required"),
      saleOrRent: Yup.string().required("Required"),
      squarefeet: Yup.string().required("Required"),
      rate: Yup.string().required("Required"),
      bedCount: Yup.string().required("Required"),
      bathCount: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setloading(true);
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        arr.push(data);
      }
      values.propertyImages = arr;
      const response = await dispatch(AddProperty(values));
      if (response?.payload?.data?.status === "success") {
        toast.success(response?.payload?.data?.message);
        setloading(false);
        navigate("/admin");
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
            <AdminHeader />
            <section className="inner-banner">
              <div className="container">
                <h2>ADD PROPERTY</h2>
              </div>
            </section>
            <Container style={{ marginTop: "30px" }}>
              <form
                encType="multipart/form-data"
                onSubmit={formik.handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="headline"
                      name="headline"
                      label="Headline"
                      value={formik.values.headline}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.headline &&
                        Boolean(formik.errors.headline)
                      }
                      helperText={
                        formik.touched.headline && formik.errors.headline
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="subHeading"
                      name="subHeading"
                      label="Sub Heading"
                      value={formik.values.subHeading}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.subHeading &&
                        Boolean(formik.errors.subHeading)
                      }
                      helperText={
                        formik.touched.subHeading && formik.errors.subHeading
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="place"
                      name="place"
                      label="Place"
                      value={formik.values.place}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.place && Boolean(formik.errors.place)
                      }
                      helperText={formik.touched.place && formik.errors.place}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="city"
                      name="city"
                      label="City"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Autocomplete
                      id="propertyCategory"
                      name="propertyCategory"
                      options={[
                        "House",
                        "Apartment",
                        "Townhome",
                        "Office",
                        "Flat",
                        "Villa",
                        "Bungalow",
                        "Loft",
                      ]}
                      value={formik.values.propertyCategory || ""}
                      onChange={(event, value) =>
                        formik.setFieldValue("propertyCategory", value)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          label="Propety Catogery"
                          error={
                            formik.touched.propertyCategory &&
                            Boolean(formik.errors.propertyCategory)
                          }
                          helperText={
                            formik.touched.propertyCategory &&
                            formik.errors.propertyCategory
                          }
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Autocomplete
                      id="saleOrRent"
                      name="saleOrRent"
                      options={["Sale", "Rent"]}
                      value={formik.values.saleOrRent || ""}
                      onChange={(event, value) =>
                        formik.setFieldValue("saleOrRent", value)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          label="Sale Or Rent"
                          error={
                            formik.touched.saleOrRent &&
                            Boolean(formik.errors.saleOrRent)
                          }
                          helperText={
                            formik.touched.saleOrRent &&
                            formik.errors.saleOrRent
                          }
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="number"
                      id="squarefeet"
                      name="squarefeet"
                      label="squarefeet"
                      value={formik.values.squarefeet}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.squarefeet &&
                        Boolean(formik.errors.squarefeet)
                      }
                      helperText={
                        formik.touched.squarefeet && formik.errors.squarefeet
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      fullWidth
                      id="rate"
                      name="rate"
                      label="Rate"
                      value={formik.values.rate}
                      onChange={formik.handleChange}
                      error={formik.touched.rate && Boolean(formik.errors.rate)}
                      helperText={formik.touched.rate && formik.errors.rate}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      fullWidth
                      id="bedCount"
                      name="bedCount"
                      label="Bed Count"
                      value={formik.values.bedCount}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.bedCount &&
                        Boolean(formik.errors.bedCount)
                      }
                      helperText={
                        formik.touched.bedCount && formik.errors.bedCount
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      fullWidth
                      id="bathCount"
                      name="bathCount"
                      label="Bath Count"
                      value={formik.values.bathCount}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.bathCount &&
                        Boolean(formik.errors.bathCount)
                      }
                      helperText={
                        formik.touched.bathCount && formik.errors.bathCount
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      type="text"
                      fullWidth
                      id="rateInWords"
                      name="rateInWords"
                      label="Rate In Words for Display"
                      value={formik.values.rateInWords}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.rateInWords &&
                        Boolean(formik.errors.rateInWords)
                      }
                      helperText={
                        formik.touched.rateInWords && formik.errors.rateInWords
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      id="shortParagraph"
                      name="shortParagraph"
                      label="Short Paragraph"
                      value={formik.values.shortParagraph}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.shortParagraph &&
                        Boolean(formik.errors.shortParagraph)
                      }
                      helperText={
                        formik.touched.shortParagraph &&
                        formik.errors.shortParagraph
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <input
                      type="file"
                      id="propertyImages"
                      name="propertyImages"
                      accept="image/*"
                      onChange={(event) => {
                        const files = Array.from(event.target.files);
                        if (files.length > 0 && files.length <= 5) {
                          // formik.setFieldValue("propertyImages", files);
                          setImages(files);
                        } else {
                          event.target.value = null;
                          setImages([]);
                          // formik.setFieldValue("propertyImages", []);
                          toast.error("You can only upload up to 5 images.");
                        }
                      }}
                      multiple={true}
                      style={{ display: "none" }}
                    />
                    <Button
                      variant="contained"
                      component="span"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        marginBottom: "20px",
                      }}
                      onClick={() =>
                        document.getElementById("propertyImages").click()
                      }
                    >
                      Upload Images
                    </Button>
                    {images.length > 0 && (
                      <div>
                        {images.map((image, index) => (
                          <div key={index}>
                            <span>{image.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      style={{ backgroundColor: "black", marginBottom: "70px" }}
                      type="submit"
                      fullWidth
                      variant="contained"
                      //   className={classes.customButton}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="success" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
            <Footer />
          </div>
        </div>
      </body>
      <ToastContainer />
    </>
  );
};

export default AdminAddProperty;
