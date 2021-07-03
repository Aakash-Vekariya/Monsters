import React ,{Component} from 'react';
import {CardList} from './component/card-list/card-list.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters : [],
      searchField : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }
  render(){
    const {monsters,searchField}= this.state;
    const filter = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
    <div className="App">
      <h1 className="title">Monsters !!</h1>
      <input type='search' onChange={e => {
        this.setState({searchField : e.target.value}, () => 
        console.log(this.state)
        );
      }}></input><br></br>
      <CardList monsters={filter}>
      
      </CardList>
    </div>
    )
  }
}

export default App;
