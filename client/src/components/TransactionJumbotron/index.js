import React from "react";

function TransactionJumbotron({ children }) {
  return (
    <div
      style={{ height: 170, clear: "both", paddingTop: 60, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default TransactionJumbotron;