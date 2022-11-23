import "../Styles/Login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// import { Config } from "../Config/Config";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { MyContext } from "../context";

const formValidationSchema = yup.object({
  email: yup.string().required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

function Login() {
  const navigate = useNavigate();
  //   const { setUser, isAuthenticated, setIsAuthenticated } =
  //     useContext(MyContext);
  const { values, handleChange, handleBlur, touched, handleSubmit, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        try {
          //   console.log(JSON.stringify(values));
          //   const result = await axios.post(`${Config.api}/user/login`, values);
          //   const resData = await result.json();
          //   setUser(resData);
          //   setIsAuthenticated(true);
          //   const Token = result.data.sessionData.token;
          //   localStorage.setItem("react-app-token", Token);
          //   navigate("/");
          //   if (result.data.error) {
          //     toast.error("Error: " + result.data.error);
          //   } else {
          // toast.success(result.data.message);
          // // navigate("/")
          // alert("succes");
          //   }
        } catch (error) {
          console.log(error);
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