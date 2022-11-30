import React, { useState, useContext, useEffect } from "react";
import "../Styles/Login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Config } from "../Config/Config";
import axios from "axios";
import { toast } from "react-toastify";
import { MyContext } from "../context";

const formValidationSchema = yup.object({
  email: yup.string().required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

function Login() {
  const navigate = useNavigate();
  const {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    userRole,
    setUserRole,
  } = useContext(MyContext);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setIsAuthenticated(true);
      navigate("/");
    }
  }, []);

  const { values, handleChange, handleBlur, touched, handleSubmit, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        try {
          const result = await axios.post(`${Config.api}/user/login`, values);
          const resData = await result.data;
          const output = resData.sessionData;
          setUser(output);
          setIsAuthenticated(true);
          setUserRole(output.role);
          const Token = output.token;
          localStorage.setItem("react-app-token", Token);
          localStorage.setItem("role", output.role);
          localStorage.setItem("id", output.userId);
          navigate("/");
          toast.success(resData.message);
          console.log(user);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },
    });

  return (
    <>
      <div className="login-head">
        <div className="login">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="fieldBox">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <small>
                {errors.email && touched.email ? errors.email : null}
              </small>
            </div>
            <div className="fieldBox">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <small>
                {errors.password && touched.password ? errors.password : null}
              </small>
            </div>
            <button type="submit">submit</button>
          </form>
          <div className="para-login" onClick={() => navigate("/signup")}>
            <p>I'dont have and account |</p>
            <p>Sign up</p>
          </div>
          <div className="fp" onClick={() => navigate("/forgetpassword")}>
            <p>Forget Password</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
