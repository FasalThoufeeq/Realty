import {} from "react";
import { Link } from "react-router-dom";

const SolutionArea = () => {
  return (
    <>
      <section className="solution bg-white p-100">
        <div className="container">
          <div className="heading">
            <h2>Your One-Stop Property Solution</h2>
            <p>
              Discover a hassle-free way to buy, sell, or rent your dream
              <br />
              property with our all-in-one real estate solution.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="content text-center">
                <img
                  src="./assets/media/icon/house-icon-2.png"
                  className="mb-24"
                  alt=""
                />
                <h4 className="fw-6 fs-33 font-sec color-dark-3 mb-16">
                  Buy a property
                </h4>
                <p className="fs-16 color-gray-4 font-sec lh-130 mb-24">
                  Discover a hassle-free way to buy, sell, or rent your dream
                  property with our all-in-one real estate solution.
                </p>
                <Link
                  to={"/properties"}
                  className="real-btn bordered text-capitalize"
                >
                  View Properties
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="content text-center">
                <img
                  src="./assets/media/icon/deal-icon-2.png"
                  className="mb-24"
                  alt=""
                />
                <h4 className="fw-6 fs-33 font-sec color-dark-3 mb-16">
                  Sell a Property
                </h4>
                <p className="fs-16 color-gray-4 font-sec lh-130 mb-24">
                  Discover a hassle-free way to buy, sell, or rent your dream
                  property with our all-in-one real estate solution.
                </p>
                <Link
                  to={"/place_add"}
                  className="real-btn bordered text-capitalize"
                >
                  Place an add
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 offset-lg-0 offset-md-3">
              <div className="content text-center">
                <img
                  src="./assets/media/icon/house-icon-2.png"
                  className="mb-24"
                  alt=""
                />
                <h4 className="fw-6 fs-33 font-sec color-dark-3 mb-16">
                  Rent a Property
                </h4>
                <p className="fs-16 color-gray-4 font-sec lh-130 mb-24">
                  Discover a hassle-free way to buy, sell, or rent your dream
                  property with our all-in-one real estate solution.
                </p>
                <Link
                  to={"/properties"}
                  className="real-btn bordered text-capitalize"
                >
                  View Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionArea;
