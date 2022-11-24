import React, { useState } from "react";
import "../Styles/invoice.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { CardData } from "../Helper/CardDetail";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Invoice() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <>
      <div className="head-invoice">
        <div className="invoice-head">
          <div className="invoice">
            <div>
              <h1>Invoices</h1>
              <p>There are 7 total invoices</p>
            </div>
            <div className="drop-add-btn-head">
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  Fiter by status
                </Dropdown.Toggle>

                <Dropdown.Menu id="dropdown-menu">
                  <Dropdown.Item className="drop-item" href="#/action-1">
                    Draft
                  </Dropdown.Item>
                  <Dropdown.Item className="drop-item" href="#/action-2">
                    Pending
                  </Dropdown.Item>
                  <Dropdown.Item className="drop-item" href="#/action-3">
                    Paid
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="add-new-btn" onClick={handleShow}>
                <span>
                  <AiFillPlusCircle className="new-icon" />
                </span>
                <span> New Invoice</span>
              </button>
            </div>
          </div>
        </div>
        <div className="cards-head">
          {CardData.map((item, index) => {
            return (
              <>
                <div className="cards" onClick={() => navigate("/details")}>
                  <h5>{item.no}</h5>
                  <p className="date">{item.date}</p>
                  <h4 className="name">{item.name}</h4>
                  <h3 className="amount">{item.price}</h3>
                  <div className="card-status">
                    {item.status === "paid" ? (
                      <div className="status-paid">
                        <GoPrimitiveDot />
                        Paid
                      </div>
                    ) : (
                      <div className="status-pending">
                        <GoPrimitiveDot />
                        Pending
                      </div>
                    )}

                    <MdKeyboardArrowRight className="goArrow" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="canvas-head">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>New Invoice</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Invoice;
