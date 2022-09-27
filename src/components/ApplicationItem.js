import React from "react";
import "./styles/ApplicationItem.css"

function ApplicationItem(props) {

  return (
    <div>
      <div>{props.date.toISOString()}</div>
      <div>
        <div>{props.companyName}</div>
        <div>{props.status}</div>
        <div>{props.notes}</div>
      </div>
    </div>
  );
}

export default ApplicationItem;
