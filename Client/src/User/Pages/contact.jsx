import {} from "react";
import UserHeader from "../Components/userHeader";
import ContactDetails from "../Components/contactDetails";
import Footer from "../Components/footer";

const Contact = () => {
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
                <h2>Contact Us</h2>
              </div>
            </section>
            <ContactDetails />
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
};

export default Contact;
