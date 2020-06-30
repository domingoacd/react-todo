import React from 'react';
import Button from '../components/Button';
import MiniList from '../components/MiniList';
import Modal from '../components/Modal';
import List from '../components/List';
import storage from '../storage';
import '../css/content.css';

export default class Content extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      thereAreNoLists: true,
      lists: null,
      showModal: false,
      modalType: undefined,
      currentList: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateLists = this.updateLists.bind(this);
    this.showListConent = this.showListConent.bind(this);
    this.closeList = this.closeList.bind(this);
  }

  showListConent(listId) {
    const listToShow = storage.getSpecificList(listId);
    this.setState({currentList: listToShow});
    console.log(listToShow)
  }

  handleButtonClick(operation) {
    if (operation.action === 'showModal') {
      this.setState({
        showModal: true,
        modalType: operation.modalToShow
      });
    }
  }

  closeModal() {
    this.setState({showModal: false});
  }

  closeList() {
    this.setState({currentList: false});
  }

  componentDidMount () {
    const savedLists = storage.getLists();
    if (savedLists) {
      this.setState({
        thereAreNoLists: false,
        lists: savedLists
      });
    } else {
      this.setState({thereAreNoLists: true});
    }
  }
  updateLists(newLists) {
    this.setState({
      thereAreNoLists: false,
      lists: newLists
    });
  }
  getAllLists() {
    const lists = this.state.lists.map(list => {
      return <MiniList key={list.id} listId={list.id} color={list.color} name={list.name} amount_of_tasks={list.tasks.length} showList={this.showListConent}/>;
    });

    return lists;
  }
  render() {
    return (
      <div className="content">
        <Modal show={this.state.showModal} type={this.state.modalType} close={this.closeModal} updateLists={this.updateLists}/>
        <List listData={this.state.currentList} close={this.closeList}/>
        <div className="main">
          <h1>Hello!</h1>
          <h2>This are your lists</h2>
          <Button type="new_list" clickHandler={this.handleButtonClick}/>
          <div className="lists_container">
            {
                this.state.thereAreNoLists ?
                <p className="no_lists">Oh, there are no lists yet.</p>
                :
                this.getAllLists()
            }
            
            {/* <p className="no_lists">Oh, there are no lists yet.</p> */}
          </div>
        </div>
      </div>
    );
  }
}
