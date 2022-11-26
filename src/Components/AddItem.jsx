import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Styles/AddItem.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Config } from "../Config/Config";
import axios from "axios";

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
  // itemname: yup.string().required("Enter Item Name"),
  // qty: yup.number().required("Enter Qty"),
  // price: yup.number().required("Enter Price"),
});

function AddItem({ show, handleClose }) {
  const [inputFields, setInputFields] = useState([""]);
  const [fieldLen, setFieldLen] = useState(1);
  const [steps, setSteps] = useState([]);
  steps.length = inputFields.length;
  const { values, handleChange, handleBlur, touched, handleSubmit, errors } =
    useFormik({
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
        // itemname: "",
        // qty: "",
        // price: "",
      },

      validationSchema: formValidationSchema,

      onSubmit: async (values) => {
        try {
          console.log("hi s");
        } catch (error) {
          console.log("hi r");
        }
      },
    });
  const addInputItemField = (e) => {
    e.preventDefault();
    setInputFields((inputFields) => [...inputFields, ""]);
    setFieldLen(fieldLen + 1);
  };
  const removeInputField = (index, e) => {
    if (fieldLen === 1) {
      return;
    } else {
      e.preventDefault();
      const copyInputField = [...inputFields];
      copyInputField.splice(index, 1);
      setInputFields(copyInputField);
      setFieldLen(fieldLen - 1);
      const copySteps = [...steps];
      copySteps.splice(index, 1);
      setSteps(copySteps);
      values.steps.splice(index, 1);
    }
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Invoice</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="fieldBox">
            <h6>Bill Form</h6>
            <label className="label-add">Street Address</label>
            <input
              className="input-sidebar"
              type="text"
              name="streetaddress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.streetaddress}
            />
            <small>
              {errors.streetaddress && touched.streetaddress
                ? errors.streetaddress
                : null}
            </small>
          </div>
          {/* //success */}
          <div className="input-3-head">
            <div className="fieldBox">
              <label className="label-add">City</label>
              <input
                className="input-3-bar"
                type="text"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              <small>{errors.city && touched.city ? errors.city : null}</small>
            </div>
            <div className="fieldBox">
              <label className="label-add">Post Code</label>
              <input
                className="input-3-bar"
                type="text"
                name="postcode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postcode}
              />
              <small>
                {errors.postcode && touched.postcode ? errors.postcode : null}
              </small>
            </div>
            <div className="fieldBox">
              <label className="label-add">Country</label>
              <input
                className="input-3-bar"
                type="text"
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
              />
              <small>
                {errors.country && touched.country ? errors.country : null}
              </small>
            </div>
          </div>
          {/* // succes */}
          <div className="fieldBox">
            <h6>Bill To</h6>
            <label className="label-add">Client's Name</label>
            <input
              className="input-sidebar"
              type="text"
              name="clientsname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.clientsname}
            />
            <small>
              {errors.clientsname && touched.clientsname
                ? errors.clientsname
                : null}
            </small>
          </div>
          {/* success */}
          <div className="fieldBox">
            <label className="label-add">Client's Email</label>
            <input
              className="input-sidebar"
              type="email"
              name="clientsemail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.clientsemail}
            />
            <small>
              {errors.clientsemail && touched.clientsemail
                ? errors.clientsemail
                : null}
            </small>
          </div>
          {/* success  */}
          <div className="fieldBox">
            <label className="label-add">Street Adress</label>
            <input
              className="input-sidebar"
              type="text"
              name="clientaddress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.clientaddress}
            />
            <small>
              {errors.clientaddress && touched.clientaddress
                ? errors.clientaddress
                : null}
            </small>
          </div>
          {/* success */}
          <div className="input-3-head">
            <div className="fieldBox">
              <label className="label-add">City</label>
              <input
                className="input-3-bar"
                type="text"
                name="clientcity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.clientcity}
              />
              <small>
                {errors.clientcity && touched.clientcity
                  ? errors.clientcity
                  : null}
              </small>
            </div>
            <div className="fieldBox">
              <label className="label-add">Post Code</label>

              <input
                className="input-3-bar"
                type="text"
                name="clientpostcode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.clientpostcode}
              />
              <small>
                {errors.clientpostcode && touched.clientpostcode
                  ? errors.clientpostcode
                  : null}
              </small>
            </div>
            <div className="fieldBox">
              <label className="label-add">Country</label>
              <input
                className="input-3-bar"
                type="text"
                name="clientcountry"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.clientcountry}
              />
              <small>
                {errors.clientcountry && touched.clientcountry
                  ? errors.clientcountry
                  : null}
              </small>
            </div>
          </div>
          {/* succes */}
          <div className="input-2-head">
            <div className="fieldBox">
              <label htmlFor="invoiceDate">Invoice Date</label>
              <input
                type="date"
                name="invoicedate"
                className="input-2-bar"
                placeholder="Select Invoice Date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.invoicedate}
              ></input>
              <small>
                {errors.invoicedate && touched.invoicedate
                  ? errors.invoicedate
                  : null}
              </small>
            </div>
            <div className="fieldBox">
              <label htmlFor="paymentdays">Select Payment Status</label>
              <select
                name="paymentdays"
                className="input-2-bar"
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
              <small>
                {errors.paymentdays && touched.paymentdays
                  ? errors.paymentdays
                  : null}
              </small>
            </div>
          </div>
          {/* success  */}
          <div className="fieldBox">
            <label className="label-add">Project / Description</label>
            <input
              className="input-sidebar"
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <small>
              {errors.description && touched.description
                ? errors.description
                : null}
            </small>
          </div>

          {/* success  */}
          <h4>Item List</h4>
          {inputFields.map((x, index) => {
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
                  <small>{errors.qty && touched.qty ? errors.qty : null}</small>
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
          })}
          {fieldLen === 1 ? (
            <div className="add-new-btn-head">
              <button onClick={addInputItemField}>+ Add New Item</button>
            </div>
          ) : (
            ""
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddItem;
