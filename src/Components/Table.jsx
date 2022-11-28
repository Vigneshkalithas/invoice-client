import React from "react";
import "../Styles/Table.css";

function Table({ oneInvoice }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>Brand Guidelines</td>
            <td>1</td>
            <td>£ 1800.90</td>
            <td>£ 1800.90</td> */}
            <td>{oneInvoice.itemname}</td>
            <td>{oneInvoice.qty}</td>
            <td>{oneInvoice.price}</td>
            <td>£{oneInvoice.total}</td>
          </tr>
          {/* <tr>
            <td>avqevv</td>
            <td>1</td>
            <td>£ 0.00</td>
            <td>£ 0.00</td>
          </tr> */}
        </tbody>
        {/* <tfoot>
          <tr>
            <td>Sum</td>
            <td>$180</td>
          </tr>
        </tfoot> */}
      </table>
    </>
  );
}

export default Table;
