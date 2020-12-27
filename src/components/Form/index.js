import React from "react";

export function Input(props) {
  return (
    <div className="form-group" style={{display: "block", padding:"1rem 25% 0 25%"}}>
      <div>
        <input className="form-control" {...props} />
      </div>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button className="bg-dark"{...props} style={{float: "right", display: "inline-block", marginBottom: "1rem", marginRight: "25%" }} className="btn btn-seconday">
      {props.children}
    </button>
  );
}