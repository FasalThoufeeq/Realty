import { useEffect, useState } from "react";
import UserHeader from "../Components/userHeader";
import Loader from "../../loader";
import BannerArea from "../Components/bannerArea";
import CheckoutArea from "../Components/checkoutArea";
import SolutionArea from "../Components/solutionArea";
import GalleryArea from "../Components/galleryArea";
import CheckoutAreaDown from "../Components/checkoutAreaDown";
import TestimonialArea from "../Components/testimonialArea";
import TeamArea from "../Components/teamArea";
import BlogArea from "../Components/blogArea";
import LogoAddArea from "../Components/logoAddArea";
import Footer from "../Components/footer";
import { useDispatch } from "react-redux";
import { GetAllProperty } from "../../Redux/userSlice";

const UserHome = () => {
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
  const filteredSortedProperties = properties
    .filter((property) => property.list === true)
    .sort((a, b) => b.rate - a.rate);

  const top3Properties = filteredSortedProperties.slice(0, 3);

  const countPropertiesByCategory = (properties) => {
    const categoryCount = {};
    
    properties.forEach(property => {
      const { propertyCategory } = property;
      if (categoryCount[propertyCategory]) {
        categoryCount[propertyCategory]++;
      } else {
        categoryCount[propertyCategory] = 1;
      }
    });
    
    return categoryCount;
  };
  
  const propertyCategoryCount = countPropertiesByCategory(properties);
  console.log(propertyCategoryCount);
  if (properties?.length == 0 || loading) {
    return <Loader />;
  }
  return (
    <>
      <body className="ui-smooth-scroll">
        {/* <!-- Back To Top Start --> */}

        <a href="#main-wrapper" id="backto-top" className="back-to-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/* <!-- Main Wrapper Start --> */}

        <div id="main-wrapper" className="main-wrapper overflow-hidden">
          <div id="scroll-container">
            <UserHeader />
            <BannerArea propertyCount={propertyCategoryCount}/>
            <CheckoutArea properties={properties} />
            <SolutionArea />
            <GalleryArea />
            <CheckoutAreaDown properties={top3Properties}/>
            {/* <TestimonialArea /> */}
            {/* <TeamArea /> */}
            {/* <BlogArea /> */}
            {/* <LogoAddArea /> */}
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
};

export default UserHome;
