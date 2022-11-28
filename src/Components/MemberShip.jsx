import "../Styles/MemberShip.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Config } from "../Config/Config";

function MemberShip() {
  const [status, setStatus] = useState({
    // name: "The Fault In Our Stars",
    plan: "pro",
    role: "admin",
    // author: "John Green",
    // img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
    // price: 250,
    price: 50,
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_WL1V3TaNtcPpa0",
      amount: data.amount,
      currency: data.currency,
      // name: book.name,
      // description: "Test Transaction",
      description: "Pro Membership",
      // image: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = `${Config.api}/payment/verify`;
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = `${Config.api}/payment/orders`;
      const { data } = await axios.post(orderUrl, { amount: status.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="member-card-head">
        {/* <div className="mcard1">
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
        </div> */}
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
            <button className="buy2" onClick={handlePayment}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberShip;
