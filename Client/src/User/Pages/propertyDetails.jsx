import {} from "react";
import UserHeader from "../Components/userHeader";
import PropertyDetailArea from "../Components/propertyDetailArea";
import Footer from "../Components/footer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { GetPropertyById } from "../../Redux/userSlice";
import Loader from "../../loader";

const PropertyDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState(false);
  const params = new URLSearchParams(location.search);
  const propertyId = params.get("propertyId");
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const properties = await dispatch(GetPropertyById(propertyId));
        setProperty(properties?.payload?.data?.property);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, []);
  if (!property || loading) {
    return <Loader />;
  }
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
                <h2>Property Details</h2>
              </div>
            </section>
            <PropertyDetailArea propertyDetail={property} />
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
};

export default PropertyDetails;
