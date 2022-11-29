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
import axios from "axios";
import { Config } from "../Config/Config";

function Invoice() {
  const [role, setRole] = useState("");
  const [show, setShow] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [len, setLen] = useState("");
  const {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    userRole,
    setUserRole,
  } = useContext(MyContext);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  let fetchData = async () => {
    try {
      let result = await axios.get(`${Config.api}/invoice/all`);
      setInvoices(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const LocalRole = localStorage.getItem("role");
    setRole(LocalRole);
    fetchData();
    setLen(invoices.length);
  }, []);

  return (
    <>
      <div className="head-invoice">
        <div className="invoice-head">
          <div className="invoice">
            <div>
              <h1>Invoices</h1>
              {/* <p>There are {len} total invoices</p> */}
              <p>All invoices</p>
            </div>

            <div className="drop-add-btn-head">
              {/* <Dropdown>
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
              </Dropdown> */}
              {/* {role === "admin" ? ( */}
              <button className="add-new-btn" onClick={handleShow}>
                <span>
                  <AiFillPlusCircle className="new-icon" />
                </span>
                <span> New Invoice</span>
              </button>
              {/* ) : (
                ""
              )} */}
            </div>
          </div>
        </div>
        <div className="cards-head">
          {invoices.map((item, index) => {
            return (
              <>
                <div
                  className="cards"
                  onClick={() => navigate(`/details/${item._id}`)}
                >
                  <h5 className="idno">{item.pid}</h5>
                  <p className="date">Due {item.invoicedate}</p>
                  <h4 className="name">{item.clientsname}</h4>
                  <h3 className="amount">{item.total}</h3>
                  <div className="card-status">
                    {item.status === "Paid" ? (
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
        <AddItem handleClose={handleClose} show={show} fetchData={fetchData} />
      </div>
    </>
  );
}

export default Invoice;
