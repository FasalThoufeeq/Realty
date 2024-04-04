import {} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LogoutAdmin } from "../../Redux/adminSlice";
import { useDispatch } from "react-redux";

const AdminHeader = () => {
  const dispatch = useDispatch();
  return (
    <>
      <header className="header st-1">
        <div className="container">
          <nav className="navbar navbar-expand-xl align-items-xl-center align-items-start p-0">
            <div className="col-xl-3">
              <Link className="navbar-brand" to={"/admin"}>
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
                    <Link to={"/admin"} className="active">
                      Dashboard
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to={"/admin/add_property"}>Add Property</Link>
                  </li>
                  {/* <li className="menu-item-has-children">
                  <Link to={"/properties"}>Properties</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to={"/contact"}>Contact</Link>
                </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 d-xl-block d-none">
              <Link
                className="phone-link"
                onClick={() => {
                  toast.warning(
                    <div>
                      <p>Are you sure you want to logout?</p>
                      <div>
                        <Button
                          color="success"
                          variant="contained"
                          size="small"
                          onClick={() => {
                            dispatch(LogoutAdmin());
                            toast.success("Logout succefully");
                          }}
                          style={{ marginRight: "1rem" }}
                        >
                          Yes
                        </Button>
                        <Button
                          color="error"
                          variant="contained"
                          size="small"
                          onClick={() => toast.dismiss()}
                        >
                          No
                        </Button>
                      </div>
                    </div>,
                    {
                      autoClose: false,
                    }
                  );
                }}
              >
                Logout
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default AdminHeader;
