import React from "react";
import Button from './Button';
import storage from '../storage';
import'../css/modal.css';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveList = this.saveList.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  handleInputChange(e) {
    this.setState({inputValue: e.target.value.trim()});
  }

  closeModal() {
    this.setState({ inputValue: '' });
    this.props.close();
  }

  deleteList() {
    this.props.deleteList();
  }
  saveList() {
    const listName = this.state.inputValue;
    let updatedLists = '';
    storage.saveList(listName);

    updatedLists = storage.getLists();
    this.props.updateLists(updatedLists);

    
    this.closeModal();
  }

  saveTask() {
    const taskName = this.state.inputValue;
    const listId = this.props.list.id;
    let updatedLists = '';

    storage.insertTaskIntoList(taskName, listId);
    updatedLists = storage.getLists();

    this.props.updateLists(updatedLists);
    this.closeModal();
  }

  getModalContent(type) {
    let content = "";
    if (type === 'add_list') {
      content = 
        <div className="modal-content">
          <div className="icon-close" onClick={this.closeModal}></div>
          <h4 className="modal-title">List name</h4>
          <input type="text" className="text-input" onChange={this.handleInputChange} value={this.state.inputValue}/>
          <Button type="save_list" clickHandler={this.saveList}/>
        </div>;
    } else if (type === 'add_task') {
      content =
        <div className="modal-content">
          <div className="icon-close" onClick={this.closeModal}></div>
          <h4 className="modal-title">Task:</h4>
          <input type="text" className="text-input" onChange={this.handleInputChange} value={this.state.inputValue}/>
          <Button type="save_task" clickHandler={this.saveTask} color={this.props.list.color}/>
        </div>;
    } else if (type === 'delete_list') {
      content =
        <div className="modal-content">
          <div className="icon-close" onClick={this.closeModal}></div>
          <h4 className="modal-title">Are you sure you want to delete this list?</h4>
          <Button type="delete_list" clickHandler={this.deleteList} color={this.props.list.color} />
        </div>;
    }
    return content;
  }
  render() {
    const modalClasses = this.props.show ? `show ${this.props.type}` : '';
    const modalType = this.props.type;
    return(
      <div className={`modal ${modalClasses}`}>
        {this.getModalContent(modalType)}
      </div>
    );
  }
}