import React from 'react';
import storage from '../storage';
import '../css/task.css';
import close from '../assets/img/cerrar.png'

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     ...this.props.taskData,
     hide: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidUpdate() {
    storage.updateTask(this.state.id, this.state.done);
  }
  handleChange(e) {
    this.setState((prevState, props) => {
      return {done: !prevState.done};
    });
  }

  deleteTask() {
    storage.deleteTask(this.state.id);
    this.setState({hide: true});

  }
  render() {
    return (
      <div className={`task ${this.props.color} ${this.state.done ? 'done' : ''} 
        ${this.state.hide ? 'hide' : ''}`} >
        <input type="checkbox" name="" id="" onChange={this.handleChange} defaultChecked={this.state.done} />
        <p>
          {this.props.taskData.text}
        </p>
        <span className="delete-task" onClick={this.deleteTask}>
          <img src={close} alt=""/>
        </span>
      </div>
    )
  }
}