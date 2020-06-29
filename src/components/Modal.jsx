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
  }

  handleInputChange(e) {
    this.setState({inputValue: e.target.value.trim()});
  }

  closeModal() {
    this.props.close();
  }

  saveList() {
    const listName = this.state.inputValue;
    let updatedLists = '';
    storage.saveList(listName);

    updatedLists = storage.getLists();
    this.props.updateLists(updatedLists);

    this.setState({inputValue: ''});
    this.closeModal();
  }

  getModalContent(type) {
    let content = "";
    if (type === 'add_list') {
      content = 
        <div className="modal-content">
          <h4 className="modal-title">List name</h4>
          <input type="text" className="text-input" onChange={this.handleInputChange}/>
          <Button type="save_list" clickHandler={this.saveList}/>
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