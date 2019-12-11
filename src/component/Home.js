import React from 'react';
import List from './List';

export default class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Yorman',
      title: 'Yorman\'s To do\'s',
      postNumber: 0,
      input: '',
      tareas: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    let value = event.target.value;
    this.setState({...this.state, input: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let arr = this.state.tareas;
    arr.push(this.state.input);
    this.setState({tareas: arr, input:''})
    console.log(this.state.tareas);
  }

  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.title}</h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInputChange} value={this.state.input}/>
        </form>
        <List valor={this.state.input}/>
      </div>
    )
  }
}