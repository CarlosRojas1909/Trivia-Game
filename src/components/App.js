import React, { Component } from 'react';
import {ShowDate} from "./Current-Date"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: undefined,
    }
    
  }

  changeBackground = (e) => {
    e.persist()
    this.setState(() => {
      return {
        selectValue: e.target.value
      }
    })
  }

 

  render() {

    const imagesPath = {
      pic: "https://img2.thejournal.ie/inline/2442088/original/?width=630&version=2442088",
      video: "https://www.youtube.com/embed/Ut7ncj4rF-A"
    }

    let today = new Date(); 
    let time =  `${today.getMonth() + 1} - ${today.getDate()} - ${today.getFullYear()}`
    return (
      
      <div style={{background: this.state.selectValue}} className="App">
        <header className="App_header"></header>
        <h1 className="App_title">React Celebrity App</h1>

        {/* dropdown menu to change background color */}

        <div className="BkgColor">
            <h2>Change Background Color</h2>
            <div className="SelectBox">

                <select value={this.state.selectValue}  onChange={this.changeBackground}>
                  <option name="default">Select a color</option>
                  <option  name="red">Red</option>
                  <option  name="yellow">Yellow</option>
                  <option  name="green">Green</option>
                  <option name="blue">Blue</option>
                </select>
            </div>
            {/* display Date */}
            < ShowDate time={time}/>

        </div>

      </div>
    );
  }
}

export default App;




