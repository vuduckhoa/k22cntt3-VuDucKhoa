import React, { Component } from 'react'

export default class class_vuduckhoa extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Vu Duc khoa",
            class:"k22cnt3"
        }
    }
    users={
        name:"Vu Duc Khoa",
        age:20
    }
    //ham xu li
    handleChange=(Event)=>{
        this.setState({
            fullName:"Dang Ngoc Mai",
        })
    }
  render() {
    return (
      <div>
        <h2>
            class component demo
        </h2>
        {this.users.name}-{this.users.age}

        <hr>
        <h3>info: {this.props.info}</h3>
        <h3>tine:{this.props.time}</h3>
        </hr>
        <h3>state
            fullName:{this.state.fullName}
            class:{this.state.class}
        </h3>
        <button onClick={this.handleChange}>Change Name</button>
      </div>
    )
  }
}

