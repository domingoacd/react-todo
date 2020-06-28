import React from 'react';
import '../css/button.css';
export default class Button extends React.Component{

  render() {
    return (
      <button className={`btn ${this.props.type}`}>
        <span className="plus_icon">+</span>
        Add list
      </button>
    );
  }
}