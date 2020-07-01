import React from 'react';
import storage from '../storage';
import '../css/task.css';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     ...this.props.taskData
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    this.props.update(this.state.id);
    storage.updateTask(this.state.id, this.state.done);
  }
  handleChange(e) {
    this.setState((prevState, props) => {
      return {done: !prevState.done};
    });
  }

  getInputStatus() {

  }
  render() {
    return (
      <div className={`task ${this.props.color} ${this.state.done ? 'done' : ''}`} >
        <input type="checkbox" name="" id="" onChange={this.handleChange} defaultChecked={this.state.done} />
        <p>
          {this.props.taskData.text}
        </p>
        <span className="delete-task"></span>
      </div>
    )
  }
}