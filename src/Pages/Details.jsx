import React, { useState, useContext, useEffect } from "react";
import "../Styles/Detail.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import Table from "../Components/Table";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Config } from "../Config/Config";
import { MyContext } from "../context";
import EditItem from "../Components/EditItem";

function Details() {
  const navigate = useNavigate();
  const [tok, setTok] = useState("");
  const [oneInvoice, setOneInvoices] = useState([]);
  const [role, setRole] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    userRole,
    setUserRole,
  } = useContext(MyContext);

  const { id } = useParams();

  let fetchData = async () => {
    try {
      let result = await axios.get(`${Config.api}/invoice/get/${id}`);
      setOneInvoices(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function markPaid() {
    if (userRole == "admin" || role == "admin") {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tok}`,
        };
        let result = await axios.patch(
          `${Config.api}/invoice/markpaid/${id}`,
          {
            status: "Paid",
          },
          {
            headers: headers,
          }
        );
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
    // if (
    //   userRole == "user" ||
    //   role == "user" ||
    //   userRole == "viewer" ||
    //   role == "viewer"
    // ) {
    //   alert("Sorry you are not admin please upgrade your plan");
    //   navigate("/payment");
    // }
    else {
      // alert("Please Login");
      // navigate("/login");
      alert("Sorry you are not admin please upgrade your plan");
      navigate("/payment");
    }
  }

  async function Delete() {
    if (userRole == "admin" || role == "admin") {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tok}`,
        };
        const result = await axios.delete(
          `${Config.api}/invoice/delete/${id}`,
          { headers: headers }
        );
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
    // if (
    //   userRole == "user" ||
    //   role == "user" ||
    //   userRole == "viewer" ||
    //   role == "viewer"
    // ) {
    //   alert("Sorry you are not admin please upgrade your plan");
    //   navigate("/payment");
    // }
    else {
      // alert("Please Login");
      // navigate("/login");
      alert("Sorry you are not admin please upgrade your plan");
      navigate("/payment");
    }
  }

  useEffect(() => {
    fetchData();
    const LocalRole = localStorage.getItem("role");
    setRole(LocalRole);
    const token = localStorage.getItem("react-app-token");
    setTok(token);
  }, []);

  return (
    <>
      <div className="detail-head">
        <div className="details">
          <div className="go-back-head" onClick={() => navigate("/")}>
            <span>
              <MdOutlineKeyboardArrowLeft className="back-icon" />
            </span>
            <span>Go back</span>
          </div>
          <div className="statue-edit-head">
            <div className="status-status">
              <p>Status</p>

              {oneInvoice.status === "Paid" ? (
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
            </div>
            <div className="ed-btn-head">
              <button className="edit-btn" onClick={handleShow}>
                Edit
              </button>
              <button className="del-btn" onClick={() => Delete()}>
                Delete
              </button>
              {oneInvoice.status === "Paid" ? (
                ""
              ) : (
                <button className="mark-btn" onClick={() => markPaid()}>
                  Mark as Paid
                </button>
              )}
            </div>
          </div>
          <div className="full-details">
            <div className="header-content">
              <div className="child-1">
                <div>
                  <h3>{oneInvoice.pid}</h3>
                  <p> Re-branding</p>
                </div>
                <div>
                  <p>
                    9 Union Terrace
                    <br />
                    London <br />
                    E1 3EZ <br />
                    United Kingdom
                  </p>
                </div>
              </div>
              <div className="child-2">
                <div className="invoiceandDate">
                  <div>
                    <p>Invoice Date</p>
                    <h5>{oneInvoice.invoicedate}</h5>
                  </div>
                  <div>
                    <p>Payment Date</p>
                    <h5>{oneInvoice.invoicedate}</h5>
                  </div>
                </div>
                <div>
                  <p>Bill To </p>
                  <h5>{oneInvoice.clientsname}</h5>
                  <p>
                    {/* 106 Kendell Street */}
                    {oneInvoice.clientaddress}
                    <br />
                    {/* Sharrington  */}
                    {oneInvoice.clientcity}
                    <br />
                    {/* NR24 5WQ */}
                    {oneInvoice.clientcountry}
                    <br />
                    {/* United Kingdom */}
                  </p>
                </div>

                <div>
                  <p>Sent to </p>
                  {/* <h5>jensenh@mail.com</h5> */}
                  <h5>{oneInvoice.clientsemail}</h5>
                </div>
              </div>
              <div className="child-3"></div>
            </div>
            <div className="footer-content">
              <div className="inside-footer-content">
                <Table oneInvoice={oneInvoice} />
              </div>
              <div className="total">
                <p>Amount Due</p>
                <h2>£ {oneInvoice.total}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="canvas-head">
        <EditItem
          handleClose={handleClose}
          show={show}
          id={id}
          fetchData={fetchData}
        />
      </div>
    </>
  );
}

export default Details;
