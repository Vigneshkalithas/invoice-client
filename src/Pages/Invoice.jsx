import React from "react";
import "../Styles/invoice.css";
import "../Styles/invoice.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { CardData } from "../Helper/CardDetail";
import { useNavigate } from "react-router-dom";

function Invoice() {
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
              <h5>Fill By Status</h5>
              <button className="add-new-btn">
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
                  <p className="name">{item.date}</p>
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
    </>
  );
}

export default Invoice;
