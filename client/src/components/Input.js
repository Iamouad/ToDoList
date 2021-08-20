import React, { Component } from 'react';
import axios from 'axios';
class Input extends Component {
  state = {
    action: ''
  }
  addTodo = () => {
    const {action} = this.state
    if(action && action.length > 0){
      axios.post('/api/todos', {
          "todo": action
      }) 
        .then(res => {
           if(res.data){
             this.props.getTodos();
             this.setState({action: ""})
           }
        })
        .catch(err => console.log(err))
    }else{
      alert("Input field is required");
    }
  }
  handleChange = (e) => {
    this.setState({
      action: e.target.value
    })
  }
  render(){
    let { action } = this.state;
      return(
        <div>
          <input type="text" onChange={this.handleChange} value={action} />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
      )
    }
}
export default Input