import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Styles/AddItem.css";

function AddItem({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Invoice</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="fieldBox">
            <label className="label-add">Email</label>
            <input
              type="text"
              name=""
              placeholder="Enter email"
              //   onChange={handleChange}
              //   onBlur={handleBlur}
              //   value={values.email}
            />
            {/* <small>{errors.email && touched.email ? errors.email : null}</small> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddItem;
