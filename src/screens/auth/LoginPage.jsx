import React, { useState } from "react";
import * as Yup from "yup";
import Icon from "../../../src/assets/icons";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../services/endpoints/auth.api";

const validationScheme = Yup.object().shape({
  email: Yup.string().required("email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const LoginPage = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationScheme,

    onSubmit: async (values, { setSubmitting }) => {

      try {
        const response = await login({ email: values.email, password: values.password }).unwrap();
        // dispatch(login(
        //   {
        //     id: response.data.user.id,
        //     accessToken: response.data.authToken
        //   }
        // ));
        // navigate("/home");
        // if (response?.accessToken) {
        // navigate("/home");
        // }
      } catch (error) {
        console.error("API call failed:", error);
        alert("Login failed. Please check your credentials.");
      }
      finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="layout">
      <div className="container">
        <form onSubmit={formik.handleSubmit} className="login-container ">
          <img src={Icon.Logo} alt="Logo" title="Logo" />
          <h2 className="title">Welcome!</h2>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <label className="error">{formik.errors.email}</label>
          ) : null}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <label className="error">{formik.errors.password}</label>
          ) : null}
          <button
            type="submit"
            className="login-btn"
          // disabled={isLoading || formik.isSubmitting}
          >
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>
          {/* {result && <p style={{ color: "red" }}>{result}</p>} */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
