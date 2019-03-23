import React, { Component } from 'react';


class ShowDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    handleShowDate = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible,
            }
        })
    }

    render() {
        return (
            <div>
                 <h2>Current Date</h2>
                 <a href="#" className="TimeBtn" onClick={this.handleShowDate}>{this.state.visible ? "Hide Date" :  "Show Date"}</a>
                 {this.state.visible && <p>Current Time: &nbsp; <span className="DisplayTime">{this.props.time}</span></p>}
            </div>
        ) 
           
    }
} 



// export default ShowDate (diferent way to export a class)
export {ShowDate}

