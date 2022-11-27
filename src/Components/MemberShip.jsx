import "../Styles/MemberShip.css";
import React from "react";

function MemberShip() {
  return (
    <>
      <div className="member-card-head">
        <div className="mcard1">
          <div className="mcard-head1">
            <h1 className="m-amount">$35</h1>
          </div>
          <h1 className="mb-amount">$35</h1>
          <div className="mbody">
            <ul>
              <li>
                <h1>Basic</h1>
              </li>
              <li>Create invoice</li>
              <li>View all items</li>
              <li>View the payment status</li>
            </ul>
          </div>{" "}
          <div className="buy-btn-head">
            <button className="buy1">Get Started</button>
          </div>
        </div>
        <div className="mcard2">
          <div className="mcard-head2">
            <h1 className="m-amount">$50</h1>
          </div>
          <h1 className="mb-amount">$50</h1>
          <div className="mbody">
            <ul>
              <li>
                <h1>Pro</h1>
              </li>
              <li>Create invoice</li>
              <li>Edit & Delete items</li>
              <li></li>
              <li>Access all payment status</li>
            </ul>
          </div>
          <div className="buy-btn-head">
            <button className="buy2">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberShip;
