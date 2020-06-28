import React from 'react';
import Button from '../components/Button';
import Mini_list from '../components/Mini_list';
import '../css/content.css';

export default class Content extends React.Component{
  render() {
    return (
      <div className="content">
        <div className="main">
          <h1>Hello!</h1>
          <h2>This are your lists</h2>
          <Button type="new_list" />
          <div className="lists_container">
            <Mini_list color="blue" name="Homework" amount_of_tasks="4"/>
          </div>
        </div>
      </div>
    );
  }
}
