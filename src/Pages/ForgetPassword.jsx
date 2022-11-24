import "../Styles/ForgetPassword.css";
import React, { useState, useContext, useEffect } from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Config } from "../Config/Config";
import axios from "axios";
import { toast } from "react-toastify";
import { MyContext } from "../context";

const formValidationSchema = yup.object({
  username: yup.string().required("Name is Required"),
  email: yup.string().required("Email is Required"),
});

function ForgetPassword() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { values, handleChange, handleBlur, touched, handleSubmit, errors } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        try {
          const result = await axios.post(
            `${Config.api}/user/forgetpassword`,
            values
          );
          console.log(result);
          if (result.status == 200) {
            navigate(`/verify/${result.data.user._id}`);
          }
        } catch (error) {
          console.log(error);
        }
      },
    });
  return (
    <>
      <div className="forget-head">
        <div className="forget">
          <h2>Forget Password</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            {" "}
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
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;

// gpwhujmwmwugpcxk;
