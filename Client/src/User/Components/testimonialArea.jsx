import {} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonial p-100 bg-gray">
      <div className="container">
        <div className="heading">
          <h2 className="">{"Our Client's Success Stories"}</h2>
          <p>
            Discover how our clients found their dream homes and successful
            <br />
            real estate investments with the help of our expert agents.
          </p>
        </div>
        <div className="testimonial-slider">
          <Slider {...settings} className="d-flex">
            <div className="testimonial-block">
              <img
                src="./assets/media/testimonial/img-1.png"
                className="w-100"
                alt=""
              />
              <div className="quote">
                <img src="./assets/media/quote.png" alt="" />
              </div>
              <div className="user-img">
                <img src="./assets/media/user/img-1.png" alt="" />
              </div>
              <h6 className="name">Emily Johnson</h6>
              <p>
                {
                  "The real estate agents were incredibly responsive and helpful throughout the entire process. I couldn't have asked for a better experience."
                }
              </p>
            </div>
            <div className="testimonial-block">
              <img
                src="./assets/media/testimonial/img-2.png"
                className="w-100"
                alt=""
              />
              <div className="quote">
                <img src="./assets/media/quote.png" alt="" />
              </div>
              <div className="user-img">
                <img src="./assets/media/user/img-2.png" alt="" />
              </div>
              <h6 className="name">Sophia Rodriguez</h6>
              <p>
                {
                  "The real estate agents were incredibly responsive and helpful throughout the entire process. I couldn't have asked for a better experience."
                }
              </p>
            </div>
            <div className="testimonial-block">
              <img
                src="./assets/media/testimonial/img-3.png"
                className="w-100"
                alt=""
              />
              <div className="quote">
                <img src="./assets/media/quote.png" alt="" />
              </div>
              <div className="user-img">
                <img src="./assets/media/user/img-3.png" alt="" />
              </div>
              <h6 className="name">Ava Thompson</h6>
              <p>
                {
                  "The real estate agents were incredibly responsive and helpful throughout the entire process. I couldn't have asked for a better experience."
                }
              </p>
            </div>
            <div className="testimonial-block">
              <img
                src="./assets/media/testimonial/img-2.png"
                className="w-100"
                alt=""
              />
              <div className="quote">
                <img src="./assets/media/quote.png" alt="" />
              </div>
              <div className="user-img">
                <img src="./assets/media/user/img-2.png" alt="" />
              </div>
              <h6 className="name">Sophia Rodriguez</h6>

              <p>
                {
                  "The real estate agents were incredibly responsive and helpful throughout the entire process. I couldn't have asked for a better experience."
                }
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
