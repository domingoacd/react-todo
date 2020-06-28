import React from 'react';

export default class Mini_list extends React.Component {
  render() {
    return(
      <div className={`mini_list ${this.props.color}`}>
        <h3 className="title">{this.props.name}</h3>
        <p className="amount_of_tasks">{this.props.amount_of_tasks} tasks</p>
      </div>
    );
  }
}