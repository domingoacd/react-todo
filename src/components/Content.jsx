import React from 'react';
import Button from '../components/Button';
import MiniList from '../components/MiniList';
import '../css/content.css';

export default class Content extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      thereAreNoLists: true,
      lists: null
    }
  }
  showModal() {
    
  }

  componentDidMount () {
    const savedLists = localStorage.getItem('lists');
    if (savedLists) {
      this.setState({thereAreNoLists: false});
    } else {
      this.setState({thereAreNoLists: true});
    }
  }
  
  getAllLists() {
    return(
      <div>
        <MiniList color="blue" name="Homework" amount_of_tasks="4" />
        <MiniList color="orange" name="Chores" amount_of_tasks="2" />
      </div>
    )
  }
  render() {
    return (
      <div className="content">
        <div className="main">
          <h1>Hello!</h1>
          <h2>This are your lists</h2>
          <Button type="new_list" />
          <div className="lists_container">
            {
              !this.state.thereAreNoLists ?
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
