import React, { useState, useContext, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Styles/EditItem.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Config } from "../Config/Config";
import axios from "axios";
import { MyContext } from "../context";

const formValidationSchema = yup.object({
  streetaddress: yup.string().required("Address is Required"),
  city: yup.string().required("City is Required"),
  postcode: yup.string().required("Post Code is Required"),
  country: yup.string().required("Country is Required"),
  clientsname: yup.string().required("Client Name  is Required"),
  clientsemail: yup.string().required("Client Email  is Required"),
  clientaddress: yup.string().required("Client Address  is Required"),
  clientcity: yup.string().required("City is Required"),
  clientpostcode: yup.string().required("Post Code is Required"),
  clientcountry: yup.string().required("Country is Required"),
  invoicedate: yup.date().required("Plese Choose Date"),
  paymentdays: yup.string().required("Please select one"),
  description: yup.string().required("Enter Describtion"),
  itemname: yup.string().required("Enter Item Name"),
  qty: yup.number().required("Enter Qty"),
  price: yup.number().required("Enter Price"),
  pid: yup.string().required("choose product id"),
});

function EditItem({ show, handleClose, id, fetchData }) {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [tok, setTok] = useState("");
  const [localROle, setLocalROle] = useState("");
  const {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    userRole,
    setUserRole,
  } = useContext(MyContext);
  let fetch = async () => {
    try {
      let result = await axios.get(`${Config.api}/invoice/get/${id}`);

      setData(result.data);
      const datas = result.data;
      setValues(datas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const localrOle = localStorage.getItem("role");
    setLocalROle(localrOle);
    const token = localStorage.getItem("react-app-token");
    setTok(token);
    fetch();
  }, []);

  const {
    values,
    handleChange,
    handleBlur,
    setValues,
    touched,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      streetaddress: "",
      city: "",
      postcode: "",
      country: "",
      clientsname: "",
      clientsemail: "",
      clientaddress: "",
      clientcity: "",
      clientpostcode: "",
      clientcountry: "",
      invoicedate: "",
      paymentdays: "",
      description: "",
      itemname: "",
      qty: "",
      price: "",
      pid: "",
    },

    validationSchema: formValidationSchema,

    onSubmit: async (values) => {
      if (userRole == "admin" || localROle == "admin") {
        try {
          const Amount = values.qty * values.price;

          Object.assign(values, { total: Amount });
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tok}`,
          };
          const result = await axios.patch(
            `${Config.api}/invoice/edit/${id}`,
            values,
            {
              headers: headers,
            }
          );
          handleClose();
          fetchData();
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Sorry only admin can add invoices");
        navigate("/payment");
      }
    },
  });

  return (
    <>
      <div className="offcanvashead">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <h1 className="canvas-title">New Invoice</h1>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form onSubmit={handleSubmit}>
              <div className="fieldBox">
                <h5>Bill Form</h5>
                <label className="label-add">Street Address</label>
                <input
                  className={
                    errors.streetaddress && touched.streetaddress
                      ? "input-sidebar error-border"
                      : "input-sidebar"
                  }
                  // className="input-sidebar"
                  type="text"
                  name="streetaddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.streetaddress}
                />
                {/* <small>
                  {errors.streetaddress && touched.streetaddress
                    ? errors.streetaddress
                    : null}
                </small> */}
              </div>

              <div className="input-3-head">
                <div className="fieldBox">
                  <label className="label-add">City</label>
                  <input
                    className={
                      errors.city && touched.city
                        ? "input-3-bar error-border"
                        : "input-3-bar"
                    }
                    // className="input-3-bar"
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                  {/* <small>
                    {errors.city && touched.city ? errors.city : null}
                  </small> */}
                </div>
                <div className="fieldBox">
                  <label className="label-add">Post Code</label>
                  <input
                    className={
                      errors.postcode && touched.postcode
                        ? "input-3-bar error-border"
                        : "input-3-bar"
                    }
                    // className="input-3-bar"
                    type="text"
                    name="postcode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postcode}
                  />
                  {/* <small>
                    {errors.postcode && touched.postcode
                      ? errors.postcode
                      : null}
                  </small> */}
                </div>
                <div className="fieldBox">
                  <label className="label-add">Country</label>
                  <input
                    className={
                      errors.country && touched.country
                        ? "input-3-bar error-border"
                        : "input-3-bar"
                    }
                    // className="input-3-bar"
                    type="text"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                  />
                  {/* <small>
                    {errors.country && touched.country ? errors.country : null}
                  </small> */}
                </div>
              </div>

              <div className="fieldBox">
                <h5>Bill To</h5>
                <label className="label-add">Client's Name</label>
                <input
                  className={
                    errors.clientsname && touched.clientsname
                      ? "input-sidebar error-border"
                      : "input-sidebar"
                  }
                  // className="input-sidebar"
                  type="text"
                  name="clientsname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.clientsname}
                />
                {/* <small>
                  {errors.clientsname && touched.clientsname
                    ? errors.clientsname
                    : null}
                </small> */}
              </div>

              <div className="fieldBox">
                <label className="label-add">Client's Email</label>
                <input
                  className={
                    errors.clientsemail && touched.clientsemail
                      ? "input-sidebar error-border"
                      : "input-sidebar"
                  }
                  // className="input-sidebar"
                  type="email"
                  name="clientsemail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.clientsemail}
                />
                {/* <small>
                  {errors.clientsemail && touched.clientsemail
                    ? errors.clientsemail
                    : null}
                </small> */}
              </div>

              <div className="fieldBox">
                <label className="label-add">Street Address</label>
                <input
                  className={
                    errors.clientaddress && touched.clientaddress
                      ? "input-sidebar error-border"
                      : "input-sidebar"
                  }
                  // className="input-sidebar"
                  type="text"
                  name="clientaddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.clientaddress}
                />
                {/* <small>
                  {errors.clientaddress && touched.clientaddress
                    ? errors.clientaddress
                    : null}
                </small> */}
              </div>

              <div className="input-3-head">
                <div className="fieldBox">
                  <label className="label-add">City</label>
                  <input
                    className={
                      errors.clientcity && touched.clientcity
                        ? "input-3-bar error-border"
                        : "input-3-bar"
                    }
                    // className="input-3-bar"
                    type="text"
                    name="clientcity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.clientcity}
                  />
                  {/* <small>
                    {errors.clientcity && touched.clientcity
                      ? errors.clientcity
                      : null}
                  </small> */}
                </div>
                <div className="fieldBox">
                  <label className="label-add">Post Code</label>

                  <input
                    className={
                      errors.clientpostcode && touched.clientpostcode
                        ? "input-3-bar error-border"
                        : "input-3-bar"
                    }
                    // className="input-3-bar"
                    type="text"
                    name="clientpostcode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.clientpostcode}
                  />
                  {/* <small>
                    {errors.clientpostcode && touched.clientpostcode
                      ? errors.clientpostcode
                      : null}
                  </small> */}
                </div>
                <div className="fieldBox">
                  <label className="label-add">Country</label>
                  <input
                    className={
                      errors.clientcountry && touched.clientcountry
                        ? "input-3-bar error-border"
                        : "input-3-bar"
                    }
                    // className="input-3-bar"
                    type="text"
                    name="clientcountry"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.clientcountry}
                  />
                  {/* <small>
                    {errors.clientcountry && touched.clientcountry
                      ? errors.clientcountry
                      : null}
                  </small> */}
                </div>
              </div>

              <div className="input-2-head">
                <div className="fieldBox">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    pattern="\d{4}-\d{2}-\d{2}"
                    name="invoicedate"
                    className={
                      errors.invoicedate && touched.invoicedate
                        ? "input-2-bar error-border"
                        : "input-2-bar"
                    }
                    // className="input-2-bar"
                    placeholder="Select Invoice Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.invoicedate}
                  ></input>
                  {/* <small>
                    {errors.invoicedate && touched.invoicedate
                      ? errors.invoicedate
                      : null}
                  </small> */}
                </div>
                <div className="fieldBox">
                  <label htmlFor="paymentdays">Select Payment Status</label>
                  <select
                    name="paymentdays"
                    className={
                      errors.paymentdays && touched.paymentdays
                        ? "input-2-bar-drop error-border"
                        : "input-2-bar-drop"
                    }
                    // className="input-2-bar-drop"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.paymentdays}
                  >
                    {/* Select Payment Status */}
                    <option value="" disabled hidden>
                      Select Payment Status
                    </option>
                    <option value="1day">Net 1 day</option>
                    <option value="7days">Net 7 days</option>
                    <option value="14days">Net 14 days</option>
                    <option value="30days">Net 30 days</option>
                  </select>
                  {/* <small>
                    {errors.paymentdays && touched.paymentdays
                      ? errors.paymentdays
                      : null}
                  </small> */}
                </div>
              </div>

              <div className="fieldBox">
                <label className="label-add">Project / Description</label>
                <input
                  // className="input-sidebar"
                  className={
                    errors.description && touched.description
                      ? "input-sidebar error-border"
                      : "input-sidebar"
                  }
                  type="text"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                {/* <small>
                  {errors.description && touched.description
                    ? errors.description
                    : null}
                </small> */}
              </div>

              <h4>Item List</h4>
              <div className="input-dynamic-head">
                {/* key={index} */}
                <div className="fieldBox">
                  <label htmlFor="itemname">Item Name</label>
                  <input
                    type="text"
                    name="itemname"
                    className={
                      errors.itemname && touched.itemname
                        ? "input-2-bar error-border"
                        : "input-2-bar"
                    }
                    // className="input-2-bar"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.itemname}
                  ></input>
                  {/* <small>
                  {errors.itemname && touched.itemname ? errors.itemname : null}
                </small> */}
                </div>
                <div className="fieldBox">
                  <label htmlFor="itemname">Qty.</label>
                  <input
                    type="number"
                    name="qty"
                    className={
                      errors.qty && touched.qty
                        ? "input-1-bar error-border"
                        : "input-1-bar"
                    }
                    // className="input-1-bar"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.qty}
                  ></input>
                  {/* <small>{errors.qty && touched.qty ? errors.qty : null}</small> */}
                </div>
                <div className="fieldBox">
                  <label htmlFor="itemname">Price</label>
                  <input
                    type="number"
                    name="price"
                    className={
                      errors.price && touched.price
                        ? "input-1-2-bar error-border"
                        : "input-1-2-bar"
                    }
                    // className="input-1-2-bar"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                  ></input>
                  {/* <small>
                  {errors.price && touched.price ? errors.price : null}
                </small> */}
                </div>
                {/* <div className="fieldBox">
                <label htmlFor="itemname">Total</label>
                <input
                  type="text"
                  name="total"
                  className="input-1-2-bar"
                  value={values.total}
                ></input>
              </div> */}

                {/* <div
                className="delte-icon-head"
                onClick={(e) => removeInputField(index, e)}
              >
                <i class="fa-solid fa-trash"></i>
              </div> */}
              </div>
              {/* {inputFields.map((x, index) => {
              return (
                <div className="input-dynamic-head" key={index}>
                  <div className="fieldBox">
                    <label htmlFor="itemname">Item Name</label>
                    <input
                      type="text"
                      name="itemname"
                      className="input-2-bar"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.itemname}
                    ></input>
                    <small>
                      {errors.itemname && touched.itemname
                        ? errors.itemname
                        : null}
                    </small>
                  </div>
                  <div className="fieldBox">
                    <label htmlFor="itemname">Qty.</label>
                    <input
                      type="number"
                      name="qty"
                      className="input-1-bar"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.qty}
                    ></input>
                    <small>
                      {errors.qty && touched.qty ? errors.qty : null}
                    </small>
                  </div>
                  <div className="fieldBox">
                    <label htmlFor="itemname">Price</label>
                    <input
                      type="number"
                      name="price"
                      className="input-1-2-bar"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    ></input>
                    <small>
                      {errors.price && touched.price ? errors.price : null}
                    </small>
                  </div>
                  <div className="fieldBox">
                    <label htmlFor="itemname">Total</label>
                    <input
                      type="total"
                      name="total"
                      className="input-1-2-bar"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      // value={values.total}
                    ></input>
                  </div>
                  <div
                    className="delte-icon-head"
                    onClick={(e) => removeInputField(index, e)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
              );
            })} */}
              {/* {fieldLen === 1 ? (
              <div className="add-new-btn-head">
                <button onClick={addInputItemField}>+ Add New Item</button>
              </div>
            ) : (
              ""
            )} */}
              <div className="input-2-head">
                <div className="fieldBox">
                  <label htmlFor="pid">Product Id</label>
                  <select
                    name="pid"
                    className={
                      errors.pid && touched.pid
                        ? "input-2-bar-drop error-border"
                        : "input-2-bar-drop"
                    }
                    // className="input-2-bar-drop"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pid}
                  >
                    {/* Select Payment Status */}
                    <option value="" disabled hidden>
                      Choose
                    </option>
                    <option value="#RT3080">#RT3080</option>
                    <option value="#XM9141">#XM9141</option>
                    <option value="#RG0314">#RG0314</option>
                    <option value="#RT2080">#RT2080</option>
                    <option value="#AA1449">#AA1449</option>
                  </select>
                  {/* <small>{errors.pid && touched.pid ? errors.pid : null}</small> */}
                </div>
                <div className="fieldBox">
                  <label>Total</label>
                  <div className="totBox">
                    <h4>{values.qty * values.price}</h4>
                  </div>
                </div>
              </div>
              <div className="canvas-footer">
                <div>
                  <button className="discord-btn" onClick={handleClose}>
                    Discord
                  </button>
                </div>
                <div>
                  <button id="draft-btn">Draft</button>
                  <button id="save-btn" type="submit">
                    Save & Send
                  </button>
                </div>
              </div>
            </form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default EditItem;
