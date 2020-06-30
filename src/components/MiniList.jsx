import React from 'react';
import '../css/mini_list.css';

export default class MiniList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      id: this.props.listId
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    this.props.showList(this.state.id);
  }
  render() {
    return(
      <div className={`mini_list ${this.props.color}`} onClick={this.handleClick}>
        <h3 className="title">{this.props.name}</h3>
        <p className="amount_of_tasks">{this.props.amount_of_tasks} tasks</p>
      </div>
    );
  }
}