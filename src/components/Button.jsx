import React from 'react';
import '../css/button.css';
export default class Button extends React.Component{

  addList() {
    console.log('clicked');
  }

  getClickEvent() {
    if (this.props.type === 'new_list') {
      return this.addList;
    }
  }

  render() {
    return (
      <button className={`btn ${this.props.type}`} onClick={this.getClickEvent()}>
        <span className="plus_icon">+</span>
        Add list
      </button>
    );
  }
}