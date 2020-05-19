import React from "react";

function TransactionJumbotron({ children }) {
  return (
    <div
      style={{ height: 120, clear: "both", paddingTop: 10, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default TransactionJumbotron;