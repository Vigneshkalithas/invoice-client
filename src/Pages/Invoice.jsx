import React from "react";
import "../Styles/invoice.css";
import "../Styles/invoice.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";

function Invoice() {
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
          <div className="cards">
            <h5>#RT3080</h5>
            <p className="date">Due 19 Aug 2021</p>
            <p className="name">Jensen Huang</p>
            <h3 className="amount">£ 1,800.90</h3>
            <div className="card-status">
              <div className="status">
                <GoPrimitiveDot />
                Paid
              </div>

              <MdKeyboardArrowRight className="goArrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
