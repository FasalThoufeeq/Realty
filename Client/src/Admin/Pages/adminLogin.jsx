import {} from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminLogin } from "../../Redux/adminSlice";
const AdminLogins = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Must be atleast 8 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const response = await dispatch(AdminLogin(values));
      if (response?.payload?.data?.status === "success") {
        toast.success(response?.payload?.data?.message);
        navigate("/admin");
      } else {
        toast.error(response?.payload?.data?.message);
      }
    },
  });
  return (
    <>
      <Container
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="email" className="my-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              style={{ border: "1px solid #ced4da", borderRadius: "0.25rem" }}
            ></Form.Control>
            {formik.touched.email && formik.errors.email ? (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            ) : null}
          </Form.Group>

          <Form.Group controlId="password" className="my-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            ></Form.Control>
            {formik.touched.password && formik.errors.password ? (
              <p style={{ color: "red" }}>{formik.errors.password}</p>
            ) : null}
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            color="primary"
            fullWidth
            disabled={!formik.isValid}
            className="mt-3"
          >
            Login
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </>
  );
};

export default AdminLogins;
