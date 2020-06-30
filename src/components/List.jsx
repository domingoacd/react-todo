import React from "react";
import '../css/list.css';
import backArrow from '../assets/img/back.png';
import menu from '../assets/img/menu.png';
export default class List extends React.Component {

  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu() {

  }

  render() {
    const { listData } = this.props;
    
    return (
      <div className={`list ${listData? 'show ' + listData.color : ''}`}>
        <div className={`list-header`}>
          <div className="header-container">
            <button className="btnBack" onClick={this.props.close}><img src={backArrow} alt="Close list"/></button>
            <h2 className="list-title">{listData.name}</h2>
            <button className="menu" onClick={this.handleMenu}><img src={menu} alt="Menu"/></button>
          </div>
        </div>
      </div>);  
  }
}