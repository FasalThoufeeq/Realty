import { useEffect, useState } from "react";
import { Table, Button, Container, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import AdminHeader from "../Components/adminHeader";
import Footer from "../../User/Components/footer";
import {
  DeleteProperty,
  GetAllProperty,
  ListUnlist,
} from "../../Redux/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";

const AdminViewAllProperties = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [properties, setProperties] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [page, setpage] = useState(1);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await dispatch(GetAllProperty());
        if (response?.payload?.data?.status == "success") {
          setProperties(response?.payload?.data?.properties);
        }
      } catch (error) {
        console.log("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [refresh]);
  const listHandler = async (propertyId) => {
    const response = await dispatch(ListUnlist(propertyId));
    if (response?.payload?.data?.status == "success") {
      setRefresh(!refresh);
    }
  };
  const deleteProperty = async (propertyId) => {
    const response = await dispatch(DeleteProperty(propertyId));
    if (response?.payload?.data?.status === "success") {
      toast.success(response?.payload?.data?.meassage);
      setRefresh(!refresh);
    }
  };
  const filteredProperties = properties.filter((property) => {
    if (searchValue === "") {
      return true;
    } else if (
      property?.headline?.toLowerCase().includes(searchValue.toLowerCase()) ||
      property?.subHeading?.toLowerCase().includes(searchValue.toLowerCase()) ||
      property?.place?.toLowerCase().includes(searchValue.toLowerCase()) ||
      property?.propertyCategory
        ?.toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      property?.city?.toLowerCase().includes(searchValue.toLowerCase()) ||
      property?.saleOrRent?.toLowerCase().includes(searchValue.toLowerCase())||
      property?._id?.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
  const handleChangePage = (event, newPage) => {
    setpage(newPage);
  };
  const rowsPerPage = 5;
  const displayProperties = filteredProperties
    ? filteredProperties?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    : [];
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
                <h2>ADMIN PANEL</h2>
              </div>
            </section>
            <Container>
              <Row className="justify-content-md-center mt-5">
                <div className="productSearch">
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Search Users..."
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                      }}
                    />
                  </div>
                  <div className="searchAction">
                    <FaSearch color="#ffffff"></FaSearch>
                  </div>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Headline</th>
                      <th>Sub Heading</th>
                      <th>Category</th>
                      <th>Place</th>
                      <th>City</th>
                      <th>Sale / Rent</th>
                      <th>Sqft</th>
                      <th>Rate</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayProperties.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center">
                          No property found.
                        </td>
                      </tr>
                    ) : (
                      displayProperties.map((property) => (
                        <tr key={property._id}>
                          <td>{property?.headline}</td>
                          <td>{property?.subHeading}</td>
                          <td>{property?.propertyCategory}</td>
                          <td>{property?.place}</td>
                          <td>{property?.city}</td>
                          <td>{property?.saleOrRent}</td>
                          <td>{property?.squarefeet}</td>
                          <td>{property?.rate}</td>
                          <td>
                            <Button
                              variant="primary"
                              onClick={() =>
                                navigate(
                                  `/admin/edit_property?propertyId=${property._id}`
                                )
                              }
                              style={{ marginRight: "10px" }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="primary"
                              onClick={() => listHandler(property?._id)}
                              style={{ marginRight: "10px" }}
                            >
                              {property?.list == true ? "Unlist" : "List"}
                            </Button>

                            <Button
                              variant="primary"
                              onClick={() => {
                                toast.warning(
                                  <div>
                                    <p>
                                      Are you sure you want to delete this
                                      Property?
                                    </p>
                                    <div>
                                      <button
                                        onClick={() => {
                                          deleteProperty(property?._id);
                                          toast.dismiss();
                                        }}
                                        style={{ marginRight: "1rem" }}
                                      >
                                        Yes
                                      </button>
                                      <button onClick={() => toast.dismiss()}>
                                        No
                                      </button>
                                    </div>
                                  </div>,
                                  {
                                    autoClose: false,
                                  }
                                );
                              }}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </Row>
              {displayProperties.length > 0 ? (
                <Pagination
                  count={Math.ceil(filteredProperties?.length / rowsPerPage)}
                  page={page}
                  onChange={handleChangePage}
                  variant="outlined"
                  color="standard"
                  shape="rounded"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    // marginRight: '35rem',
                    marginBottom: "5rem",
                    marginTop: "5rem",
                  }}
                />
              ) : null}
            </Container>
            <Footer />
          </div>
        </div>
      </body>
      <ToastContainer />
    </>
  );
};

export default AdminViewAllProperties;
