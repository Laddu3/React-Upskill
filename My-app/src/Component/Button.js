import React, { Component } from "react";
class Button extends Component {
  render() {
    return (
      <button
        type="button"
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
        }}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;