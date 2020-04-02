import React, { Component } from 'react';
import Todos from './components/Todos.js'


class App extends Component {
  
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Walk dogs',
        completed: true
      },
      {
        id: 2,
        title: 'Practice React',
        completed: false
      }
    ]
  }

  render(){
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
