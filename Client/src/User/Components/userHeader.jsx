import {} from "react";
import { Link, useNavigate } from "react-router-dom";

const UserHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="header st-1">
        <div className="container">
          <nav className="navbar navbar-expand-xl align-items-xl-center align-items-start p-0">
            <div className="col-xl-3">
              <Link className="navbar-brand" to={"/"}>
                <img
                  alt=""
                  style={{ height: "100px", width: "100px" }}
                  src="assets/media/One Deals New Logo white.png"
                />
              </Link>
            </div>
            <div className="col-xl-6 text-end">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center text-start"
                id="mynavbar"
              >
                <ul className="navbar-nav mainmenu m-0">
                  <li className="menu-item-has-children">
                    <Link to={"/"} className="active">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to={"/properties"}>Properties</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 d-xl-block d-none">
              <a href="tel:123" className="phone-link">
                <i className="fal fa-phone-alt"></i> +91 90725 52100
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default UserHeader;
