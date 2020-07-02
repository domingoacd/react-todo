import React from "react";
import Button from "../components/Button";
import Task from "../components/Task";
import '../css/list.css';
import backArrow from '../assets/img/back.png';
import trash from '../assets/img/delete.png';
export default class List extends React.Component {

  constructor(props) {
    super(props);
    this.deleteList = this.deleteList.bind(this);
    this.getTasksContent = this.getTasksContent.bind(this);

  }
  deleteList() {
    this.props.openModal({
      action: 'showModal',
      modalToShow: 'delete_list'
    });
  }

  getTasksContent() {
    const tasks = this.props.listData.tasks;
    let content = '';
    if (tasks && tasks.length > 0) {
      content = tasks.map(task => {
        return <Task taskData={task} key={task.id} color={this.props.listData.color} />;
      });
    } else {
      content = <p className="no-tasks">No tasks</p>
    }
    return <div className="tasks">{content}</div>
  }
  render() {
    const { listData } = this.props;
    return (
      <div className={`list ${listData? 'show ' + listData.color : ''}`}>
        <div className={`list-header`}>
          <div className="header-container">
            <button className="btnBack" onClick={this.props.close}><img src={backArrow} alt="Close list"/></button>
            <h2 className="list-title">{listData ? listData.name : ''}</h2>
            <button className="delete" onClick={this.deleteList}><img src={trash} alt="Menu"/></button>
          </div>
        </div>

          <div className="tasks-container">
            <div className="tasks-wrapper">
              <h3 className="tasks-title">
                Tasks
              </h3>
              { 
                this.props.listData ?
                  this.getTasksContent()
                  : ''
              }
              <Button type="add_task" clickHandler={this.props.openModal}/>
            </div>
          </div>
      </div>);  
  }
}