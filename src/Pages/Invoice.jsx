import React from "react";
import "../Styles/invoice.css";
import "../Styles/invoice.css";
import { AiFillPlusCircle } from "react-icons/ai";

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
          <div className="cards"></div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
