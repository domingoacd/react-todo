import React from 'react';
import storage from '../storage';
import '../css/task.css';

export default class Task extends React.Component {
  render() {
    return (
      <div className={`task ${this.props.color}`}>
        <input type="checkbox" name="" id="" />
        {this.props.taskData.text}
        <span className="delete-task"></span>
      </div>
    )
  }
}