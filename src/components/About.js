import React, { useState } from "react";

export default function About(props) {
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>
          Welcome to TextUtils. This is a simple app for understanding how React
          Js works. It uses props, hooks such as useState, react router,
          bootstrap and simple JSX. It is a single page application.
        </h3>
      </div>
    </>
  );
}
