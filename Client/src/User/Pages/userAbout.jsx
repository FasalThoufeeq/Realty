import {} from "react";
import UserHeader from "../Components/userHeader";
import AboutArea from "../Components/aboutArea";
import TeamArea from "../Components/teamArea";
import TestimonialArea from "../Components/testimonialArea";
import LogoAddArea from "../Components/logoAddArea";
import Footer from "../Components/footer";

const UserAbout = () => {
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
                <h2>About Us</h2>
              </div>
            </section>

            <AboutArea/>
            <TeamArea/>
            <TestimonialArea/>
            <LogoAddArea/>
            <Footer/>
          </div>
        </div>
      </body>
    </>
  );
};

export default UserAbout;
