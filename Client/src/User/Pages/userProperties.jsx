import { useEffect, useState } from "react";
import UserHeader from "../Components/userHeader";
import PropertyArea from "../Components/propertyArea";
import Footer from "../Components/footer";
import Loader from "../../loader";
import { useDispatch } from "react-redux";
import { GetAllProperty } from "../../Redux/userSlice";

const UserProperties = () => {
  const dispatch = useDispatch();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const properties = await dispatch(GetAllProperty());
        setProperties(properties?.payload?.data?.properties);
        setTimeout(() => {
        setLoading(false);
      }, 2000);
      } catch (error) {
        console.log("Error fetching property:", error);
      }
    };
    fetchProperties();
  }, []);
  if (properties?.length == 0 || loading) {
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
                <h2>Properties</h2>
              </div>
            </section>
              <PropertyArea properties={properties}/>
              <Footer/>
          </div>
        </div>
      </body>
    </>
  );
};

export default UserProperties;
