import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Autocomplete,
  Pagination,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
const PropertyArea = ({ properties }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBedCount, setSelectedBedCount] = useState("");
  const [selectedBathCount, setSelectedBathCount] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200000000]);
  const [page, setpage] = useState(1);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const cities = Array.from(
    new Set(properties.map((property) => property.city))
  ).sort();

  const filteredProperties = properties.filter((property) => {
    if (selectedCity && property?.city !== selectedCity) {
      return false;
    }

    if (selectedCategory && property?.propertyCategory !== selectedCategory) {
      return false;
    }

    if (
      selectedBedCount &&
      parseInt(property?.bedCount) < parseInt(selectedBedCount)
    ) {
      return false;
    }

    if (
      selectedBathCount &&
      parseInt(property?.bathCount) < parseInt(selectedBathCount)
    ) {
      return false;
    }

    const propertyPrice = parseInt(property.rate);
    if (propertyPrice < priceRange[0] || propertyPrice > priceRange[1]) {
      return false;
    }

    return true;
  });

  const handleChangePage = (event, newPage) => {
    setpage(newPage);
  };
  const rowsPerPage = 4;
  const displayProperties = filteredProperties
    ? filteredProperties?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    : [];

  return (
    <section className="check-out bg-white p-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-12">
            <div className="row">
              {displayProperties.length > 0 ? (
                displayProperties.map((property) => {
                  if (!property.list) {
                    return null;
                  }
                  return (
                    <div
                      key={property?._id}
                      className="col-lg-6 col-md-6 col-12"
                    >
                      <div className="content mb-24">
                        <div className="img-block position-relative ">
                          <img src={property?.propertyImages[0]?.url} alt="" />
                          <span className="color-dark-3 bg-white position-absolute">
                            ₹ {property?.rateInWords}
                          </span>
                        </div>
                        <a href="properties-detail.html">
                          {property?.headline}
                        </a>
                        <p>
                          {property?.place}, {property?.city}
                        </p>
                        <ul className="list-unstyled">
                          <li>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.9793 7.85904V2.8301C14.9793 1.60685 13.9841 0.611694 12.7609 0.611694H3.1754C1.95215 0.611694 0.956995 1.60688 0.956995 2.8301V7.92391C0.364495 8.54335 2.67029e-05 9.38263 2.67029e-05 10.3054V14.1187C2.67029e-05 14.8186 0.569495 15.3881 1.2695 15.3881C1.96946 15.3881 2.53893 14.8186 2.53893 14.1187V13.7249H13.4612V14.1187C13.4612 14.8186 14.0306 15.3881 14.7306 15.3881C15.4306 15.3881 16 14.8187 16 14.1187V10.3054C16 9.34998 15.6093 8.4841 14.9793 7.85904ZM3.1754 1.23669H12.7609C13.6395 1.23669 14.3543 1.95151 14.3543 2.8301V7.3672C14.1629 7.24935 13.9592 7.14966 13.7456 7.0706V6.03141C13.7456 5.11016 12.9961 4.36066 12.0748 4.36066H9.35831C8.79906 4.36066 8.30346 4.63713 8.00006 5.06029C7.69665 4.63713 7.20106 4.36066 6.64181 4.36066H3.92531C3.00406 4.36066 2.25456 5.11013 2.25456 6.03141V7.0706C2.01703 7.15851 1.79175 7.27188 1.58203 7.40738V2.8301C1.582 1.95151 2.29678 1.23669 3.1754 1.23669ZM3.44793 6.85754C3.25434 6.85754 3.06446 6.87385 2.8795 6.90466V6.03141C2.8795 5.45479 3.34862 4.98566 3.92525 4.98566H6.64175C7.21837 4.98566 7.6875 5.45479 7.6875 6.03141V6.85757H3.44793V6.85754ZM8.31253 6.03138C8.31253 5.45476 8.78165 4.98563 9.35828 4.98563H12.0748C12.6514 4.98563 13.1205 5.45476 13.1205 6.03138V6.90463C12.9355 6.87382 12.7457 6.85751 12.5521 6.85751H8.31253V6.03138ZM3.44793 7.48254H12.5521C14.1087 7.48254 15.375 8.74888 15.375 10.3054V11.2325H12.2407C12.0682 11.2325 11.9282 11.3725 11.9282 11.545C11.9282 11.7176 12.0682 11.8575 12.2407 11.8575H15.375V13.0999H0.625027V11.8575H9.11575C9.28834 11.8575 9.42825 11.7176 9.42825 11.545C9.42825 11.3725 9.28834 11.2325 9.11575 11.2325H0.625027V10.3054C0.625027 8.74888 1.89137 7.48254 3.44793 7.48254ZM1.91393 14.1187C1.91393 14.474 1.62484 14.7631 1.2695 14.7631C0.914152 14.7631 0.625027 14.474 0.625027 14.1187V13.7249H1.91393V14.1187ZM14.7306 14.7631C14.3752 14.7631 14.0861 14.474 14.0861 14.1187V13.7249H15.375V14.1187C15.375 14.474 15.0859 14.7631 14.7306 14.7631Z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            {property?.bedCount} Beds
                          </li>
                          <li>
                            <svg
                              width="14"
                              height="16"
                              viewBox="0 0 14 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.789 0H0.601547C0.47211 0 0.367172 0.104906 0.367172 0.234375V15.7656C0.367172 15.8951 0.47211 16 0.601547 16H12.789C12.9185 16 13.0234 15.8951 13.0234 15.7656V0.234375C13.0234 0.104906 12.9185 0 12.789 0ZM0.835922 1.40625H2.71092C3.09864 1.40625 3.41405 1.72169 3.41405 2.10938V2.42325C2.69667 2.52634 2.12789 3.09512 2.0248 3.8125H1.92967C1.80023 3.8125 1.6953 3.91741 1.6953 4.04688C1.6953 4.17634 1.80023 4.28125 1.92967 4.28125H5.36717C5.49661 4.28125 5.60155 4.17634 5.60155 4.04688C5.60155 3.91741 5.49661 3.8125 5.36717 3.8125H5.27205C5.16895 3.09512 4.60017 2.52634 3.8828 2.42325V2.10938C3.8828 1.46319 3.35711 0.9375 2.71092 0.9375H0.835922V0.46875H6.46092V14.5938H0.835922V1.40625ZM3.64842 2.875C4.21436 2.875 4.68783 3.27825 4.7967 3.8125H2.50011C2.60902 3.27825 3.08248 2.875 3.64842 2.875ZM12.5547 15.5312H0.835922V15.0625H12.5547V15.5312ZM12.5547 14.5938H6.92967V0.46875H12.5547V14.5938Z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            {property?.bathCount} Baths
                          </li>
                          <li>
                            <svg
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_126_1290)">
                                <path
                                  d="M15.9221 14.1251C15.6633 14.1251 15.4534 14.335 15.4534 14.5939V15.0626H14.9846C14.7258 15.0626 14.5159 15.2725 14.5159 15.5314C14.5159 15.7902 14.7258 16.0001 14.9846 16.0001H15.9221C16.181 16.0001 16.3909 15.7902 16.3909 15.5314V14.5939C16.3909 14.335 16.181 14.1251 15.9221 14.1251Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M13.0915 15.0314H11.2092C10.9422 15.0314 10.7249 15.2486 10.7249 15.5157C10.7249 15.7828 10.9422 16 11.2092 16H13.0915C13.3585 16 13.5758 15.7828 13.5758 15.5157C13.5758 15.2486 13.3585 15.0314 13.0915 15.0314Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M0.875232 5.65517C1.14229 5.65517 1.35955 5.43791 1.35955 5.17085V3.28864C1.35955 3.02158 1.14229 2.80432 0.875232 2.80432C0.60817 2.80432 0.390915 3.02158 0.390915 3.28864V5.17085C0.390915 5.43791 0.60817 5.65517 0.875232 5.65517Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M0.859695 1.875C1.11857 1.875 1.32845 1.66512 1.32845 1.40625V0.9375H1.7972C2.05607 0.9375 2.26595 0.727625 2.26595 0.46875C2.26595 0.209875 2.05607 0 1.7972 0H0.859695C0.60082 0 0.390945 0.209875 0.390945 0.46875V1.40625C0.390945 1.66512 0.60082 1.875 0.859695 1.875Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M11.2092 0.968634H13.0915C13.3585 0.968634 13.5758 0.751379 13.5758 0.484317C13.5758 0.217255 13.3585 0 13.0915 0H11.2092C10.9422 0 10.7249 0.217255 10.7249 0.484317C10.7249 0.751379 10.9422 0.968634 11.2092 0.968634Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M7.4444 0.968634H9.32661C9.59367 0.968634 9.81093 0.751379 9.81093 0.484317C9.81093 0.217255 9.59367 0 9.32661 0H7.4444C7.17734 0 6.96008 0.217255 6.96008 0.484317C6.96008 0.751379 7.17734 0.968634 7.4444 0.968634Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M3.67955 0.968634H5.56177C5.82883 0.968634 6.04608 0.751379 6.04608 0.484317C6.04608 0.217255 5.82883 0 5.56177 0H3.67955C3.41249 0 3.19524 0.217255 3.19524 0.484317C3.19524 0.751379 3.41249 0.968634 3.67955 0.968634Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M14.9846 0.9375H15.4534V1.40625C15.4534 1.66512 15.6633 1.875 15.9221 1.875C16.181 1.875 16.3909 1.66512 16.3909 1.40625V0.46875C16.3909 0.209875 16.181 0 15.9221 0H14.9846C14.7258 0 14.5159 0.209875 14.5159 0.46875C14.5159 0.727625 14.7258 0.9375 14.9846 0.9375Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M15.9065 6.56921C15.6394 6.56921 15.4222 6.78647 15.4222 7.05353V8.93574C15.4222 9.20281 15.6394 9.42006 15.9065 9.42006C16.1735 9.42006 16.3908 9.20281 16.3908 8.93574V7.05353C16.3908 6.7865 16.1735 6.56921 15.9065 6.56921Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M15.9065 2.80432C15.6394 2.80432 15.4222 3.02158 15.4222 3.28864V5.17085C15.4222 5.43791 15.6394 5.65517 15.9065 5.65517C16.1735 5.65517 16.3908 5.43791 16.3908 5.17085V3.28864C16.3908 3.02158 16.1735 2.80432 15.9065 2.80432Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M15.9065 10.334C15.6394 10.334 15.4222 10.5512 15.4222 10.8183V12.7005C15.4222 12.9676 15.6394 13.1848 15.9065 13.1848C16.1735 13.1848 16.3908 12.9676 16.3908 12.7005V10.8183C16.3908 10.5512 16.1735 10.334 15.9065 10.334Z"
                                  fill="#0D0D0D"
                                />
                                <path
                                  d="M13.5845 2.32227H11.9405C11.6816 2.32227 11.4718 2.53214 11.4718 2.79102C11.4718 3.04989 11.6816 3.25977 11.9405 3.25977H12.4529L8.18641 7.5262H1.35966V7.04848C1.35966 6.78139 1.14238 6.56411 0.87529 6.56411C0.608196 6.56411 0.390915 6.78139 0.390915 7.04848L0.391071 14.5752C0.391071 14.5762 0.390915 14.5772 0.390915 14.5782V15.5313C0.390915 15.7902 0.60079 16.0001 0.859665 16.0001H0.859821H9.32688C9.59398 16.0001 9.81126 15.7828 9.81126 15.5157C9.81126 15.2486 9.59398 15.0313 9.32688 15.0313H8.84932V8.18911L13.1158 3.92267V4.43505C13.1158 4.69392 13.3256 4.9038 13.5845 4.9038C13.8434 4.9038 14.0533 4.69392 14.0533 4.43505V2.79102C14.0533 2.53211 13.8434 2.32227 13.5845 2.32227ZM1.32857 15.047L1.35966 8.4637H7.91182V15.047H1.32857Z"
                                  fill="#0D0D0D"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_126_129">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0.390945)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            {property?.squarefeet} sqft
                          </li>
                        </ul>
                        <Link
                          to={`/prodetails?propertyId=${property._id}`}
                          className="real-btn bordered mb-24"
                        >
                          For {property?.saleOrRent}
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
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
                    No properties found matching the selected criteria.
                  </Typography>
                </div>
              )}
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
            </div>
          </div>
          <div className="col-xl-4 col-12">
            <div className="sidebar bg-gray mb-24">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="row">
                    <div className="col-xl-12 col-lg-6">
                      <h2 className="title">City</h2>
                      <Autocomplete
                        className="selector"
                        id="city"
                        name="city"
                        options={cities}
                        value={selectedCity}
                        onChange={(event, value) => setSelectedCity(value)}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth label="Cities" />
                        )}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-6">
                      <h2 className="title">Property Category</h2>
                      <Autocomplete
                        className="selector"
                        id="category"
                        name="category"
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
                        value={selectedCategory}
                        onChange={(event, value) => setSelectedCategory(value)}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth label="Categories" />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="row">
                    <div className="col-xl-12 col-lg-6 mb-16">
                      <h2 className="title">Number of Bedrooms</h2>
                      <Autocomplete
                        className="selector"
                        id="beds"
                        name="beds"
                        options={["1", "2", "3", "4+"]}
                        value={selectedBedCount}
                        onChange={(event, value) => setSelectedBedCount(value)}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth label="Bed Count" />
                        )}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-6 mb-16">
                      <h2 className="title">Number of Bathrooms</h2>
                      <Autocomplete
                        className="selector"
                        id="baths"
                        name="baths"
                        options={["1", "2", "3", "4+"]}
                        value={selectedBathCount}
                        onChange={(event, value) => setSelectedBathCount(value)}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth label="Bath Count" />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="row">
                    <div className="col-xl-12 col-lg-6">
                      <h2 className="title">Price</h2>
                      <Typography id="price-range-slider" gutterBottom>
                        Price Range
                      </Typography>
                      <Slider
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={200000000}
                        aria-labelledby="price-range-slider"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PropertyArea.propTypes = {
  properties: PropTypes.array.isRequired,
};

export default PropertyArea;
