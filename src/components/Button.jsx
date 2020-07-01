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
    } else if (this.props.type === 'add_task') {
    operation = {
      action: 'showModal',
      modalToShow: 'add_task'
    }       
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
    } else if(type === 'add_task') {
      content = 'Add task'
    } else if(type === 'save_task') {
      content = 'Save task'
    }
    return content;
  }
  render() {
    const buttonType = this.props.type;
    const buttonColor = this.props.color ? this.props.color : '';
    return (
      <button className={`btn ${buttonType} ${buttonColor}`} onClick={this.executetClickEvent}>
        {this.getButtonContent(buttonType)}
      </button>
    );
  }
}