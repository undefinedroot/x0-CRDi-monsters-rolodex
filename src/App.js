import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = { monsters: [], searchField: '' };
  }

  // when component is rendered the first time
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }));
  }

  // 'this' points to this function
  // unless it is called by an arrow function
  // which switches the context from self to the calling code
  //    handleChange(e) {}

  // shortcut, using arrow function instead
  // lexical scope bind automatically
  handleChange = (e) => {
    this.setState(
      { searchField: e.target.value },
      () => {
        // callback to execute after .setState() is finished
        // console.log(this.state.searchField);
      }
    );
  }

  // .setState() is an async call due to the fact
  // that we are interacting with the virtual dom and
  // not the actual dom directly
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox
          placeholder="search monsters"
          handleChange={
            this.handleChange
          }>
        </SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
