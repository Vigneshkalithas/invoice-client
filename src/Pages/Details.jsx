import React from "react";
import "../Styles/Detail.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import Table from "../Components/Table";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
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
              <div className="status-paid">
                <GoPrimitiveDot />
                Paid
              </div>
            </div>
            <div className="ed-btn-head">
              <button className="edit-btn">Edit</button>
              <button className="del-btn">Delete</button>
              <button className="mark-btn">Mark as Paid</button>
            </div>
          </div>
          <div className="full-details">
            <div className="header-content">
              <div className="child-1">
                <div>
                  <h3>#RT3080</h3>
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
                    <h3>18 Aug 2021</h3>
                  </div>
                  <div>
                    <p>Payment Date</p>
                    <h3>19 Aug 2021</h3>
                  </div>
                </div>
                <div>
                  <p>Bill To </p>
                  <h3>Jensen Huang</h3>
                  <p>
                    106 Kendell Street
                    <br />
                    Sharrington <br />
                    NR24 5WQ <br />
                    United Kingdom
                  </p>
                </div>

                <div>
                  <p>Sent to </p>
                  <h3>jensenh@mail.com</h3>
                </div>
              </div>
              <div className="child-3"></div>
            </div>
            <div className="footer-content">
              <div className="inside-footer-content">
                <Table />
              </div>
              <div className="total">
                <p>Amount Due</p>
                <h2>£ 1800.90</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
