import {} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
    <section className="team bg-white p-100">
      <div className="container">
        <div className="heading">
          <h2 className="">Meet Our Real Estate Agents</h2>
          <p>
            Meet our team of experienced and professional real estate agents
            <br />
            ready to help you with your property needs.
          </p>
        </div>
        <div className="team-slider">
          <Slider {...settings} className="d-flex">
            <div className="team-block">
              <img src="./assets/media/user/img-4.png" alt="" />
              <h4 className="name">Richard Johnson</h4>
              <p className="designation">Real Estate Broker</p>
              <ul className="socialicon list-unstyled">
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fal fa-basketball-ball"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-block">
              <img src="./assets/media/user/img-5.png" alt="" />
              <h4 className="name">Rebecca Robinson</h4>
              <p className="designation">Real Estate Broker</p>
              <ul className="socialicon list-unstyled">
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fal fa-basketball-ball"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-block">
              <img src="./assets/media/user/img-6.png" alt="" />
              <h4 className="name">Susan Hernandez</h4>
              <p className="designation">Real Estate Broker</p>
              <ul className="socialicon list-unstyled">
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fal fa-basketball-ball"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-block">
              <img src="./assets/media/user/img-7.png" alt="" />
              <h4 className="name">William Martinez</h4>
              <p className="designation">Real Estate Broker</p>
              <ul className="socialicon list-unstyled">
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fal fa-basketball-ball"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-block">
              <img src="./assets/media/user/img-5.png" alt="" />
              <h4 className="name">Rebecca Robinson</h4>
              <p className="designation">Real Estate Broker</p>
              <ul className="socialicon list-unstyled">
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fal fa-basketball-ball"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
