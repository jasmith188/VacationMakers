import React from "react"
import "../../components/Budget/index.css"

function Budget() {
    return (
        <div className="wrapper">
    <div className="total">
      <div className="total">Your total is: $<span id="total">0</span></div>
    </div>

    <div className="form">
      <input type="text" id="t-name" placeholder="Name of transaction" />
      <input type="number" min="0" id="t-amount" placeholder="Transaction amount" />
      <button id="add-btn"><i className="fa fa-plus buttons"></i> Add Funds</button>
      <button id="sub-btn"><i className="fa fa-minus"></i> Subtract Funds</button>
      <p class="error"></p>
    </div>

    <div className="transactions">
      <table>
        <thead>
          <th>Transaction</th>
          <th>Amount</th>
        </thead>
        <tbody id="tbody">
          
        </tbody>
      </table>
    </div>
    
    <canvas id="myChart"></canvas>
  </div>

    )
}

export default Budget