import React from "react";

function Tabs(props) {
  return (
    <div className="profilex">
      <dt>
        <img
          className="logox"
          role="img"
          src={props.logo}
          aria-label="YouTube"
        />
      </dt>
      <dd className="descript">{props.description}</dd>
      <div className="emlinker">
        <a href={props.linker} target="_blank">
          <p>
            <em>{props.toclick}</em>
          </p>
        </a>
        <p>
          <em>{props.toclickemail}</em>
        </p>
      </div>
    </div>
  );
}

export default Tabs;
