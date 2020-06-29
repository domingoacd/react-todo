import React from 'react';
import '../css/button.css';
export default class Button extends React.Component{

  constructor(props) {
    super(props);
    this.executetClickEvent = this.executetClickEvent.bind(this);
  }


  executetClickEvent() {
    let operation = {}
    if (this.props.type === 'new_list') {
      operation = {
        action: 'showModal',
        modalToShow: 'add_list'
      }
    } else if (this.props.type === 'save_list') {
       
    }
    this.props.clickHandler(operation);
  }
  getButtonContent(type) {
    let content = '';
    if (type === 'new_list') {
      content = 
        <span className="btn-content">
          <span className="plus_icon">+</span>
          Add list
        </span>
      ;
    } else if (type === 'save_list') {
      content = 'Save list';
    }
    return content;
  }
  render() {
    const buttonType = this.props.type;
    return (
      <button className={`btn ${buttonType}`} onClick={this.executetClickEvent}>
        {this.getButtonContent(buttonType)}
      </button>
    );
  }
}