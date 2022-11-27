import React, { useState, useContext, useEffect } from "react";
import "../Styles/invoice.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { CardData } from "../Helper/CardDetail";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { MyContext } from "../context";
import AddItem from "../Components/AddItem";

function Invoice() {
  const [role, setRole] = useState("");
  const [show, setShow] = useState(false);
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(MyContext);
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  useEffect(() => {
    const nrole = localStorage.getItem("role");
    setRole(nrole);
  }, []);

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
              {role === "admin" ? (
                <button className="add-new-btn" onClick={handleShow}>
                  <span>
                    <AiFillPlusCircle className="new-icon" />
                  </span>
                  <span> New Invoice</span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="cards-head">
          {CardData.map((item, index) => {
            return (
              <>
                <div className="cards" onClick={() => navigate("/details")}>
                  <h5 className="idno">{item.no}</h5>
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
        <AddItem handleClose={handleClose} show={show} />
      </div>
    </>
  );
}

export default Invoice;
